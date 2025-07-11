const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 glassmorphic-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About Me</a></li>
              <li><a href="/experience" className="text-white">Experience</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-envelope me-2"></i> john.doe@example.com</li>
              <li><i className="bi bi-phone me-2"></i> +1 (555) 123-4567</li>
              <li><i className="bi bi-geo-alt me-2"></i> San Francisco, CA</li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5>Connect With Me</h5>
            <div className="social-links">
              <a href="https://linkedin.com" className="text-white me-3">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a href="https://github.com" className="text-white me-3">
                <i className="bi bi-github fs-4"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="https://instagram.com" className="text-white">
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;