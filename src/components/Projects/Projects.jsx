import React from "react";
import './projects.css'
import { Titles } from "../../utils/Title/Titles";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projectsContainer">
        <div>
          <h2>Project Name</h2>
          <p>
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button>View Project</button>
        </div>
        <img src="/src/assets/pexels-elly-fairytale-3823207 1.png" alt="" />
      </div>
    </div>
  );
};
