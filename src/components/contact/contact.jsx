import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <div className="title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1
            className="amazing-font-color"
            style={{ fontWeight: 600, fontSize: 55 }}
          >
            Let's talk
          </h1>
          <p style={{ width: 400, lineHeight: 2 }}>
            bdslB:KJBV LGV LICB JBV VB;CBcldblbbci bcflasbdbjs cc fglicsbcb. I
            have much free time so contact me everytime you want.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>birk.dinkelacker2009@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>176847628474</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Eberbach</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" placeholder="Enter a message" />
          <button type="submit">Sent</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
