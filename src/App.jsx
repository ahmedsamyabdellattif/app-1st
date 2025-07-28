import React from "react";
import "./App.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGlobe } from "react-icons/fa";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Start Framework</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>



      {/* Header */}
      <header className="header">
        
        <img src="/profile.png" alt="profile" className="profile-img" />
        <h1>START FRAMEWORK</h1>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </header>

      


      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
        </div>
        <div className="footer-section">
          <h3>AROUND THE WEB</h3>
          <div className="icons">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaGlobe />
          </div>
        </div>
        <div className="footer-section">
          <h3>ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by Route
          </p>
        </div>
        <div className="copyright">
          <p>Copyright © Ahmed Samy 2025</p>
        </div>
      </footer>
    </>
  );
}

export default App;


