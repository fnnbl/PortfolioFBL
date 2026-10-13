import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import styles from "./SiteHeaderStyles.module.css";

export default function SiteHeader() {
  const [showName, setShowName] = useState(false);

  // The name only joins the monogram once the hero headline has scrolled away,
  // so it is never on screen twice
  useEffect(() => {
    const heading = document.querySelector("#hero h1");
    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowName(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px" }
    );
    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#hero" aria-label="Fynn Blaurock, back to top">
          <span className={styles.monogram} aria-hidden="true">
            FB
          </span>
          <span
            className={`${styles.name} ${showName ? styles.nameVisible : ""}`}
            aria-hidden="true"
          >
            Fynn Blaurock
          </span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
