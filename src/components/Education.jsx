import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TimelineItem from './TimelineItem';

const Education = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const educationItems = [
    {
      id: 'bachelor',
      title: 'Bachelor in Computer Science',
      institution: 'University of Technology',
      description: 'Specialized in Software Engineering and Data Structures.',
      date: '2015 - 2019',
      image: '/education1.jpg'
    },
    {
      id: 'master',
      title: 'Master in Data Science',
      institution: 'Data Science Institute',
      description: 'Focused on Machine Learning and Big Data Analytics.',
      date: '2019 - 2021',
      image: '/education2.jpg'
    },
    {
      id: 'certification1',
      title: 'AWS Certified Developer',
      institution: 'Amazon Web Services',
      description: 'Professional certification in cloud development.',
      date: '2020',
      image: '/education3.jpg'
    },
    {
      id: 'certification2',
      title: 'Google Data Analytics',
      institution: 'Google',
      description: 'Professional certification in data analysis.',
      date: '2021',
      image: '/education4.jpg'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => setActiveSlide(current),
    autoplay: true,
    autoplaySpeed: 3000
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const index = educationItems.findIndex(item => item.id === hash);
      if (index !== -1) {
        setActiveSlide(index);
      }
    }
  }, []);

  return (
    <div className="container my-5">
      <h1 className="mb-5 text-center">Education</h1>
      
      <div className="glassmorphic p-4 rounded mb-5">
        <Slider {...settings}>
          {educationItems.map((item, index) => (
            <div key={index} className="px-2">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-md-6">
                  <h3>{item.title}</h3>
                  <h5 className="text-muted">{item.institution}</h5>
                  <p>{item.description}</p>
                  <p className="text-muted">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="timeline-container">
        {educationItems.map((item, index) => (
          <TimelineItem 
            key={index}
            title={item.title}
            description={item.description}
            date={item.date}
            institution={item.institution}
            isLast={index === educationItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;