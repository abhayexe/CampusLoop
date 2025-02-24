import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/">
              <img src="/Logo2.png" alt="CampusLoop Logo" className="logo" />
              <span className="brand-name">CampusLoop</span>
            </Link>
          </div>
          <div className="nav-right">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Move the homepage content to a separate component
function HomePage() {
  return (
    <>
      <section className="hero">
        {/* <h1>Connect, Share, Grow</h1> */}
        <h1>CONNECT ⋄ SHARE ⋄ GROW</h1>
        <button className="get-started-btn">Get Started</button>
      </section>

      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>CampusLoop is your one-stop platform for connecting with fellow students, 
               sharing knowledge, and growing together in your educational journey.</p>
          </div>
          <img src="/about-image.jpg" alt="Students collaborating" className="about-image" />
        </div>
      </section>

      {/* Rest of the homepage content remains the same */}
      {/* (Features, Campus Life, and Footer sections) */}
      <section className="features">
        <h2>Why Choose CampusLoop?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Connect</h3>
            <p>Build meaningful connections with peers and mentors</p>
          </div>
          <div className="feature-card">
            <h3>Share</h3>
            <p>Exchange ideas and resources within your academic community</p>
          </div>
          <div className="feature-card">
            <h3>Grow</h3>
            <p>Develop your skills and knowledge through collaboration</p>
          </div>
        </div>
      </section>

      <section className="campus-life">
        <img src="/campus-image.jpg" alt="Campus life" className="campus-image" />
        <div className="campus-content">
          <h2>Experience Campus Life</h2>
          <p>Stay connected with everything happening on your campus</p>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: campuslooploop@gmail.com</p>
            <p>Phone: +91 696969696</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <span>Facebook</span>
              <span>Twitter</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CampusLoop. All rights reserved.</p>
        </div>
      </footer>
      
    </>
  );
}

export default App;