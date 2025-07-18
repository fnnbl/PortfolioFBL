import React, { useRef } from "react";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import CV from "../../assets/cv_fbl.pdf";
import styles from "./CVSection.module.css";

const CVSection = () => {
  const ref = useRef();
  useScrollAnimate(ref);

  const experiences = [
    {
      period: "September 2023 – Present",
      company: "Phoenix Contact GmbH & Co. KG",
      role: "Apprenticeship: Computer Science Expert",
      description: null,
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
      role: "Apprenticeship: Food Technology Specialist",
      description: null,
    },
    {
      period: "March 2017 – June 2017",
      company: "Stefan Becker Kunststofftechnik GmbH & Co. KG",
      role: "Production Worker",
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
      role: "Intern – Food Technology Specialist",
      description: null,
    },
    {
      period: "January 2014",
      company: "HBZ Brackwede",
      role: "Intern – Office Communications Clerk",
      description: null,
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

      <div className={styles.section}>
        <h3 className={styles.subtitle}>Interests &amp; Hobbies</h3>
        <p>
          <strong>Interests:</strong> Project management, software development,
          hardware, business, traveling
        </p>
        <p>
          <strong>Sports:</strong> Basketball, running, tennis
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>Languages</h3>
        <ul className={styles.languages}>
          <li className={styles.languageItem}>
            <span className={styles.languageLabel}>German</span>
            <div className={styles.barContainer}>
              <div className={styles.bar} style={{ width: "100%" }} />
            </div>
          </li>
          <li className={styles.languageItem}>
            <span className={styles.languageLabel}>English</span>
            <div className={styles.barContainer}>
              <div className={styles.bar} style={{ width: "95%" }} />
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <a href={CV} download>
          <button className={styles.downloadButton}>Get Resume</button>
        </a>
      </div>
    </section>
  );
};

export default CVSection;
