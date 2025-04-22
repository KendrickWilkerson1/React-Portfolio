import React from "react";
import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Contact</h1>
      <h2> Front-End Proficiencies</h2>
      <p>
        Download my resume{" "}
        <a href="/Coding_Resume.pdf" download>
          here
        </a>
      </p>
      <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-End Proficiencies </h2>
      <ul>
        <li>Node</li>
        <li>Express</li>
        <li>SQL</li>
      </ul>
    </div>
  );
};

export default Resume;
