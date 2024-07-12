import styles from "./ProjectsStyles.module.css";
import websiteProject from "../../assets/websiteProject.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={websiteProject} />
      </div>
    </section>
  );
}

export default Projects;
