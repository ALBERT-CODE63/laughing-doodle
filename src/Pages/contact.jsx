import React, { useState } from 'react';
import '../Css/contact.css';
import Sidebar from '../Controller/sidebar.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData; // ✅ Extract values from formData

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();
      alert(data.message);

      // Optionally reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send message');
    }
  };

  return (
    <div className='contact-page'>
      <Sidebar />
      <div className='contact'>
        <h1>Contact Me</h1>
        <p>If you're interested in working with me or just want to say hello, feel free to reach out below.</p>

        <form className='contact__form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            rows='5'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
