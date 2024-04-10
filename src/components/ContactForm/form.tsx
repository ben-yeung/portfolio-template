import React from "react";
import { useTheme } from "next-themes";
import styles from "./form.module.css";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";

interface ComponentProps {}

const ContactForm = (props: ComponentProps) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;
  // Contact Form button label status
  const [submitStatus, setSubmitStatus] = useState("Submit");

  // EmailJS integration for contact form
  const form = useRef(null);
  const sendEmail = (e: any) => {
    e.preventDefault();

    if (e.target.name.value == "" || e.target.email.value == "" || e.target.message.value == "") {
      alert("Field(s) cannot be empty. Please double check!");
      return;
    }

    // See https://www.emailjs.com/ to create service id, template id, and public key
    emailjs.sendForm("service_id", "template_id", e.currentTarget, `public_key`).then(
      (result) => {
        setSubmitStatus("Sent!");
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
      },
      (error) => {
        console.log(error.text);
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
      }
    );
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles["form-container"]}>
      <form ref={form} onSubmit={sendEmail} className={styles["form-box"]}>
        <div className={styles["form-details-container"]}>
          <div className={styles["form-details"]}>
            <input type="text" name="name" className={styles["form-input"]} placeholder="name" />
            <input type="email" name="email" className={styles["form-input"]} placeholder="email" />
          </div>
          <textarea name="message" cols={30} rows={8} className={styles["form-input-area"]}></textarea>
        </div>
        <button className={styles["form-submit"]} type="submit">
          {submitStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
