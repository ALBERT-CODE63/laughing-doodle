import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../Css/sidebar.css';
import profilePic from '../assets/Ray 3.jpg'; 

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__profile'>
        <img src={profilePic} alt='Ray Profile' className='sidebar__image' />
        <h2 className='sidebar__name'>Albert Ray Mukiira</h2>
        <p className='sidebar__desc'>
          IT Support Professional with hands-on experience in SOC environments,
          focused on threat detection, cybersecurity reliability, and continuous learning.
        </p>
      </div>

      <div className='sidebar__socials'>
      <a href='https://www.linkedin.com/in/albert-ray-mukiira/?originalSubdomain=ke' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
      <a href=' https://github.com/ALBERT-CODE63 ' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      </div>
    </aside>
  );
};

export default Sidebar;
