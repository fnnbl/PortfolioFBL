import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Fynn
          <br />
          Blaurock
        </h1>
        <h2>Apprentice Computer Science Expert @ Phoenix Contact</h2>
        <span>
          <a
            href="https://linkedin.com/in/fynn-blaurock-37723b218/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/fnnbl" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Having gained valuable experience across various roles and industries,
          I am currently completing my apprenticeship as an computer science
          expert.
        </p>
      </div>
    </section>
  );
}

export default Hero;
