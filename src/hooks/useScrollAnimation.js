import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollAnimation = () => {
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