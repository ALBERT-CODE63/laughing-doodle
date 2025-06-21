import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/navbar.css';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        <Link to='/' className='navbar__logo'>
          ALBERT RAY MUKIIRA
        </Link>
      </div>

      <ul className='navbar__menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/challenges'>Challenges</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
      </ul>

      <div className='navbar__right'>
        <input
          type='text'
          placeholder='Search...'
          className='navbar__search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <Link to='/contact' className='navbar__cta'>
          Hire Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
