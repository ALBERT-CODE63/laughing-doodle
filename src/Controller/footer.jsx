import React, { useState } from "react";
import '../Css/footer.css';
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      alert(data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send message');
    }
  };

  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='footer__links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <div className='footer__contact'>
          <p>Email: <strong>Albertray132@gmail.com</strong></p>
          <p>Phone: <strong>+254 769377670</strong></p>
        </div>

        <div className='footer__socials'>
          <a href='https://www.linkedin.com/in/albert-ray-mukiira/?originalSubdomain=ke' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
          <a href='https://github.com/ALBERT-CODE63' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
        </div>

        <div className='footer__form'>
          <h4>Get in Touch</h4>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>

      <div className='footer__bottom'>
        <p>&copy; 2025 Albert Ray. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
