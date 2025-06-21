import React from 'react';
import profilePic from '../assets/Ray2.jpg';
import '../Css/about.css';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className='about'>
      <header className='about__header'>
        <h1>Who is Ray?</h1>
      </header>

      <section className='about__intro'>
        <img src={profilePic} alt='Albert Ray' className='about__image' />
        <div className='about__bio'>
          <p>
            <strong>Albert Ray Mukiira</strong> is a dedicated and resourceful IT professional based in Nairobi, Kenya, with a strong foundation in Information Communication Technology. Holding a Diploma in ICT and additional certifications in cloud computing and cybersecurity, Ray combines academic training with practical experience to deliver dependable technical support and systems management. His time at institutions like Pan Africa Christian University and United States International University has honed his abilities in system configuration, user support, and the deployment of both Windows and Linux environments.
          </p>
          <p>
            Ray is especially skilled in software troubleshooting, remote monitoring, and IT infrastructure maintenance. His hands-on work includes managing user policies through the Windows registry, setting up and securing networks, and rolling out new digital tools to improve organizational efficiency. Whether repairing hardware, configuring routers and switches, or preparing laboratories for instruction, Ray brings attention to detail, adaptability, and a proactive approach to solving problems.
          </p>
          <p>
            Beyond his technical expertise, Ray is known for his soft skills—strong communication, teamwork, and a collaborative spirit. He has consistently demonstrated an ability to make thoughtful decisions under pressure and to support cross-functional teams in delivering technology-driven outcomes. Passionate about leveraging tech to improve operational workflows and user experiences, Ray is committed to continuous growth and contributing meaningfully to the evolving IT landscape in Kenya and beyond.
          </p>
        </div>
      </section>

      <section className='about__skills'>
        <div className='skills__soft'>
          <h2>Soft Skills</h2>
          <ul>
            <li><FaCheckCircle /> Problem Solving</li>
            <li><FaCheckCircle /> Communication & Collaboration</li>
            <li><FaCheckCircle /> Adaptability</li>
            <li><FaCheckCircle /> Attention to Detail</li>
            <li><FaCheckCircle /> Analytical Thinking</li>
          </ul>
        </div>
      </section>

      <section className='about__hobbies'>
        <h2>Hobbies & Interests</h2>
        <ul>
          <li><FaCheckCircle /> Exploring new tech and open source tools</li>
          <li><FaCheckCircle /> Mentoring junior developers</li>
          <li><FaCheckCircle /> Participating in hackathons</li>
          <li><FaCheckCircle /> Reading cybersecurity blogs</li>
          <li><FaCheckCircle /> Watching documentaries</li>
        </ul>
      </section>

      <section className='about__quote'>
        <blockquote>
          "I believe technology should empower people, and every system should be as secure as it is useful."
        </blockquote>
      </section>
    </div>
  );
};

export default About;
