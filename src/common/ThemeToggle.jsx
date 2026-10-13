import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { useTheme } from "./ThemeContext";
import styles from "./ThemeToggleStyles.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <img
        src={theme === "light" ? sun : moon}
        alt=""
        aria-hidden="true"
        width="24"
        height="24"
      />
    </button>
  );
}
