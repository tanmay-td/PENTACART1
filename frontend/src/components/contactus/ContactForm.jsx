import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-page-container">
      <div className="contact-page-header">
        
        <h1>Acme Inc.</h1>
        <p>123 Main St, Anytown USA</p>
        <p>Phone: (555) 555-5555</p>
        <p>Email: info@acme.com</p>
      </div>
      <div className="contact-page-social">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.example.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Website"
        >
          <i className="fas fa-globe"></i>
        </a>
      </div>
    </div>
  );
}

export default ContactForm;
