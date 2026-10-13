import { useRef } from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import useScrollAnimate from "../../hooks/useScrollAnimate";

function Hero() {
  const { theme } = useTheme();
  const ref = useRef();
  useScrollAnimate(ref);

  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section
      id="hero"
      ref={ref}
      className={`${styles.container} scroll-animate`}
    >
      <div className={styles.info}>
        <h1 className={styles.name}>Fynn Blaurock</h1>
        <p className={styles.lead}>
          Software Engineering Support Specialist at Phoenix Contact.
        </p>
        <p className={styles.description}>
          Computer science expert with a background in food technology and
          logistics. Today I support firmware teams with developer tooling
          and standards.
        </p>
        <div className={styles.actions}>
          <a className="btn btn-primary" href="#contact">
            Get in Touch
          </a>
          <a
            className="icon-btn"
            href="https://linkedin.com/in/fynn-blaurock-37723b218/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <img src={linkedinIcon} alt="" width="18" height="18" />
          </a>
          <a
            className="icon-btn"
            href="https://github.com/fnnbl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <img src={githubIcon} alt="" width="18" height="18" />
          </a>
        </div>
      </div>
      <div className={styles.visual}>
        <img
          className={styles.portrait}
          src={heroImg}
          alt="Portrait of Fynn Blaurock"
          width="500"
          height="500"
          fetchpriority="high"
        />
      </div>
    </section>
  );
}

export default Hero;
