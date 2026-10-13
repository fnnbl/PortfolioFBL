import { useRef } from "react";
import useScrollAnimate from "../../hooks/useScrollAnimate";
import styles from "./ContactStyles.module.css";

function Contact() {
  const ref = useRef();
  useScrollAnimate(ref);

  return (
    <section
      id="contact"
      ref={ref}
      className={`${styles.container} scroll-animate`}
    >
      <div className={styles.intro}>
        <h2 className="section-title">Contact</h2>
        <p>
          Questions, opportunities or feedback? Send me a message and I will
          get back to you.
        </p>
      </div>
      <form
        className={styles.form}
        action="https://formspree.io/f/mwpebwae"
        method="POST"
      >
        <div className={styles.row}>
          <div className={styles.group}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.field}
              autoComplete="name"
              placeholder="Your name…"
              required
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.field}
              autoComplete="email"
              spellCheck={false}
              placeholder="you@example.com…"
              required
            />
          </div>
        </div>
        <div className={styles.group}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className={styles.field}
            placeholder="What would you like to talk about…"
            required
          ></textarea>
        </div>
        <button className={`btn btn-primary ${styles.submit}`} type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
