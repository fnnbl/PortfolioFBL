import React, { useRef } from "react";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import styles from "./CVSection.module.css";

const LanguageEntry = ({ name, level, description }) => (
  <div className={styles.langEntry}>
    <div className={styles.langName}>{name}</div>
    <div className={styles.langLevel}>{level}</div>
    <div className={styles.langDesc}>{description}</div>
  </div>
);

const CVSection = () => {
  const ref = useRef();
  const skillsRef = useRef();
  const languagesRef = useRef();

  useScrollAnimate(ref);
  useScrollAnimate(skillsRef);
  useScrollAnimate(languagesRef);

  const experiences = [
    {
      period: "September 2023 – Present",
      company: "Phoenix Contact GmbH & Co. KG",
      role: "Apprenticeship",
      description: "Computer Science Expert",
    },
    {
      period: "October 2020 – August 2023",
      company: "Torwegge GmbH & Co. KG",
      role: "Logistics Associate",
      description: "Shipping for the conveyor technology division",
    },
    {
      period: "August 2017 – June 2020",
      company: "Dr. August Oetker Nahrungsmittel KG",
      role: "Apprenticeship",
      description: "Food Technology Specialist",
    },
    {
      period: "March 2017 – June 2017",
      company: "Stefan Becker Kunststofftechnik GmbH & Co. KG",
      role: "Production Associate",
      description: "Operation of production machinery",
    },
    {
      period: "August 2016 – January 2017",
      company: "Kreissportbund Lippe e.V.",
      role: "Federal Volunteer Service",
      description: "Planning and execution of sports programs for refugees",
    },
    {
      period: "January 2016 – February 2016",
      company: "Dr. August Oetker Nahrungsmittel KG",
      role: "Intern",
      description: "Food Technology Specialist",
    },
    {
      period: "January 2014",
      company: "Handwerksbildungszentrum Brackwede",
      role: "Intern",
      description: "Administrative Assistant",
    },
  ];

  return (
    <section id="cv" ref={ref} className={`${styles.cvSection} scroll-animate`}>
      <h2 className={styles.title}>Professional Experience</h2>

      <div className={styles.section}>
        {experiences.map((item, idx) => (
          <div key={idx} className={styles.entry}>
            <div className={styles.entryPeriod}>{item.period}</div>
            <div className={styles.entryCompany}>{item.company}</div>
            <div className={styles.entryRole}>{item.role}</div>
            {item.description && (
              <div className={styles.entryDesc}>{item.description}</div>
            )}
          </div>
        ))}
      </div>

      <div ref={skillsRef} className={`${styles.section} scroll-animate`}>
        <h3 className={styles.subtitle}>Skills</h3>
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
      </div>

      <div ref={languagesRef} className={`${styles.section} scroll-animate`}>
        <h3 className={styles.subtitle}>Languages</h3>
        <div className={styles.languagesContainer}>
          <LanguageEntry name="German" level="C2" description="Native Speaker" />
          <LanguageEntry name="English" level="C1" description="Professional Proficiency" />
        </div>
      </div>
    </section>
  );
};

export default CVSection;
