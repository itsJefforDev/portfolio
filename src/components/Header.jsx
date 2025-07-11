import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [educationOpen, setEducationOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled-nav' : 'solid-black-nav'}`}>
      <div className="container">
        <Link className="navbar-brand text-white" to="/">Jeff</Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            
            <li 
              className="nav-item dropdown" 
              onMouseEnter={() => setEducationOpen(true)}
              onMouseLeave={() => setEducationOpen(false)}
            >
              <span className="nav-link dropdown-toggle text-white" role="button">
                Educación
              </span>
              <div className={`dropdown-menu glassmorphic-dropdown ${educationOpen ? 'show' : ''}`}>
                <Link 
                  className="dropdown-item glassmorphic-dropdown-item" 
                  to="/education#bachelor"
                  onClick={() => setEducationOpen(false)}
                >
                  Licenciatura
                </Link>
                <Link 
                  className="dropdown-item glassmorphic-dropdown-item" 
                  to="/education#master"
                  onClick={() => setEducationOpen(false)}
                >
                  Maestría
                </Link>
                <Link 
                  className="dropdown-item glassmorphic-dropdown-item" 
                  to="/education#certifications"
                  onClick={() => setEducationOpen(false)}
                >
                  Certificaciones
                </Link>
              </div>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-white" to="/experience">Experiencia</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">Sobre Mí</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contacto</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cv">CV</Link>
            </li>
            
            <li 
              className="nav-item dropdown"
              onMouseEnter={() => setSkillsOpen(true)}
              onMouseLeave={() => setSkillsOpen(false)}
            >
              <span className="nav-link dropdown-toggle text-white" role="button">
                Habilidades
              </span>
              <div className={`dropdown-menu glassmorphic-dropdown ${skillsOpen ? 'show' : ''}`}>
                <Link 
                  className="dropdown-item glassmorphic-dropdown-item" 
                  to="/skills#software-dev"
                  onClick={() => setSkillsOpen(false)}
                >
                  Desarrollo de Software
                </Link>
                <Link 
                  className="dropdown-item glassmorphic-dropdown-item" 
                  to="/skills#data-analytics"
                  onClick={() => setSkillsOpen(false)}
                >
                  Análisis de Datos
                </Link>
                <Link 
                  className="dropdown-item glassmorphic-dropdown-item" 
                  to="/skills#software-maintenance"
                  onClick={() => setSkillsOpen(false)}
                >
                  Mantenimiento de Software
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;