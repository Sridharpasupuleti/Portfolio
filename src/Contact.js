import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qmrxmfc",     // 👉 Your Service ID
        "template_knqvl6l",     // 👉 Your Template ID
        form.current,
        "vFXgVV13UNc_zzDgi"      // 👉 Your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input type="text" name="from_name" placeholder="Your Name" required />

          <input type="email" name="from_email" placeholder="Your Email" required />

          <textarea name="message" placeholder="Your Message" rows="4" required />

          <button type="submit">Send Message</button>

        </form>
      </div>
    </section>
  );
}
