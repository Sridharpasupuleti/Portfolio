import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2 className="skills-title">Skills</h2>

        <div className="skills-grid">

          {/* Programming Languages */}
          <div className="skill-card">
            <h3>Programming Languages</h3>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>SQL</li>
              <li>HTML</li>
            </ul>
          </div>

          {/* Frameworks & Libraries */}
          <div className="skill-card">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>Django</li>
              <li>Spring Boot (Basics)</li>
            </ul>
          </div>

          {/* Databases */}
          <div className="skill-card">
            <h3>Database</h3>
            <ul>
              <li>MySQL (CRUD, joins, schema design)</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
