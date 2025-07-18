import React from "react";
import styles from "./CVSection.module.css";

const CVSection = () => (
  <section className={styles.cvSection} id="cv">
    <h2 className={styles.title}>Biography</h2>

    {/* Professional Experience */}
    <div className={styles.section}>
      <h3 className={styles.subtitle}>Professional Experience</h3>
      <ul className={styles.list}>
        <li>
          <strong>
            Computer Science Expert (Apprenticeship)
          </strong>
          , Phoenix Contact GmbH & Co. KG - September 2023 to Present
        </li>
        <li>
          <strong>Logistics Associate</strong>, Torwegge GmbH & Co. KG - October
          2020 to August 2023
          <br />
          Shipping for the conveyor technology division
        </li>
        <li>
          <strong>Food Technology Specialist (Apprenticeship)</strong>, Dr.
          August Oetker Nahrungsmittel KG - August 2017 to June 2020
        </li>
        <li>
          <strong>Production Worker</strong>, Stefan Becker Kunststofftechnik
          GmbH & Co. KG - March 2017 to June 2017
          <br />
          Operation of production machinery
        </li>
        <li>
          <strong>Federal Volunteer Service</strong>, Kreissportbund Lippe e.V.
          - August 2016 to January 2017
          <br />
          Planning and execution of sports programs for refugees
        </li>
        <li>
          <strong>Intern - Food Technology Specialist</strong>, Dr. August
          Oetker Nahrungsmittel KG - January 2016 to February 2016
        </li>
        <li>
          <strong>Intern - Office Communications Clerk</strong>, HBZ Brackwede -
          January 2014
        </li>
      </ul>
    </div>

    {/* Interests & Hobbies */}
    <div className={styles.section}>
      <h3 className={styles.subtitle}>Interests & Hobbies</h3>
      <p>
        <strong>Interests:</strong> Project management, software development,
        hardware, business, traveling
      </p>
      <p>
        <strong>Sports:</strong> Basketball, running, tennis
      </p>
    </div>

    {/* …weitere Sektionen wie Ausbildung, Skills etc. */}
  </section>
);

export default CVSection;
