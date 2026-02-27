import React, { useRef } from "react";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import styles from "./SkillsStyles.module.css";

const Skills = () => {
  const ref = useRef();
  useScrollAnimate(ref);

  return (
    <section id="skills" ref={ref} className={`${styles.skillsSection} scroll-animate`}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skillBlock}>
          <div className={styles.skillTitle}>Software Development</div>
          <div className={styles.skillList}>
            Python, FastAPI, API Design & Data Modeling, SQL, Asynchronous Backend Logic, Container-based Applications, Kubernetes, C# Basics
          </div>
        </div>
        <div className={styles.skillBlock}>
          <div className={styles.skillTitle}>Web Technologies</div>
          <div className={styles.skillList}>
            HTML, CSS, JavaScript, React Basics, Structured UI & Component Layouts
          </div>
        </div>
        <div className={styles.skillBlock}>
          <div className={styles.skillTitle}>Quality & Testing</div>
          <div className={styles.skillList}>
            Unit & Integration Tests (pytest), ASGI-based API Tests, Structured Test Strategies & Test Data Seeding
          </div>
        </div>
        <div className={styles.skillBlock}>
          <div className={styles.skillTitle}>Tooling & Systems</div>
          <div className={styles.skillList}>
            Git, Docker, Dev Containers, CI/CD with GitLab, Linux-based Development & Runtime Environments
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
