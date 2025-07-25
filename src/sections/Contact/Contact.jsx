import React, { useRef } from "react";
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
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/mwpebwae" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
