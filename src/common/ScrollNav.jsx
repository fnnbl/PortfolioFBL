import { useState, useEffect } from "react";
import styles from "./ScrollNavStyles.module.css";

const sections = [
  { id: "hero", label: "About" },
  { id: "cv", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "languages", label: "Languages" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function ScrollNav() {
  const [active, setActive] = useState("hero");

  // A section counts as active while it crosses a thin band at 40 % viewport height
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -59% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav} aria-label="Sections">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`${styles.dot} ${active === id ? styles.active : ""}`}
          aria-label={label}
          aria-current={active === id ? "location" : undefined}
          data-label={label}
        />
      ))}
    </nav>
  );
}
