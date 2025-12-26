"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bjugeua", // Replace with your EmailJS Service ID
        "template_ux5eiko", // Replace with your EmailJS Template ID
        form.current,
        "gVku00cn1JiTacdPT" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast("Failed to send the email.");
        }
      );
  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea name="message" required />

        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default ContactForm;
