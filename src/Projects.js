import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2 className="projects-title">Projects</h2>

        <div className="project-card">
          <h3>Hotel Management System</h3>
          <p><strong>Tech Used:</strong> Java (Swing), MySQL</p>
          <p>
            This project automates hotel operations including room booking,
            customer management, and billing. It reduces manual errors and improves
            efficiency.
          </p>
          <ul>
            <li>Built UI using Java Swing</li>
            <li>Designed MySQL database schema</li>
            <li>Implemented CRUD operations</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
