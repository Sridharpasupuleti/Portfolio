import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="education-title">Education</h2>

      <div className="edu-container">

        <div className="edu-card">
          <h3>B.Tech (CSE)</h3>
          <p>Guru Nanak Institute of Technology</p>
          <p>CGPA: <strong>7.1</strong></p>
          <p>2021 - 2025</p>
        </div>

        <div className="edu-card">
          <h3>Intermediate</h3>
          <p>Sri Gayatri Junior College</p>
          <p>CGPA: <strong>9.1</strong></p>
          <p>2018 - 2020</p>
        </div>

        <div className="edu-card">
          <h3>SSC</h3>
          <p>Ideal Public School</p>
          <p>CGPA: <strong>8.7</strong></p>
          <p>2018</p>
        </div>

      </div>
    </section>
  );
}
