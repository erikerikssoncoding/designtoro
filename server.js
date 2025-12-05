import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const distPath = path.join(__dirname, 'dist');

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

app.post('/api/contact', (req, res) => {
  const payload = req.body || {};
  const errors = validateFields(payload, ['name', 'email', 'message', 'terms']);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, fieldErrors: errors, message: 'Te rugăm să completezi câmpurile obligatorii.' });
  }

  return res.json({ success: true, message: 'Cererea ta a fost înregistrată. Revenim în maximum o zi lucrătoare.' });
});

app.post('/api/offer', (req, res) => {
  const payload = req.body || {};
  const errors = validateFields(payload, ['name', 'email', 'phone', 'details', 'terms']);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, fieldErrors: errors, message: 'Completează detaliile pentru ofertă.' });
  }

  return res.json({ success: true, message: 'Am preluat cererea ta și revenim cu oferta completă.' });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Serverul pornește pe portul ${port}`);
});
