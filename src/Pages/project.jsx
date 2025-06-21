import React, { useState } from 'react';
import '../Css/project.css';
import Dashboard from '../assets/Dashboard.jpg';
import Community from '../assets/Communit.jpg';
import CHMS from '../assets/CHMS.jpg';
import Location from '../assets/Location.jpg';

const projectData = [
  {
    title: 'Community Health Management System Dashboard',
    description: 'The Community Health Management System Dashboard provides a centralized overview of patient care and facility performance. It displays key metrics such as the total number of patients, active health records, and registered facilities, along with monthly trends to monitor growth and service utilization. The dashboard also features health insights, including diagnosis distribution analytics, which help identify prevalent health conditions across communities. This real-time, data-driven tool enables healthcare administrators to make informed decisions, allocate resources effectively, and improve public health outcomes.',
    image: Dashboard
  },
  {
    title: 'How CHMS Works!',
    description: 'The Community Health Monitoring System (CHMS) is an all-in-one platform for community health workers to manage patient data, monitor health trends, and leverage machine learning for predictive diagnostics. It includes patient and facility management, secure user authentication, and detailed health record tracking. Advanced features such as an analytics dashboard, geospatial and temporal analysis, and disease prediction enhance decision-making and community health planning.',
    image: Community
  },
  {
    title: 'Disease Prdiction Module',
    description: 'This module uses patient records—including symptoms, medical history, and demographics—to predict possible diseases using machine learning algorithms. It enhances community healthcare by enabling early diagnosis and informed clinical decisions, reducing dependency on specialist availability in underserved areas.',
    image: CHMS
  },
  {
    title: 'Geospatial Disease Distribution Module',
    description: 'This module visualizes the spread and frequency of disease cases across different geographic locations. By mapping patient data, it highlights regional health trends, identifies outbreak hotspots, and supports targeted community health interventions.',
    image: Location
  }
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className='projects'>
      <h1 className='projects__title'>My Awesome  Projects</h1>
      {projectData.map((project, index) => (
        <div
          className={`project ${index % 2 === 0 ? 'project--left' : 'project--right'} ${expandedIndex === index ? 'expanded' : ''}`}
          key={index}
          onClick={() => toggleExpand(index)}
        >
          <img src={project.image} alt={project.title} className='project__image' />
          <div className='project__description'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
