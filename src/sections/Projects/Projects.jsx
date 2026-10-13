import { useRef } from "react";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

const projectData = [
  {
    mark: "FB",
    caption: "Fynn Blaurock",
    link: "https://github.com/fnnbl/PortfolioFBL",
    title: "Personal Website",
    desc: "Responsive portfolio built with React and Vite",
  },
  {
    mark: "FD",
    caption: "Finance Dashboard App",
    link: "https://github.com/fnnbl/FinanceDashboard",
    title: "Finance Dashboard App",
    desc: "Track income and expenses",
  },
];

export default function Projects() {
  const ref = useRef();
  useScrollAnimate(ref);

  return (
    <section
      id="projects"
      ref={ref}
      className={`${styles.projectsSection} scroll-animate`}
    >
      <h2 className="section-title">Projects</h2>
      <div className={styles.projectsGrid}>
        {projectData.map((proj) => (
          <ProjectCard
            key={proj.link}
            className={styles.card}
            mark={proj.mark}
            caption={proj.caption}
            link={proj.link}
            h3={proj.title}
            p={proj.desc}
          />
        ))}
      </div>
    </section>
  );
}
