import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles.css';
import './Layout.css';

export default function Layout() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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

          {isHomePage ? (
            <button onClick={scrollToContact} className="header-cta">
              Get Started
            </button>
          ) : (
            <Link to="/" className="header-cta">
              Back to Home
            </Link>
          )}
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
