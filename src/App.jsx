import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/">
              <img src="/Logo2.png" alt="CampusLoop Logo" className="logo" />
              <span className="brand-name">Rentra</span>
            </Link>
          </div>
          <div className="nav-right">
            <Link to="/login" className="login-btn">
              Login
            </Link>
            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
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
        <h1>Rent ⋄ Return ⋄ Reduce</h1>
        <p>
          Experience a smarter way to rent everything you need appliances,
          furniture, vehicles, and gadgets — all from local providers. Our
          subscription model offers exclusive benefits like discounts, free
          delivery, and priority listings. Join us in building a circular
          economy where sharing meets convenience.
        </p>
        <button className="get-started-btn">Get Started</button>
      </section>

      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              At Rentra, we believe in a smarter, more sustainable way to access
              the things you need. Instead of spending thousands on appliances,
              furniture, vehicles, or gadgets, why not rent them for as long as
              you need? Our platform connects renters with local providers,
              making it easy, affordable, and hassle-free to borrow high-quality
              products without the commitment of ownership.
            </p>
          </div>
          <img
            src="/about-image.jpg"
            alt="Students collaborating"
            className="about-image"
          />
        </div>
      </section>

      {/* Rest of the homepage content remains the same */}
      {/* (Features, Campus Life, and Footer sections) */}
      <section className="features">
        <h2>Why Choose CampusLoop?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Flexible & Affordable</h3>
            <p>
              Get access to high-quality products at a fraction of the cost. Why
              buy when you can rent?
            </p>
          </div>
          <div className="feature-card">
            <h3>Extra Savings & Rent Points</h3>
            <p>Exchange ideas and resources within your academic community</p>
          </div>
          <div className="feature-card">
            <h3>Exclusive Rental Bundles</h3>
            <p>
              Rent complete sets like bedroom furniture, kitchen appliances, or
              work-from-home essentials in one go.
            </p>
          </div>
          <div className="feature-card">
            <h3>Smart Rental Insights</h3>
            <p>
              Our data-driven rental system categorizes users (Heavy, Moderate,
              Light) to offer personalized recommendations and deals.
            </p>
          </div>
          <div className="feature-card">
            <h3>Exclusive Rental Bundles</h3>
            <p>
              Rent complete sets like bedroom furniture, kitchen appliances, or
              work-from-home essentials in one go.
            </p>
          </div>
          <div className="feature-card">
            <h3>Hassle-Free Cancellations</h3>
            <p>
              Premium users enjoy free cancellations up to 24 hours before their
              rental starts.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="campus-life">
        <img
          src="/campus-image.jpg"
          alt="Campus life"
          className="campus-image"
        />
        <div className="campus-content">
          <h2>Experience Campus Life</h2>
          <p>Stay connected with everything happening on your campus</p>
        </div>
      </section> */}

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: rentraprofile@gmail.com</p>
            <p>Phone: +91 9002440979</p>
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