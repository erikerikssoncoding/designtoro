import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const distPath = path.join(__dirname, 'dist');

const OFFICE_EMAIL = 'office@designtoro.ro';
const DEFAULT_FROM = process.env.MAIL_FROM || OFFICE_EMAIL;
const REQUEST_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000);
const MAX_REQUESTS_PER_WINDOW = Number(process.env.RATE_LIMIT_MAX || 25);
const CONTACT_SUPPORT_EMAIL = OFFICE_EMAIL;

const rateLimitStore = new Map();

function trimOrEmpty(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function toLower(value) {
  return trimOrEmpty(value).toLowerCase();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const PHONE_RE = /^[0-9+().\-\s]{7,30}$/;

function normalizePayload(payload) {
  const normalized = {};
  Object.entries(payload || {}).forEach(([key, value]) => {
    if (key === 'terms') {
      normalized[key] = value === true || String(value).toLowerCase() === 'true' || value === '1' || value === 1;
      return;
    }

    normalized[key] = typeof value === 'string' ? value.trim() : value;
  });
  return normalized;
}

function validateFields(fields, required) {
  const errors = {};

  required.forEach((field) => {
    if (field === 'terms') {
      if (fields[field] !== true) {
        errors[field] = 'Trebuie să confirmi că ești de acord cu termenii.';
      }
      return;
    }

    if (!trimOrEmpty(fields[field])) {
      errors[field] = 'Acest câmp este obligatoriu.';
    }
  });

  return errors;
}

function validateContactPayload(payload) {
  const errors = validateFields(payload, ['name', 'email', 'message', 'terms']);
  const email = toLower(payload.email);

  if (!EMAIL_RE.test(email)) {
    errors.email = 'Introdu o adresă de email validă.';
  }

  if (trimOrEmpty(payload.phone) && !PHONE_RE.test(payload.phone)) {
    errors.phone = 'Introdu un număr de telefon valid.';
  }

  if (trimOrEmpty(payload.message).length > 3000) {
    errors.message = 'Mesajul este prea lung. Păstrează-l sub 3000 de caractere.';
  }

  return errors;
}

function validateOfferPayload(payload) {
  const errors = validateFields(payload, ['name', 'email', 'phone', 'details', 'terms']);
  const email = toLower(payload.email);

  if (!EMAIL_RE.test(email)) {
    errors.email = 'Introdu o adresă de email validă.';
  }

  if (!PHONE_RE.test(payload.phone)) {
    errors.phone = 'Introdu un număr de telefon valid.';
  }

  if (trimOrEmpty(payload.details).length < 10) {
    errors.details = 'Detaliile trebuie să conțină cel puțin 10 caractere.';
  }

  if (trimOrEmpty(payload.details).length > 8000) {
    errors.details = 'Detaliile sunt prea lungi. Păstrează-le sub 8000 de caractere.';
  }

  return errors;
}

function isSpam(payload) {
  return Boolean(payload.company && String(payload.company).trim());
}

function formatText(value) {
  return trimOrEmpty(value) || 'necompletat';
}

function buildMailText(type, payload) {
  if (type === 'contact') {
    return {
      subject: `Mesaj nou din formularul de contact - ${formatText(payload.name)}`,
      adminText:
        `Ai primit un mesaj nou din formularul de contact:\n\n` +
        `Nume: ${formatText(payload.name)}\n` +
        `Email: ${formatText(payload.email)}\n` +
        `Telefon: ${formatText(payload.phone)}\n` +
        `Mesaj:\n${formatText(payload.message)}\n\n` +
        `Referrer: ${formatText(payload.referrer)}\n` +
        `Pagină: ${formatText(payload.page_url)}\n`,
      clientSubject: 'Am primit mesajul tău - DesignToro',
      clientText:
        `Salut ${formatText(payload.name)},\n\nÎți mulțumim că ne-ai contactat! Echipa DesignToro a primit detaliile tale și îți va răspunde în maximum o zi lucrătoare.\n\n` +
        `Detalii trimise:\n- Telefon: ${formatText(payload.phone)}\n- Mesaj: ${formatText(payload.message)}\n\n` +
        `Dacă vrei să adaugi ceva, răspunde direct la acest email.\n\n` +
        `Mulțumim,\nEchipa DesignToro`,
    };
  }

  return {
    subject: `Cerere ofertă - ${formatText(payload.name)}${payload.offer_plan ? ` (${formatText(payload.offer_plan)})` : ''}`,
    adminText:
      `Ai primit o cerere nouă pentru ofertă:\n\n` +
      `Nume: ${formatText(payload.name)}\n` +
      `Email: ${formatText(payload.email)}\n` +
      `Telefon: ${formatText(payload.phone)}\n` +
      `Plan selectat: ${formatText(payload.offer_plan)}\n\n` +
      `Detalii proiect:\n${formatText(payload.details)}\n\n` +
      `Referrer: ${formatText(payload.referrer)}\n` +
      `Pagină: ${formatText(payload.page_url)}\n`,
    clientSubject: 'Am primit cererea ta de ofertă - DesignToro',
    clientText:
      `Salut ${formatText(payload.name)},\n\nMulțumim pentru interesul în serviciile DesignToro! Echipa noastră analizează detaliile oferite și revine cu o ofertă personalizată în maximum o zi lucrătoare.\n\n` +
      `Rezumatul cererii:\n- Telefon: ${formatText(payload.phone)}\n- Plan: ${formatText(payload.offer_plan)}\n- Detalii proiect: ${formatText(payload.details)}\n\n` +
      `Dacă vrei să completezi informațiile, răspunde direct la acest email.\n\n` +
      `Mulțumim,\nEchipa DesignToro`,
  };
}

function createTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT) || 587;
  const secure =
    process.env.SMTP_SECURE === 'true' ||
    process.env.SMTP_SECURE === '1' ||
    port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

const transporter = createTransporter();
if (!transporter) {
  console.warn('Configurarea SMTP nu este completă. Endpoint-urile vor returna eroare.');
}

function getEmailSendError(error, formType = 'contact') {
  const message = `${error?.message || ''}`.toLowerCase();
  const code = error?.code || error?.responseCode;
  const fallbackMessage =
    formType === 'offer'
      ? 'Nu am putut trimite cererea. Încearcă din nou sau contactează-ne direct pe email.'
      : 'Nu am putut trimite mesajul. Încearcă din nou sau contactează-ne direct pe email.';

  if (!transporter || message.includes('nu este configurat')) {
    return {
      status: 503,
      message: `Serviciul de email nu este configurat. Te rugăm să contactezi ${CONTACT_SUPPORT_EMAIL} sau să încerci din nou mai târziu.`,
    };
  }

  if (code === 'EAUTH') {
    return {
      status: 503,
      message: 'Autentificarea SMTP a eșuat. Verifică setările de utilizator/parolă sau contactează-ne direct.',
    };
  }

  if (code === 'ECONNECTION' || code === 'ETIMEDOUT') {
    return {
      status: 503,
      message: 'Nu putem trimite momentan emailurile din cauza unei probleme de conexiune SMTP.',
    };
  }

  return {
    status: 500,
    message: fallbackMessage,
  };
}

function sendEmails(type, payload) {
  if (!transporter) {
    return Promise.reject(new Error('Serviciul de email nu este configurat.'));
  }

  const payloadText = buildMailText(type, payload);
  const adminMail = {
    to: OFFICE_EMAIL,
    from: DEFAULT_FROM,
    replyTo: payload.email,
    subject: payloadText.subject,
    text: payloadText.adminText,
  };

  const clientMail = {
    to: payload.email,
    from: DEFAULT_FROM,
    subject: payloadText.clientSubject,
    text: payloadText.clientText,
  };

  return Promise.all([transporter.sendMail(adminMail), transporter.sendMail(clientMail)]);
}

function cleanupRateLimits() {
  const now = Date.now();
  rateLimitStore.forEach((entry, key) => {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  });
}

setInterval(cleanupRateLimits, Math.max(REQUEST_WINDOW_MS / 4, 30000));

function apiRateLimit(req, res, next) {
  const ip = req.ip || req.connection?.remoteAddress || 'unknown';
  const now = Date.now();
  const existing = rateLimitStore.get(ip) || { count: 0, resetAt: now + REQUEST_WINDOW_MS };

  if (existing.resetAt <= now) {
    existing.count = 1;
    existing.resetAt = now + REQUEST_WINDOW_MS;
  } else {
    existing.count += 1;
  }

  if (existing.count > MAX_REQUESTS_PER_WINDOW) {
    res.set('Retry-After', Math.ceil((existing.resetAt - now) / 1000));
    return res.status(429).json({
      success: false,
      message: 'Prea multe solicitări. Încearcă din nou în câteva minute.',
    });
  }

  rateLimitStore.set(ip, existing);
  return next();
}

function handleContact(payload, res, message) {
  const normalized = normalizePayload(payload);

  const errors = validateContactPayload(normalized);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, fieldErrors: errors, message: 'Te rugăm să corectezi datele din formular.' });
  }

  if (isSpam(normalized)) {
    return res.status(400).json({ success: false, message: 'Cererea nu a putut fi procesată.' });
  }

  return sendEmails('contact', normalized)
    .then(() =>
      res.json({
        success: true,
        message,
      }),
    )
    .catch((error) => {
      console.error('Eroare la trimiterea emailurilor pentru contact:', error);
      const emailError = getEmailSendError(error, 'contact');
      return res.status(emailError.status).json({
        success: false,
        message: emailError.message,
      });
    });
}

function handleOffer(payload, res, message) {
  const normalized = normalizePayload(payload);

  const errors = validateOfferPayload(normalized);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, fieldErrors: errors, message: 'Corectează câmpurile obligatorii.' });
  }

  if (isSpam(normalized)) {
    return res.status(400).json({ success: false, message: 'Cererea nu a putut fi procesată.' });
  }

  return sendEmails('offer', normalized)
    .then(() =>
      res.json({
        success: true,
        message,
      }),
    )
    .catch((error) => {
      console.error('Eroare la trimiterea emailurilor pentru ofertă:', error);
      const emailError = getEmailSendError(error, 'offer');
      return res.status(emailError.status).json({
        success: false,
        message: emailError.message,
      });
    });
}

app.use(express.json({ limit: '24kb' }));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));
app.use(express.static(distPath));

const apiRouter = express.Router();

apiRouter.use(apiRateLimit);

apiRouter.post('/contact', (req, res) => {
  handleContact(
    { ...req.body, referrer: req.body?.referrer, page_url: req.body?.page_url },
    res,
    'Cererea ta a fost înregistrată. Revenim în maximum o zi lucrătoare.',
  );
});

apiRouter.post('/offer', (req, res) => {
  handleOffer(
    { ...req.body, referrer: req.body?.referrer, page_url: req.body?.page_url },
    res,
    'Am preluat cererea ta și revenim cu oferta completă.',
  );
});

apiRouter.get('/health', (_req, res) => {
  const smtpConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS);
  return res.json({
    success: true,
    status: smtpConfigured ? 'ok' : 'email-config-missing',
    smtpConfigured,
    supportEmail: CONTACT_SUPPORT_EMAIL,
  });
});

apiRouter.use((_req, res) => {
  return res.status(404).json({ success: false, message: 'Endpoint API invalid.' });
});

app.use('/api', apiRouter);

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Serverul pornește pe portul ${port}`);
});
