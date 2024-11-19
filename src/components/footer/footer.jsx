import React, { useState } from "react";
import "./footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>I am a frontend developer from, USA width 10 years experience</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @i really dont know what to write beacuse its so much text
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Police</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
