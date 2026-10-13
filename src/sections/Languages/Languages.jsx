import { useRef } from "react";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import styles from "./LanguagesStyles.module.css";

const languages = [
  { name: "German", level: "C2", description: "Native speaker" },
  { name: "English", level: "C1", description: "Professional proficiency" },
];

const Languages = () => {
  const ref = useRef();
  useScrollAnimate(ref);

  return (
    <section id="languages" ref={ref} className={`${styles.languagesSection} scroll-animate`}>
      <h2 className="section-title">Languages</h2>
      <dl className={styles.languagesContainer}>
        {languages.map(({ name, level, description }) => (
          <div key={name} className={styles.langEntry}>
            <dt className={styles.langName}>{name}</dt>
            <dd className={styles.langLevel}>{level}</dd>
            <dd className={styles.langDesc}>{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Languages;
