import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <h2 className="hello">Hello, I'm</h2>

        <h1 className="name">Sridhar Pasupuleti</h1>

        <p className="tagline">
          A passionate Computer Science student & aspiring Full Stack Developer.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Contact Me</a>
          <a href="/Sridhar-Resume.pdf" download className="btn-secondary">
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
}
