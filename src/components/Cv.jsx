import { useEffect } from 'react';


const Cv = () => {
  useEffect(() => {
    // PDF viewer initialization would go here
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>My CV</h1>
          <a
            href="assets/Jefferson Orozco CV.pdf"
            download="CV_JeffersonOrozco.pdf"
            className="btn btn-dark"
          >
            Download CV
          </a>
        </div>

        <div className="glassmorphic p-4 rounded">
          <div className="ratio ratio-1x1">
            <iframe
              src="assets/Jefferson Orozco CV.pdf"
              title="CV Preview"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cv;