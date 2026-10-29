import { useRef } from "react";
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
          description: "Developer Tooling & Standards for Firmware Teams",
          highlights: [
            {
              name: "SBOM Automation",
              text: "Working out how to generate reliable SBOMs for embedded firmware automatically, including AI-assisted tooling (CycloneDX, CRA)",
            },
            {
              name: "Repository Standards",
              text: "Defining a common structure for firmware repositories",
            },
            {
              name: "Signal Conditioner App",
              text: "Developing features for a device configuration app (Angular/Ionic), from new device support to usability improvements",
            },
          ],
        },
        {
          period: "September 2023 – July 2026",
          role: "Apprenticeship",
          description: "Computer Science Expert",
          highlights: [
            {
              name: "QA Automation",
              text: "Automated UI testing of the PLCnext web-based management with Java/Selenium",
            },
            {
              name: "E-Mobility",
              text: "Built a Python/FastAPI backend with layered architecture and thorough test coverage",
            },
            {
              name: "Final Project",
              text: "Developed PDF data extraction for Bee360 with Python/pdfplumber (certification project)",
            },
          ],
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
      period: "August 2017 – June 2020",
      roles: [
        {
          period: "August 2017 – June 2020",
          role: "Apprenticeship",
          description: "Food Technology Specialist",
        },
      ],
    },
  ];

  return (
    <section id="cv" ref={ref} className={`${styles.cvSection} scroll-animate`}>
      <h2 className="section-title">Professional Experience</h2>
      <ol className={styles.companies}>
        {experiences.map((company) => (
          <li key={company.company} className={styles.company}>
            <h3 className={styles.companyName}>{company.company}</h3>
            <ol className={styles.roles}>
              {company.roles.map((item) => (
                <li key={item.period} className={styles.role}>
                  <div>
                    <h4 className={styles.roleTitle}>{item.role}</h4>
                    {item.description && (
                      <p className={styles.roleDesc}>{item.description}</p>
                    )}
                    {item.highlights && (
                      <ul className={styles.highlights}>
                        {item.highlights.map((h) => (
                          <li key={h.name} className={styles.highlight}>
                            <h5 className={styles.highlightName}>{h.name}</h5>
                            <p>{h.text}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <span
                    className={`meta ${styles.rolePeriod} ${
                      item.period.endsWith("Present") ? styles.live : ""
                    }`}
                  >
                    {item.period}
                  </span>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default CVSection;
