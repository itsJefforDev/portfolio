const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 mb-4">About Me</h1>
          <p className="lead mb-4">
            I'm a passionate developer with a strong background in both software development 
            and data analysis. My journey in tech started when I was 15, and I've been 
            constantly learning and growing ever since.
          </p>
          <p>
            When I'm not coding, you can find me hiking in the mountains, reading science 
            fiction, or experimenting with new cooking recipes. I believe in continuous 
            learning and sharing knowledge with others.
          </p>
          <p>
            My approach to problem-solving combines analytical thinking with creativity, 
            allowing me to tackle complex challenges from multiple perspectives.
          </p>
        </div>
        <div className="col-md-6">
          <img 
            src="/about-me.jpg" 
            alt="About Me" 
            className="img-fluid rounded shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default About;