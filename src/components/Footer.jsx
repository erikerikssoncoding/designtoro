import { NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Acasă', icon: 'fa-solid fa-house', key: 'home' },
  { to: '/servicii', label: 'Servicii', icon: 'fa-solid fa-layer-group', key: 'servicii' },
  { to: '/preturi', label: 'Prețuri', icon: 'fa-solid fa-tags', key: 'preturi' },
  { to: '/portofoliu', label: 'Portofoliu', icon: 'fa-solid fa-briefcase', key: 'portofoliu' },
  { to: '/contact', label: 'Contact', icon: 'fa-solid fa-envelope', key: 'contact' },
];

export default function Footer() {
  const location = useLocation();

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-column">
            <NavLink to="/" className="footer-logo">
              designtoro
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
              <li>
                <a href="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook" aria-hidden="true"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" aria-label="YouTube">
                  <i className="fa-brands fa-youtube" aria-hidden="true"></i> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} DesignToro.ro | <a href="#">Politica de Confidențialitate</a> |{' '}
            <a href="#">Termeni și Condiții</a>
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
