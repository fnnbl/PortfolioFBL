import React from "react";

function ProjectCard({ src }) {
  return (
    <a href="https://github.com/fnnbl/cv_fbl" target="_blank">
      <img className="hover" src={src} alt="website Project Logo" />
      <h3>Personal Website</h3>
      <p>Responsive Website Using ReactJs</p>
    </a>
  );
}

export default ProjectCard;
