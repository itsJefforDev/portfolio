import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import TimelineItem from './TimelineItem';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Experience = () => {
  const experienceData = {
    labels: ['Tech Corp (2019-2021)', 'Data Solutions (2021-2022)', 'Dev Masters (2022-Present)'],
    datasets: [
      {
        label: 'Months Worked',
        data: [24, 12, 18],
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const experienceItems = [
    {
      title: 'Senior Software Developer',
      company: 'Dev Masters',
      description: 'Leading a team of developers to create enterprise solutions.',
      date: '2022 - Present'
    },
    {
      title: 'Data Analyst',
      company: 'Data Solutions',
      description: 'Developed data pipelines and visualization tools for business intelligence.',
      date: '2021 - 2022'
    },
    {
      title: 'Junior Developer',
      company: 'Tech Corp',
      description: 'Worked on front-end development and API integrations.',
      date: '2019 - 2021'
    }
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-5 text-center">Work Experience</h1>
      
      <div className="glassmorphic p-4 rounded mb-5">
        <h3 className="mb-4">Time at Companies</h3>
        <Bar data={experienceData} options={options} />
      </div>
      
      <div className="timeline-container">
        {experienceItems.map((item, index) => (
          <TimelineItem 
            key={index}
            title={item.title}
            description={item.description}
            date={item.date}
            institution={item.company}
            isLast={index === experienceItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;