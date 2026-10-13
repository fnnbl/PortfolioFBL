import styles from "./FooterStyles.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <p>&copy; {currentYear} Fynn Blaurock</p>
      <nav aria-label="Social links" className={styles.links}>
        <a
          href="https://linkedin.com/in/fynn-blaurock-37723b218/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://github.com/fnnbl" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
