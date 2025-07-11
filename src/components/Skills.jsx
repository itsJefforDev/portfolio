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
          title: 'Web Development',
          description: 'Building responsive and interactive web applications'
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
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'React', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'Django', level: 75 }
      ]
    },
    'data-analytics': {
      title: 'Data Analytics',
      carouselItems: [
        {
          image: '/data1.jpg',
          title: 'Data Visualization',
          description: 'Creating insightful visual representations of data'
        },
        {
          image: '/data2.jpg',
          title: 'Machine Learning',
          description: 'Building predictive models and algorithms'
        },
        {
          image: '/data3.jpg',
          title: 'Data Cleaning',
          description: 'Preparing raw data for analysis'
        }
      ],
      summary: 'I transform raw data into meaningful insights that drive business decisions. My analytical approach combines statistical methods with business acumen to deliver actionable results.',
      tools: [
        { name: 'SQL', level: 85 },
        { name: 'Pandas', level: 88 },
        { name: 'Tableau', level: 80 },
        { name: 'Power BI', level: 75 },
        { name: 'TensorFlow', level: 70 }
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
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Testing', level: 88 },
        { name: 'Security', level: 82 }
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
    
      
      <div className="glassmorphic p-5 rounded">
        
        <Slider {...settings}>
          {currentSkill.carouselItems.map((item, index) => (
            <div key={index} className="px-4">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="img-fluid rounded shadow"
                    style={{width:'500px', height:'300px'}}
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
        <div className="btn-group">
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
        </div>
      </div>
      
      <div className="glassmorphic p-4 rounded mb-5">
        <h3 className="mb-3">{currentSkill.title}</h3>
        <p className="lead" style={{ whiteSpace: "pre-line" }}>{currentSkill.summary}</p>
      </div>
      
      <div className="glassmorphic p-4 rounded">
        <h3 className="mb-4">Tools & Technologies</h3>
        <Bar data={chartData} options={chartOptions} />
        
        <div className="mt-4">
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
        </div>
      </div>
    </div>
  );
};

export default Skills;