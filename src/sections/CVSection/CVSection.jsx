import React, { useRef } from "react";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import styles from "./CVSection.module.css";

const LanguageBar = ({ label, percent }) => {
  const segments = Array.from({ length: 10 }, (_, i) => i * 10 < percent);
  return (
    <div className={styles.langSegment}>
      <div className={styles.langLabel}>{label}</div>
      <div className={styles.segments}>
        {segments.map((on, i) => (
          <span
            key={i}
            className={`${styles.segment} ${on ? styles.on : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

const CVSection = () => {
  const ref = useRef();
  useScrollAnimate(ref);

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
      company: "HBZ Brackwede",
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

      <div className={styles.section}>
        <h3 className={styles.subtitle}>Interests &amp; Hobbies</h3>
        <div className={styles.interestsGrid}>
          <div className={styles.interestBlock}>
            <div className={styles.interestTitle}>Interests</div>
            <div className={styles.interestList}>
              Project management, Software development, Hardware, Business,
              Traveling
            </div>
          </div>
          <div className={styles.interestBlock}>
            <div className={styles.interestTitle}>Sports</div>
            <div className={styles.interestList}>
              Basketball, Running, Tennis
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>Languages</h3>
        <LanguageBar label="German" percent={100} />
        <LanguageBar label="English" percent={90} />
      </div>
    </section>
  );
};

export default CVSection;
