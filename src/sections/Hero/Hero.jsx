import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";

function Hero() {
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile picture' />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode Icon'
        />
      </div>
      <div className={styles.info}>
        <h1>
          Fynn
          <br />
          Blaurock
        </h1>
        <h2>Fachinformatiker</h2>
        <span>
          <a
            href='https://linkedin.com/in/fynn-blaurock-37723b218/'
            target='_blank'
          >
            <img src={linkedinIcon} alt='Linkedin Icon' />
          </a>
          <a href='https://github.com/fnnbl' target='_blank'>
            <img src={githubIcon} alt='GitHub Icon' />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
