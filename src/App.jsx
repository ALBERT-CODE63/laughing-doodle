import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Controller/navbar.jsx';
import Footer from './Controller/footer.jsx';
import Home from './Pages/home.jsx';
import About from './Pages/about.jsx';
import Projects from './Pages/project.jsx';
import Blogs from './Pages/Blogs.jsx';
import LabChallenges from './Pages/Challengess.jsx';
import Contact from './Pages/contact.jsx'; 
import './Css/App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<><About /></>} />
            <Route path='/projects' element={<><Projects /></>} />
            <Route path='/blogs' element={<><Blogs /></>} />
            <Route path='/challenges' element={<><LabChallenges /></>} />
            <Route path='/contact' element={<><Contact /></>} /> 

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
