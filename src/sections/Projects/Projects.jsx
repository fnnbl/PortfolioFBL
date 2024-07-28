import styles from "./ProjectsStyles.module.css";
import websiteProject from "../../assets/websiteProject.png";
import taskmgmt from "../../assets/TaskManagement.png";
import BudgetManagement from "../../assets/BudgetManagement.png";
import BetterApplication from "../../assets/BetterApplication.png";
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
        <ProjectCard
          src={BudgetManagement}
          link="https://github.com/fnnbl/budgetManagement"
          h3="Budget Management App"
          p="This Budget Management App lets users track their monthly income and expenses."
        />
        <ProjectCard
          src={BetterApplication}
          link="https://github.com/fnnbl/BetterApplication"
          h3="Application Helper"
          p="
            This will be my most significant project to date. The Application
            Helper has been designed to assist young people, particularly
            students, in managing their numerous applications, meeting
            deadlines, and maintaining communication with relevant companies. It
            will initially offer application tracking functionality. In the
            future, this application will also be able to provide guidance on
            applications and offer templates for contacting companies."
        />
      </div>
    </section>
  );
}

export default Projects;
