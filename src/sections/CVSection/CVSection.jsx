import React, { useRef } from "react";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import styles from "./CVSection.module.css";

const CVSection = () => {
  const ref = useRef();
  useScrollAnimate(ref);

  const experiences = [
    {
      company: "Phoenix Contact GmbH & Co. KG",
      period: "September 2023 – Present",
      roles: [
        {
          period: "July 2026 – Present",
          role: "Software Engineering Support Specialist",
          description:
            "CI/CD pipelines, SBOMs, developer tooling and integration support for the Signal Conditioner App",
        },
        {
          period: "September 2023 – July 2026",
          role: "Apprenticeship",
          description: "Computer Science Expert",
        },
      ],
    },
    {
      company: "Torwegge GmbH & Co. KG",
      period: "October 2020 – August 2023",
      roles: [
        {
          period: "October 2020 – August 2023",
          role: "Logistics Associate",
          description: "Shipping for the conveyor technology division",
        },
      ],
    },
    {
      company: "Dr. August Oetker Nahrungsmittel KG",
      period: "January 2016 – June 2020",
      roles: [
        {
          period: "August 2017 – June 2020",
          role: "Apprenticeship",
          description: "Food Technology Specialist",
        },
        {
          period: "January 2016 – February 2016",
          role: "Intern",
          description: "Food Technology Specialist",
        },
      ],
    },
    {
      company: "Stefan Becker Kunststofftechnik GmbH & Co. KG",
      period: "March 2017 – June 2017",
      roles: [
        {
          period: "March 2017 – June 2017",
          role: "Production Associate",
          description: "Operation of production machinery",
        },
      ],
    },
    {
      company: "Kreissportbund Lippe e.V.",
      period: "August 2016 – January 2017",
      roles: [
        {
          period: "August 2016 – January 2017",
          role: "Federal Volunteer Service",
          description: "Planning and execution of sports programs for refugees",
        },
      ],
    },
    {
      company: "Handwerksbildungszentrum Brackwede",
      period: "January 2014",
      roles: [
        {
          period: "January 2014",
          role: "Intern",
          description: "Administrative Assistant",
        },
      ],
    },
  ];

  return (
    <section id="cv" ref={ref} className={`${styles.cvSection} scroll-animate`}>
      <h2 className={styles.title}>Professional Experience</h2>
      <div className={styles.section}>
        {experiences.map((company, idx) => (
          <div key={idx} className={styles.entry}>
            <div className={styles.entryCompany}>{company.company}</div>
            <div className={styles.roles}>
              {company.roles.map((item, rIdx) => (
                <div key={rIdx} className={styles.role}>
                  <div className={styles.entryPeriod}>{item.period}</div>
                  <div className={styles.entryRole}>{item.role}</div>
                  {item.description && (
                    <div className={styles.entryDesc}>{item.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CVSection;
