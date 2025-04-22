import React from "react";
import "./project.css";

const Project = (props) => {
  const { title, image, gitHub, deploy, comingSoon } = props.data;
  return (
    <div className="project">
      <div className="photoContainer">
        {comingSoon && (
          <div className="comingSoon">
            <p>Coming Soon</p>
          </div>
        )}
        <img
          style={{ filter: comingSoon && "blur(3px)" }}
          className="project-photo"
          src={image}
          alt="forecast photo"
        />
      </div>
      <h1>{title}</h1>
      <div className="buttons">
        <button disabled={comingSoon}
          className="button"
          onClick={() => window.open(deploy, "_blank")}
        >
          View Demo
        </button>
        <button disabled={comingSoon}
          className="button"
          onClick={() => window.open(gitHub, "_blank")}
        >
          View GitHub
        </button>
      </div>
    </div>
  );
};

export default Project;
