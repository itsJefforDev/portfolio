import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useLocation } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Skills = () => {
  const location = useLocation();
  const [activeSkill, setActiveSkill] = useState('software-dev');

  // Actualizar el estado cuando cambia el hash en la URL
  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash && skillsData[hash]) {
      setActiveSkill(hash);
    }
  }, [location.hash]);

  const skillsData = {
    'software-dev': {
      title: 'Desarollo de software',
      carouselItems: [
        {
          image: 'assets/uniCosmet.png',
          title: 'Desarollo web',
          description: 'Creacion de paginas responsivas e interactivas'
        },
        {
          image: 'assets/MERN.jpg',
          title: 'MERN Stack',
          description: 'Uso de las mas recientes tecnologias'
        },
        {
          image: 'assets/api.png',
          title: 'API Rest-full',
          description: 'Desarollo de servicios backend con api rest'
        }
      ],
      summary: 'Conocimiento en desarrollo de aplicaciones web tanto de lado backend como fronend, uso de IDE como visual studio code, netbeans y visual studio en entornos de aplicaciones de escritorio.\n\n Tengo la capacidad para aprender e investigar las diferentes problemáticas que surgan en el ciclo de vida del software.\n\nActualmente me empeño en estudiar arduamente para aprender mas acerca del desarrollo de software, estudiando cada lenguaje y framework que sean posibles.',
      tools: [
        { img: 'assets/angular.png', name: 'Angular', level: 90 },
        { img: 'assets/spring boott.png', name: 'Spring boot', level: 85 },
        { img: 'assets/react.png', name: 'React', level: 88 },
        { img: 'assets/express.png', name: 'Express.js', level: 82 },
        { img: 'assets/nodejs.png', name: 'Node.js', level: 75 },
        { img: 'assets/laravel.png', name: 'Laravel', level: 82 },
        { img: 'assets/mysql.png', name: 'MySQL', level: 82 },
        { img: 'assets/mongodb.png', name: 'MongoDB', level: 82 },
        { img: 'assets/docker.png', name: 'Docker', level: 82 },
        { img: 'assets/bootstrap.png', name: 'Bootstrap', level: 82 },
        { img: 'assets/html.png', name: 'HTML', level: 82 },
        { img: 'assets/css.png', name: 'CSS', level: 82 },
        { img: 'assets/javascript.png', name: 'JavaScript', level: 82 },
        { img: 'assets/typescript.png', name: 'Typescript', level: 82 },
        { img: 'assets/java.png', name: 'Java', level: 82 },
        { img: 'assets/intellij.png', name: 'Intellij IDEA', level: 82 },
        { img: 'assets/netbeans.png', name: 'Netbeans', level: 82 },
        { img: 'assets/postman.png', name: 'Postman', level: 82 },

      ]
    },
    'data-analytics': {
      title: 'Analitica de datos',
      carouselItems: [
        {
          image: 'assets/analitica.jpg',
          title: 'Visualizacion de datos',
          description: 'Visualizacion comoda y detallada de los datos'
        },
        {
          image: 'assets/filter2.png',
          title: 'Segmentacion de datos',
          description: 'Filtros personalidos para informacion especifica'
        },
        {
          image: 'assets/customization2.png',
          title: 'Customizacion',
          description: 'Informes con diseños unicos'
        }
      ],
      summary: 'Fuertes capacidades analíticas ante diversos problemas usando apps de herramientas de inteligencia de negocio como Excel, power bi y looker Studio para realizar informes complejos y plasmarlos en dashboards dinámicos que facilitan la experiencia de usuario y a la resolución de problemas estadísticos.\n\n Capacidad para realizar formulas complejas y robustas tanto lógicas como matemáticas en Excel y power bi tales como buscarV, Extraer, Condicionales y aplicando la función de trabajo con macros para acelerar el proceso de automatización ETL.',
      tools: [
        { img: 'assets/powerbi.png', name: 'Power BI', level: 75 },
        { img: 'assets/lookerstudio.png', name: 'Looker Studio', level: 75 },
        { img: 'assets/excel.png', name: 'Excel', level: 75 },
      ]
    },
    'software-maintenance': {
      title: 'Software Maintenance',
      carouselItems: [
        {
          image: 'assets/uniCosmet.png',
          title: 'Debugging',
          description: 'Identifying and fixing software defects'
        },
        {
          image: 'assest/MERN.jpg',
          title: 'Performance',
          description: 'Optimizing application performance'
        },
        {
          image: '/maint3.jpg',
          title: 'Documentation',
          description: 'Creating comprehensive system documentation'
        }
      ],
      summary: 'Conocimiento en desarrollo de aplicaciones web tanto de lado backend como fronend, uso de IDE como visual studio code, netbeans y visual studio en entornos de aplicaciones de escritorio.\n\n Tengo la capacidad para aprender e investigar las diferentes problemáticas que surgan en el ciclo de vida del software.\n\nActualmente me empeño en estudiar arduamente para aprender mas acerca del desarrollo de software, estudiando cada lenguaje y framework que sean posibles.',
      tools: [
        { img: 'assets/angular.png', name: 'Git', level: 90 },
        { img: 'assets/angular.png', name: 'Docker', level: 85 },
        { img: 'assets/angular.png', name: 'CI/CD', level: 80 },
        { img: 'assets/angular.png', name: 'Testing', level: 88 },
        { img: 'assets/angular.png', name: 'Security', level: 82 }
      ]
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const currentSkill = skillsData[activeSkill];

  const chartData = {
    labels: currentSkill.tools.map(tool => tool.name),
    datasets: [
      {
        label: 'Proficiency (%)',
        data: currentSkill.tools.map(tool => tool.level),
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="container">


      <div className="glassmorphic rounded" style={{marginTop:'80px', marginBottom:'80px'}}>

        <Slider {...settings}>
          {currentSkill.carouselItems.map((item, index) => (
            <div key={index} className="px-4">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    src={`${process.env.PUBLIC_URL}/${item.image}`}
                    alt={item.title}
                    className="img-fluid rounded shadow"
                    style={{ width: '500px', height: '300px' }}
                  />
                </div>
                <div className="col-md-6 p-5">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>


      <div className="d-flex justify-content-center my-5">
        {/* <div className="btn-group">
          <button
            className={`btn ${activeSkill === 'software-dev' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => {
              setActiveSkill('software-dev');
              window.history.replaceState(null, '', '#software-dev');
            }}
          >
            Desarollo de software
          </button>
          <button
            className={`btn ${activeSkill === 'data-analytics' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => {
              setActiveSkill('data-analytics');
              window.history.replaceState(null, '', '#data-analytics');
            }}
          >
            Analitica de datos
          </button>
          <button
            className={`btn ${activeSkill === 'software-maintenance' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => {
              setActiveSkill('software-maintenance');
              window.history.replaceState(null, '', '#software-maintenance');
            }}
          >
            Mantenimiento de software
          </button>
        </div> */}
      </div>

      <div data-scroll="fade-in" className="glassmorphic p-4 rounded mb-5" >
        <h1 className="mb-5">{currentSkill.title}</h1>
        <p className="lead text-secondary" style={{ whiteSpace: "pre-line" }}>{currentSkill.summary}</p>
      </div>

      <div data-scroll="fade-in" className="glassmorphic p-4 rounded" style={{ marginTop: '180px', marginBottom: '180px' }}>
        <h1 className="mb-5">Herramientas y tecnologias</h1>
        <div className="row">
          {/* <Bar data={chartData} options={chartOptions} /> */}
          {currentSkill.tools.map((tool, index) => (
            <div data-scroll="fade-in" className="col-md-4">
              <div key={index} className="card m-4 p-5" style={{ width: '18rem' }}>
                <div className="d-flex justify-content-center">
                  <img src={`${process.env.PUBLIC_URL}/${tool.img}`} className="card-img-top" alt={tool.name} style={{ width: '100px', height: '100px' }} />
                </div>

                <div className="card-body">
                  <p className="card-text text-center">{tool.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* <div className="mt-4">
          {currentSkill.tools.map((tool, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span>{tool.name}</span>
                <span>{tool.level}%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  style={{ width: `${tool.level}%` }}
                  aria-valuenow={tool.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Skills;