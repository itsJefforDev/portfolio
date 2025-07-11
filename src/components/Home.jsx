import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import 'animate.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
  const competences = [
    {
      img: 'assets/code.png',
      title: 'Desarollo de software',
      description: 'Aplicaciones completas y escalables',
      path: "/skills#software-dev",
    },
    {
      img: 'assets/maintenance.png',
      title: 'Manten. software',
      description: 'Optimizacion de equipos y reparacion',
      path: "/skills#software-maintenance"

    },
    {
      img: 'assets/analytics.png',
      title: 'Analitica de datos',
      description: 'Reporteria de datos estadisticos dinamicos',
      path: "/skills#data-analytics"
    },
  ]

  const offers = [
    {
      img: 'assets/app-development.png',
      title: 'Desarollo FullStack',
      description: 'Conocimiento en desarrollo de aplicaciones web tanto de lado backend como fronend, uso de IDE como visual studio code, netbeans y visual studio en entornos de aplicaciones de escritorio',
      path: "/skills#software-dev",
    },
    {
      img: 'assets/analytics (1).png',
      title: 'Analitica',
      description: 'Fuertes capacidades analíticas ante diversos problemas usando apps de herramientas de inteligencia de negocio como Excel, power bi y looker Studio para realizar informes complejos.',
      path: "/skills#data-analytics"
    },
    {
      img: 'assets/maintenance-support.png',
      title: 'Soporte TIC',
      description: 'Gran habilidad para resolución de problemas informáticos relacionado a computadoras con capacidad de realizar procedimientos técnicos con la finalidad de que los equipos funcionen correctamente.',
      path: "/skills#software-maintenance"

    },
  ]

  const [competencesList, setCompetencesList] = useState([])

  const softSkillsData = {
    labels: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Creativity'],
    datasets: [
      {
        label: 'Skill Level (%)',
        data: [85, 90, 88, 92, 80],
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  useEffect(() => {
    // Activar animaciones después de un pequeño retraso
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => el.classList.add('visible'));
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <div className="container-fluid" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/jeff2.png)`,
        marginTop: '-75px',
        paddingTop: '290px',
        paddingBottom: '290px',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'cover',
      }}>
        <div className="row align-items-center d-flex justify-content-end ">
          {/* <div className="col-md-6 fade-in">
            <img
              src="assets/jeff2.png"
              alt="Profile"
              className="img-fluid mb-4"
              style={{ maxWidth: '800px' }}
            />
          </div> */}
          <div className="col-md-6 fade-in px-5 py-3" style={{
            textAlign: 'right',
            color: 'white',
            backgroundColor: 'black'
          }}>
            <h1 className="display-5 mb-3">Jefferson Orozco</h1>
            <p className="lead mb-4">
              Full Stack Developer | Data Analyst
            </p>
          </div>
        </div>

      </div>


      {/* main */}
      <div data-scroll="fade-in" className="container delay-200" style={{ marginTop: '180px' }}>
        <div className="row mt-5 fade-in">
          <div className="col-md-4 ps-5">
            <img src={`${process.env.PUBLIC_URL}/assets/jeff3.jpg`} className="img-fluid" alt="Responsive image"></img>
          </div>
          <div className="col-md-8 p-sm-5 ">
            <h2 className="mb-4">About Me</h2>
            <p className="lead">
              Hello there! I am Jefferson Orozco; I have experience in data analytics
              and BI reporting currently I study Software engineering at the university
              and English at an Academy. I am proactive and creative person with
              many abilities respect to software and information systems.

              I'm really interested in software development
            </p>
          </div>



        </div>

        {/* <div data-scroll="fade-in" className="row delay-200" style={{ marginTop: '180px', marginBottom: '180px' }}>
          <div className="col-12">
            <h2 className="mb-4">Soft Skills</h2>
            <div className="d-flex justify-content-center glassmorphic p-4 rounded">
              <Bar data={softSkillsData} options={options} />
            </div>
          </div>
        </div> */}
      </div>

      <div className="container-fluid text-light py-5" style={{ backgroundColor: 'black', marginTop: '180px' }}>
        <h1 data-scroll="fade-in" style={{ textAlign: 'center' }}>Mis compentencias</h1>
        <div className="row">
          {competences.map((competences) => (
            <div data-scroll="fade-in" className="col-md-4 p-sm-5">
              <div className="card text-light p-4 h-100 card-hover-effect" style={{ width: '18rem;', backgroundColor: '#070707' }}>
                <div className="card-body">
                  <img src={`${process.env.PUBLIC_URL}/${competences.img}`} className="card-img-top pb-3" alt="..." style={{ width: '70px' }}></img>

                  <h5 className="card-title">{competences.title}</h5>
                  <p className="card-text">{competences.description}</p>
                  <Link
                    to={competences.path}
                    className="btn btn-primary align-self-start mt-auto"
                    onClick={() => {
                      // Scroll al top después de un pequeño delay para asegurar la navegación
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>

      <div className="container text-center" style={{ marginTop: '180px' }}>
        <div className="row">
          <h1 data-scroll="fade-in">What do I offer?</h1>
          {
            offers.map((offers) => (
              <div className="container" data-scroll="fade-in" style={{ marginTop: '180px' }}>
                <div className="row">
                  <div className="col-md-6">
                    <img src={`${process.env.PUBLIC_URL}/${offers.img}`} style={{ width: '300px' }} alt="" />
                  </div>
                  <div className="col-md-6 text-start">
                    <h2>{offers.title}</h2>
                    <p className='text-secondary' style={{ whiteSpace: "pre-line", marginTop: '20px' }}>{offers.description}</p>
                    <Link
                      to={offers.path}
                      className="btn btn-primary align-self-start mt-auto"
                      onClick={() => {
                        // Scroll al top después de un pequeño delay para asegurar la navegación
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }, 100);
                      }}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </>

  );
};

export default Home;