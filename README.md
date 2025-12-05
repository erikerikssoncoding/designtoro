# DesignToro (Node + React)

Acest proiect reproiectează site-ul DesignToro folosind React (Vite) pentru interfață și un server Express simplu pentru a servi build-ul și pentru a gestiona formularele de contact/ofertă.

## Structură
- `src/` – componente React și pagini pentru Acasă, Servicii, Prețuri, Portofoliu și Contact.
- `public/` – resurse statice (imagini și favicon, dacă este cazul) copiate direct în build.
- `server.js` – server Express care expune punctele `/api/contact` și `/api/offer` și livrează bundle-ul Vite.

## Scripturi
- `npm run dev` – pornește mediul de dezvoltare Vite.
- `npm run build` – generează build-ul de producție în `dist/`.
- `npm run preview` – servește build-ul generat de Vite.
- `npm start` – pornește serverul Express și servește conținutul din `dist/` (rulează după `npm run build`).

## Note
Formularele validează client-side și trimit date către API-urile Express. Pentru ca mesajele să fie trimise către `office@designtoro.ro` și să primească clientul confirmarea, configurează următoarele variabile de mediu înainte de a porni serverul:

- `SMTP_HOST` – host-ul serverului de email
- `SMTP_PORT` – portul SMTP (ex. 587 sau 465)
- `SMTP_SECURE` – `true` dacă folosești port securizat (465)
- `SMTP_USER` / `SMTP_PASS` – credențiale pentru autentificare
- `MAIL_FROM` – opțional, adresa folosită în câmpul „from” (implicit `office@designtoro.ro`)
