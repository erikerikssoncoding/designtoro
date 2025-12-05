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

const emailConfigured = Boolean(
  process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS
);

const transporter = emailConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

app.use(express.json());
app.use(express.static(distPath));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

function validateFields(fields, required) {
  const errors = {};
  required.forEach((field) => {
    if (!fields[field] || (typeof fields[field] === 'string' && !fields[field].trim())) {
      errors[field] = 'Acest câmp este obligatoriu.';
    }
  });
  return errors;
}

function isSpam(payload) {
  return Boolean(payload.company && String(payload.company).trim());
}

async function sendEmails(adminMailOptions, clientMailOptions) {
  if (!transporter) {
    throw new Error('Serviciul de email nu este configurat.');
  }

  const adminPromise = transporter.sendMail(adminMailOptions);
  const clientPromise = transporter.sendMail(clientMailOptions);

  await Promise.all([adminPromise, clientPromise]);
}

app.post('/api/contact', (req, res) => {
  const payload = req.body || {};
  const errors = validateFields(payload, ['name', 'email', 'message', 'terms']);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, fieldErrors: errors, message: 'Te rugăm să completezi câmpurile obligatorii.' });
  }

  if (isSpam(payload)) {
    return res.status(400).json({ success: false, message: 'Cererea nu a putut fi procesată.' });
  }

  const adminMail = {
    to: OFFICE_EMAIL,
    from: DEFAULT_FROM,
    replyTo: payload.email,
    subject: `Mesaj nou din formularul de contact - ${payload.name}`,
    text:
      `Ai primit un mesaj nou din formularul de contact:\n\n` +
      `Nume: ${payload.name}\n` +
      `Email: ${payload.email}\n` +
      `Telefon: ${payload.phone || 'necompletat'}\n` +
      `Mesaj:\n${payload.message}\n\n` +
      `Referrer: ${payload.referrer || 'necunoscut'}\n` +
      `Pagină: ${payload.page_url || 'necunoscută'}`,
  };

  const clientMail = {
    to: payload.email,
    from: DEFAULT_FROM,
    subject: 'Am primit mesajul tău - DesignToro',
    text:
      `Salut ${payload.name || ' '},\n\nÎți mulțumim că ne-ai contactat! Echipa DesignToro a primit detaliile tale și îți va răspunde în maximum o zi lucrătoare.\n\n` +
      `Detalii trimise:\n- Telefon: ${payload.phone || 'necompletat'}\n- Mesaj: ${payload.message}\n\n` +
      `Dacă vrei să adaugi ceva, răspunde direct la acest email.\n\n` +
      `Mulțumim,\nEchipa DesignToro`,
  };

  return sendEmails(adminMail, clientMail)
    .then(() => res.json({ success: true, message: 'Cererea ta a fost înregistrată. Revenim în maximum o zi lucrătoare.' }))
    .catch((error) => {
      console.error('Eroare la trimiterea emailurilor pentru contact:', error);
      return res.status(500).json({
        success: false,
        message: 'Nu am putut trimite mesajul. Încearcă din nou sau contactează-ne direct pe email.',
      });
    });
});

app.post('/api/offer', (req, res) => {
  const payload = req.body || {};
  const errors = validateFields(payload, ['name', 'email', 'phone', 'details', 'terms']);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, fieldErrors: errors, message: 'Completează detaliile pentru ofertă.' });
  }

  if (isSpam(payload)) {
    return res.status(400).json({ success: false, message: 'Cererea nu a putut fi procesată.' });
  }

  const adminMail = {
    to: OFFICE_EMAIL,
    from: DEFAULT_FROM,
    replyTo: payload.email,
    subject: `Cerere ofertă - ${payload.name}${payload.offer_plan ? ` (${payload.offer_plan})` : ''}`,
    text:
      `Ai primit o cerere nouă pentru ofertă:\n\n` +
      `Nume: ${payload.name}\n` +
      `Email: ${payload.email}\n` +
      `Telefon: ${payload.phone}\n` +
      `Plan selectat: ${payload.offer_plan || 'necompletat'}\n\n` +
      `Detalii proiect:\n${payload.details}\n\n` +
      `Referrer: ${payload.referrer || 'necunoscut'}\n` +
      `Pagină: ${payload.page_url || 'necunoscută'}`,
  };

  const clientMail = {
    to: payload.email,
    from: DEFAULT_FROM,
    subject: 'Am primit cererea ta de ofertă - DesignToro',
    text:
      `Salut ${payload.name || ' '},\n\nMulțumim pentru interesul în serviciile DesignToro! Echipa noastră analizează detaliile oferite și revine cu o ofertă personalizată în maximum o zi lucrătoare.\n\n` +
      `Rezumatul cererii:\n- Telefon: ${payload.phone}\n- Plan: ${payload.offer_plan || 'necompletat'}\n- Detalii proiect: ${payload.details}\n\n` +
      `Dacă vrei să completezi informațiile, răspunde direct la acest email.\n\n` +
      `Mulțumim,\nEchipa DesignToro`,
  };

  return sendEmails(adminMail, clientMail)
    .then(() => res.json({ success: true, message: 'Am preluat cererea ta și revenim cu oferta completă.' }))
    .catch((error) => {
      console.error('Eroare la trimiterea emailurilor pentru ofertă:', error);
      return res.status(500).json({
        success: false,
        message: 'Nu am putut trimite cererea. Încearcă din nou sau contactează-ne direct pe email.',
      });
    });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Serverul pornește pe portul ${port}`);
});
