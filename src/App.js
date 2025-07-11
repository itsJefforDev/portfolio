import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Cv from "./components/Cv";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const useScrollAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    const animateElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      document.querySelectorAll('[data-scroll]').forEach((el) => {
        el.classList.remove('animated'); // Reset animation
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    // Pequeño delay para asegurar que el DOM está listo
    const timer = setTimeout(animateElements, 50);
    
    return () => clearTimeout(timer);
  }, [location.key]); // Se ejecuta cada vez que cambia la ruta
};

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}


function App() {
 useScrollAnimation(); // Activar el 
  return (
    <>
      <Header />
      <div className="app glassmorphic">
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/education" element={<Education />} />
          <Route path="/portfolio/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/cv" element={<Cv />} />
          <Route path="/portfolio/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default AppWrapper;
