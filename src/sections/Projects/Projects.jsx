import React, { useRef } from "react";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import styles from "./ProjectsStyles.module.css";
import websiteProject from "../../assets/websiteProject.png";
import taskmgmt from "../../assets/TaskManagement.png";
import BudgetManagement from "../../assets/BudgetManagement.png";
import BetterApplication from "../../assets/BetterApplication.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  const ref = useRef();
  useScrollAnimate(ref);

  return (
    <section
      id="projects"
      ref={ref}
      className={`${styles.container} scroll-animate`}
    >
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={websiteProject}
          link="https://github.com/fnnbl/cv_fbl"
          h3="Personal Website"
          p="Responsive Website Using ReactJs"
        />
        <ProjectCard
          src={taskmgmt}
          link="https://github.com/fnnbl/TaskManagement"
          h3="Task Management App"
          p="Simple console-based Task Management App written in C#."
        />
        <ProjectCard
          src={BudgetManagement}
          link="https://github.com/fnnbl/budgetManagement"
          h3="Budget Management App"
          p="This Budget Management App lets users track their monthly income and expenses."
        />
        <ProjectCard
          src={BetterApplication}
          link="https://github.com/fnnbl/BetterApplication"
          h3="Better Application"
          p="An improved UI/UX prototype built with React."
        />
      </div>
    </section>
  );
}

export default Projects;
