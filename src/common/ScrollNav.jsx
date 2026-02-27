import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = sections[0].id;

      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop - window.innerHeight * 0.4 <= scrollY) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.nav}>
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={`${styles.dot} ${active === id ? styles.active : ""}`}
          onClick={() => scrollTo(id)}
          aria-label={label}
          data-label={label}
        />
      ))}
    </nav>
  );
}
