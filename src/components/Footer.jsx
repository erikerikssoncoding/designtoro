import { NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Acasă', icon: 'fa-solid fa-house', key: 'home' },
  { to: '/servicii', label: 'Servicii', icon: 'fa-solid fa-layer-group', key: 'servicii' },
  { to: '/preturi', label: 'Prețuri', icon: 'fa-solid fa-tags', key: 'preturi' },
  { to: '/portofoliu', label: 'Portofoliu', icon: 'fa-solid fa-briefcase', key: 'portofoliu' },
  { to: '/contact', label: 'Contact', icon: 'fa-solid fa-envelope', key: 'contact' },
];

const socialLinks = [
  {
    href: 'https://www.instagram.com/designtoro.romania',
    label: 'Instagram',
    icon: 'fa-brands fa-instagram',
  },
  {
    href: 'https://www.facebook.com/DesignToroRomania/',
    label: 'Facebook',
    icon: 'fa-brands fa-facebook',
  },
];

export default function Footer() {
  const location = useLocation();

  const openCookieSettings = (event) => {
    event.preventDefault();
    if (window.klaro?.show) {
      window.klaro.show(undefined, true);
    }
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-column">
            <NavLink to="/" className="footer-logo">
              <img
                src="/img/designtoro-logo-white.webp"
                alt="DesignToro"
                className="brand-logo"
              />
            </NavLink>
            <p>
              Construim site-uri clare și campanii ușor de înțeles. Explicăm fiecare pas și te ajutăm să atragi clienți noi fără jargon tehnic.
            </p>
          </div>
          <div className="footer-column">
            <h3>Explorează</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact rapid</h3>
            <ul className="footer-contact">
              <li>
                <i className="fa-solid fa-location-dot text-primary" aria-hidden="true"></i>București, România
              </li>
              <li>
                <i className="fa-solid fa-envelope-open-text text-primary" aria-hidden="true"></i>
                <a href="mailto:office@designtoro.ro">office@designtoro.ro</a>
              </li>
              <li>
                <i className="fa-solid fa-phone text-primary" aria-hidden="true"></i>
                <a href="tel:+40757568812">+40 757 568 812</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Urmărește noutățile</h3>
            <ul className="social-links">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <i className={social.icon} aria-hidden="true"></i> {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} DesignToro.ro |{' '}
            <NavLink to="/politica-de-confidentialitate">Politica de Confidențialitate</NavLink> |{' '}
            <NavLink to="/politica-cookie-uri">Politica privind Cookies</NavLink> |{' '}
            <NavLink to="/termeni-si-conditii">Termeni și Condiții</NavLink> |{' '}
            <button type="button" className="cookie-settings-link" onClick={openCookieSettings}>
              Setări cookie
            </button>
          </p>
        </div>
      </footer>

      <nav className="mobile-footer-nav" aria-label="Navigație rapidă">
        {navLinks
          .filter((link) => !location.pathname.startsWith(link.to) || (link.to === '/' && location.pathname !== '/'))
          .map((link) => (
            <NavLink key={link.to} to={link.to} className="mobile-footer-nav__link">
              <i className={link.icon} aria-hidden="true"></i>
              <span>{link.label}</span>
            </NavLink>
          ))}
      </nav>
    </>
  );
}
