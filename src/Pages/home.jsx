import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import profilePic from '../assets/Ray1.jpg';
import '../Css/home.css';

const Home = () => {
  return (
    <div className='home-landing'>
      <div className='landing-container'>

        {/* Hero Section */}
        <section className='hero-container'>
  {/* Left Side: Title and Subtitle */}
  <div className='hero-content'>
    <h1 className='hero-title'>
      IT SUPPORT<br />
      PROFESSIONAL
    </h1>
    <p className='hero-subtitle'>
      An Enthusiast in Comprehension of Fundamental Cybersecurity Concepts | 
      Security Operations Center (SOC)
    </p>
  </div>

  {/* Right Side: Image */}
  <img src={profilePic} alt='Albert Ray' className='hero-image' />
</section>


        {/* About Me Section */}
        <section className='about-brief'>
          <h2>About Me</h2>
          <div className='about-content'>
            <div className='about-text'>
              <p>
                Albert Ray Mukiira is an IT Support Professional and cybersecurity practitioner with proven experience in Security Operations Center (SOC) environments. Skilled at endpoint and systems management, he has a strong track record in implementing and supporting SOC solutions to enhance threat detection and operational resilience.
              </p>
              <p>
                Albert is committed to leaving a lasting positive impact through technology—a reflection of his dedication to professional growth and quality outcomes.
              </p>
            </div>
            <div className='about-actions'>
              <Link to='/about' className='btn btn-gold'>Read More</Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className='skills-brief'>
          <h2>Core Skills</h2>
          <div className='skills-grid'>
            <div className='skills-category'>
              <h3>Programming</h3>
              <ul className='skills-list'>
                <li><FaCheckCircle /> Python</li>
                <li><FaCheckCircle /> JavaScript</li>
                <li><FaCheckCircle /> React</li>
                <li><FaCheckCircle /> Node.js</li>
              </ul>
            </div>
            <div className='skills-category'>
              <h3>Cybersecurity</h3>
              <ul className='skills-list'>
                <li><FaCheckCircle /> Cybersecurity Analysis</li>
                <li><FaCheckCircle /> SOC Monitoring</li>
                <li><FaCheckCircle /> Threat Detection</li>
                <li><FaCheckCircle /> Incident Response</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
<section className='home__projects'>
  <h2>Featured Projects</h2>
  <div className='home__project-list'>
    <div className='project-card'>
      <h4>Community Health Monitoring Dashboard</h4>
      <img src='src\assets\Dashboard.jpg' alt='dashboard' className='project-image' />
      <div className='project-content'>
        <p>A dashboad for health</p>
        <Link to='/projects' className='btn btn-gold'>Read More</Link>
      </div>
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className='home__cta'>
          <a href='src\assets\Albert_ Ray CV _CS-SA10-25083.pdf' download className='btn btn-gold'>Download CV</a>
          <Link to='/contact' className='btn btn-secondary'>Hire Me</Link>
        </section>

      </div>
    </div>
  );
};

export default Home;