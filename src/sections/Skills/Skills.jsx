import { useRef } from "react";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import styles from "./SkillsStyles.module.css";

const skillGroups = [
  {
    title: "Software Development",
    items: [
      "Python",
      "FastAPI",
      "API Design & Data Modeling",
      "SQL",
      "Asynchronous Backend Logic",
      "Container-based Applications",
      "Kubernetes",
      "C# Basics",
    ],
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript", "React Basics", "Structured UI & Component Layouts"],
  },
  {
    title: "Quality & Testing",
    items: [
      "Unit & Integration Tests (pytest)",
      "ASGI-based API Tests",
      "Structured Test Strategies",
      "Test Data Seeding",
    ],
  },
  {
    title: "Tooling & Systems",
    items: [
      "Git",
      "Docker",
      "Dev Containers",
      "CI/CD with GitLab",
      "Linux-based Development & Runtime Environments",
    ],
  },
];

const Skills = () => {
  const ref = useRef();
  useScrollAnimate(ref);

  return (
    <section id="skills" ref={ref} className={`${styles.skillsSection} scroll-animate`}>
      <h2 className="section-title">Skills</h2>
      <div className={styles.bento}>
        {skillGroups.map(({ title, items }) => (
          <article key={title} className={styles.cell}>
            <h3 className={styles.cellTitle}>{title}</h3>
            <ul className={styles.tags}>
              {items.map((item) => (
                <li key={item} className={styles.tag}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
