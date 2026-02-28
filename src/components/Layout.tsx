import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Layout.css';

export default function Layout() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== '/') {
      // Navigate home first, then scroll
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomePage = location.pathname === '/';

  return (
    <div className="app-wrapper">
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          {isHomePage ? (
            <button onClick={scrollToTop} className="logo-link">
              <span className="logo-text">Heidi's Place</span>
              <span className="logo-tagline">Custom Picture Framing</span>
            </button>
          ) : (
            <Link to="/" className="logo-link">
              <span className="logo-text">Heidi's Place</span>
              <span className="logo-tagline">Custom Picture Framing</span>
            </Link>
          )}

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <a href="#distinctive-framing" onClick={(e) => scrollToSection(e, 'distinctive-framing')}>Framing</a>
            <a href="#needlework-specialist" onClick={(e) => scrollToSection(e, 'needlework-specialist')}>Needlework</a>
            <a href="#a-unique-touch" onClick={(e) => scrollToSection(e, 'a-unique-touch')}>Unique Touch</a>
            <a href="#quality" onClick={(e) => scrollToSection(e, 'quality')}>Quality</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Contact</a>
          </nav>

          <div className="header-actions">
            {isHomePage ? (
              <a href="tel:4254892569" className="header-cta">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call Now
              </a>
            ) : (
              <Link to="/" className="header-cta">
                Back to Home
              </Link>
            )}

            <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
