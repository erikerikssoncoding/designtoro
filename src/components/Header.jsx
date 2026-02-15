import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Acasă' },
  { to: '/servicii', label: 'Servicii' },
  { to: '/preturi', label: 'Prețuri' },
  { to: '/portofoliu', label: 'Portofoliu' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header" id="top">
      <nav className="navbar navbar-dark" data-bs-theme="dark" aria-label="Navigare principală">
        <div className="container">
          <div className="navbar-layout">
            <NavLink to="/" className="navbar-brand" aria-label="DesignToro">
              <img
                src="/img/designtoro-logo-white.webp"
                alt="DesignToro"
                className="brand-logo"
              />
            </NavLink>
            <ul className="navbar-links" id="primary-menu">
              {navLinks.map((link) => (
                <li key={link.to} className="nav-item">
                  <NavLink end={link.to === '/'} to={link.to} className="nav-link">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink to="/contact" className="btn btn-accent navbar-cta">
              Cere ofertă
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
