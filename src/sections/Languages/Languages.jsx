import React, { useRef } from "react";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import styles from "./LanguagesStyles.module.css";

const LanguageEntry = ({ name, level, description }) => (
  <div className={styles.langEntry}>
    <div className={styles.langName}>{name}</div>
    <div className={styles.langLevel}>{level}</div>
    <div className={styles.langDesc}>{description}</div>
  </div>
);

const Languages = () => {
  const ref = useRef();
  useScrollAnimate(ref);

  return (
    <section id="languages" ref={ref} className={`${styles.languagesSection} scroll-animate`}>
      <h2 className={styles.title}>Languages</h2>
      <div className={styles.languagesContainer}>
        <LanguageEntry name="German" level="C2" description="Native Speaker" />
        <LanguageEntry name="English" level="C1" description="Professional Proficiency" />
      </div>
    </section>
  );
};

export default Languages;
