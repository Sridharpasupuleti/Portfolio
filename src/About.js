import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left side - Image */}
        <div className="about-image">
          <img 
            src="https://via.placeholder.com/350x350" 
            alt="Sridhar"
          />
        </div>

        {/* Right side - Content */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I am <strong>Sridhar Pasupuleti</strong>, a Computer Science student from 
            Guru Nanak Institute of Technology. I am passionate about building real-world 
            applications and learning technologies like Java, React, SQL, and MySQL.
          </p>

          <p className="about-text">
            I love solving problems, learning new skills, and challenging myself to grow 
            as a developer every day.
          </p>

          <div className="about-details">
            <p><span>Name:</span> Sridhar Pasupuleti</p>
            <p><span>Location:</span> Hyderabad, Telangana</p>
            <p><span>Education:</span> B.Tech (CSE)</p>
            <p><span>Email:</span> sridharpasupuleti2002@gmail.com</p>
          </div>
        </div>

      </div>
    </section>
  );
}
