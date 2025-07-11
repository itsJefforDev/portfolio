const Contact = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Contact Me</h1>
      
      <div className="row">
        <div className="col-md-6 glassmorphic p-4 rounded mb-4 mb-md-0">
          <h3 className="mb-4">Get in Touch</h3>
          <div className="contact-info">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope me-3 fs-4"></i>
              <span>john.doe@example.com</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-phone me-3 fs-4"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-linkedin me-3 fs-4"></i>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noreferrer">
                linkedin.com/in/johndoe
              </a>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-github me-3 fs-4"></i>
              <a href="https://github.com/johndoe" target="_blank" rel="noreferrer">
                github.com/johndoe
              </a>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 glassmorphic p-4 rounded">
          <h3 className="mb-4">Send a Message</h3>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;