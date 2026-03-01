export default function CookiePolicy() {
  const openCookieSettings = (event) => {
    event.preventDefault();
    if (window.klaro?.show) {
      window.klaro.show(undefined, true);
    }
  };

  return (
    <section className="page-hero page-legal py-5" aria-labelledby="cookie-policy-title">
      <div className="container narrow legal-shell">
        <h1 id="cookie-policy-title">Politica privind cookie-urile</h1>
        <p className="legal-lead">
          Această politică explică modul în care site-ul DesignToro utilizează fișierele cookie, alte tehnologii de stocare locală și
          servicii terțe aferente experienței de navigare.
        </p>
        <div className="legal-content legal-sheet">
          <p>
            <strong>Ultima actualizare:</strong> 17 februarie 2026.
          </p>

          <h2>1. Ce sunt cookie-urile</h2>
          <p>
            Cookie-urile sunt fișiere text mici stocate pe dispozitivul utilizatorului pentru recunoaștere, autentificare de sesiune sau măsurare
            de utilizare. În funcție de scop, ele pot fi strict necesare, pot îmbunătăți funcționalitatea sau pot ajuta la analizarea traficului.
          </p>

          <h2>2. Ce cookie-uri folosim pe site</h2>
          <h3>2.1. Cookie-uri necesare</h3>
          <ul>
            <li>
              <strong>designtoro-consent</strong> (gestionat de Klaro): reține preferințele tale de consimțământ pentru cookie-uri și evită
              reapariția nedorită a ferestrei de notificare.
            </li>
            <li>
              Cookie-uri tehnice legate de funcționarea elementelor esențiale ale interfeței (ex. preferințe de interacțiune, funcționalități de bază).
            </li>
          </ul>

          <h3>2.2. Cookie-uri analitice</h3>
          <p>
            Dacă acorzi consimțământ pentru categoria „Analitice”, activăm instrumente de măsurare a traficului prin Google Analytics 4 (GA4),
            care pot include identificatori statistici (de tip <strong>_ga</strong> și echivalente) pentru agregări anonime.
          </p>
          <p>
            Aceste date sunt folosite pentru îmbunătățirea performanței site-ului și nu pentru marketing personalizat direct în afara scopului de
            analiză agregată a navigării.
          </p>

          <h2>3. Durata de stocare</h2>
          <ul>
            <li>Cookie-urile necesare: până la expirarea setării de expirare indicate în instrumentul de consimțământ.</li>
            <li>Cookie-urile analitice: conform politicii furnizorului terț (în mod obișnuit perioade fixe de la câteva luni până la 2 ani).</li>
          </ul>

          <h2>4. Cum îți poți gestiona consimțământul</h2>
          <ul>
            <li>
              La prima vizită, poți alege între a accepta toate, a refuza opționalele și a salva selecția pentru „cookie-uri necesare” și
              „analitice”.
            </li>
            <li>Poți reveni oricând în „Setări cookie” din footerul paginii.</li>
            <li>Poți modifica browserul (Safari, Chrome, Firefox etc.) pentru a bloca sau șterge cookie-uri, știind că unele funcționalități pot fi
              afectate.</li>
          </ul>
          <div className="legal-action">
            <button type="button" className="btn btn-secondary legal-consent-button" onClick={openCookieSettings}>
              Retrage sau modifică consimțământul
            </button>
          </div>

          <h2>5. Ce se întâmplă dacă refuzi cookie-urile non-esențiale</h2>
          <p>
            Site-ul va rula în modul de bază. Conținutul nu va fi blocat, însă anumite statistici de trafic și măsuri de îmbunătățire a experienței
            nu vor putea fi generate în aceeași măsură.
          </p>

          <h2>6. Servicii terțe și transferuri</h2>
          <ul>
            <li>
              Google Analytics procesează date agregate către infrastructura Google (posibil în afara Spațiului European), pe baza setărilor tehnice
              disponibile.
            </li>
            <li>
              Clarificările suplimentare se găsesc în politicile oficiale ale furnizorilor terți utilizați (Google, etc.).
            </li>
          </ul>

          <h2>7. Securitate și protecția datelor</h2>
          <p>
            Politica de confidențialitate a site-ului acoperă cum sunt prelucrate datele personale pe care le transmiteți prin formulare,
            e-mail sau alte canale. Pentru toate drepturile GDPR, ne poți contacta la{' '}
            <a href="mailto:office@designtoro.ro">office@designtoro.ro</a>.
          </p>

          <h2>8. Actualizarea acestei politici</h2>
          <p>
            Actualizăm această politică ori de câte ori modificăm furnizorii sau scopurile de stocare. Data de mai sus indică ultima versiune
            publicată.
          </p>
          <p>
            Prin utilizarea site-ului și prin alegerea setărilor în bara de consimțământ, îți exprimi înțelegerea asupra acestor condiții.
          </p>
        </div>
      </div>
    </section>
  );
}
