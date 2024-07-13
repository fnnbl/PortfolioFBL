import styles from "./ProjectsStyles.module.css";
import websiteProject from "../../assets/websiteProject.png";
import taskmgmt from "../../assets/TaskManagement.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
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
      </div>
    </section>
  );
}

export default Projects;
