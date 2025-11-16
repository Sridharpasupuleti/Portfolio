import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css"; // <-- add CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <h1 className="logo">Sridhar</h1>

        <ul className="nav-links">
          <li><Link to="home" smooth duration={500}>Home</Link></li>
          <li><Link to="about" smooth duration={500}>About</Link></li>
          <li><Link to="skills" smooth duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth duration={500}>Projects</Link></li>
          <li><Link to="education" smooth duration={500}>Education</Link></li>
          <li><Link to="contact" smooth duration={500}>Contact</Link></li>
        </ul>

        <a className="resume-btn" href="/Sridhar-Resume.pdf" download>
          Download CV
        </a>
      </div>
    </nav>
  );
}
