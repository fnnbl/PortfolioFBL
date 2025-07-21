import React, { useRef } from "react";
import { useTheme } from "../../common/ThemeContext";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import styles from "./ProjectsStyles.module.css";
import websiteProjectLight from "../../assets/websiteProjectLight.svg";
import websiteProjectDark from "../../assets/websiteProjectDark.svg";
import budgetManagementLight from "../../assets/budgetManagementLight.svg";
import budgetManagementDark from "../../assets/budgetManagementDark.svg";
import ProjectCard from "../../common/ProjectCard";

const projectData = [
  {
    srcLight: websiteProjectLight,
    srcDark: websiteProjectDark,
    link: "https://github.com/fnnbl/PortfolioFBL",
    title: "Personal Website",
    desc: "Responsive Website Using ReactJs",
  },
  {
    srcLight: budgetManagementLight,
    srcDark: budgetManagementDark,
    link: "https://github.com/fnnbl/FinanceDashboard",
    title: "Finance Dashboard App",
    desc: "Track Income & Expenses",
  },
];

export default function Projects() {
  const ref = useRef();
  useScrollAnimate(ref);
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      ref={ref}
      className={`${styles.projectsSection} scroll-animate`}
    >
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projectData.map((proj, i) => {
          const src = theme === "light" ? proj.srcLight : proj.srcDark;

          return (
            <div key={i} className={styles.projectBlock}>
              <ProjectCard
                src={src}
                link={proj.link}
                h3={proj.title}
                p={proj.desc}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
