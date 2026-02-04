import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles.css';
import './Layout.css';

export default function Layout() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      if (location.pathname === '/') {
        const sections = ['home', 'distinctive-framing', 'needlework-specialist', 'a-unique-touch', 'quality', 'about'];
        const scrollPosition = window.scrollY + 150;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/' && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';
  const navLinks = [
    { to: '/', label: 'Home', hash: '#home' },
    { to: '/', label: 'Distinctive Framing', hash: '#distinctive-framing' },
    { to: '/', label: 'Needlework Specialist', hash: '#needlework-specialist' },
    { to: '/', label: 'A Unique Touch', hash: '#a-unique-touch' },
    { to: '/', label: 'Quality', hash: '#quality' },
  ];

  // For non-home pages, use regular routing
  if (!isHomePage) {
    return (
      <div className="app-wrapper">
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="header-content">
            <Link to="/" className="logo-link">
              <img 
                className="banner" 
                src="https://www.heidisplaceframes.com/images/logophoto.jpg" 
                alt="Heidi's Place" 
              />
            </Link>

            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav id="navbar" className={isMobileMenuOpen ? 'mobile-open' : ''}>
              <ul>
                <li>
                  <Link className="navbar" to="/">Home</Link>
                </li>
                <li>
                  <Link className="navbar" to="/distinctive-framing">Distinctive Framing</Link>
                </li>
                <li>
                  <Link className="navbar" to="/needlework-specialist">Needlework Specialist</Link>
                </li>
                <li>
                  <Link className="navbar" to="/a-unique-touch">A Unique Touch</Link>
                </li>
                <li>
                  <Link className="navbar" to="/quality">Quality</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    );
  }

  // For home page, use smooth scroll navigation
  return (
    <div className="app-wrapper">
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <Link to="/" className="logo-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              className="banner" 
              src="https://www.heidisplaceframes.com/images/logophoto.jpg" 
              alt="Heidi's Place" 
            />
          </Link>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav id="navbar" className={isMobileMenuOpen ? 'mobile-open' : ''}>
            <ul>
              {navLinks.map((link) => {
                const sectionId = link.hash.substring(1);
                const isActive = activeSection === sectionId || (sectionId === 'home' && activeSection === '');
                return (
                  <li key={link.hash}>
                    <a
                      className={`navbar ${isActive ? 'active' : ''}`}
                      href={link.hash}
                      onClick={(e) => handleNavClick(e, link.hash)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
