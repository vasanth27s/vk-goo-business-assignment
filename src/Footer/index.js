import React from 'react';
import "./style.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Footer = () => (
  <>
      <div className="dashboard-container">

    <div className="footer-container">
      <div className="company">
        <p className="category">COMPANY</p>
        <p className="company-details">About</p>
        <p className="company-details">Premium</p>
        <p className="company-details">Blog</p>
        <p className="company-details">Referral Program</p>
      </div>

      <div className="company">
        <p className="category">HELP AND SUPPORT</p>
        <p className="company-details">Contact Us</p>
        <p className="company-details">Knowledge Center</p>
        <p className="company-details">Premium Support</p>
      </div>

      <div className="company">
        <p className="category">LEARNING</p>
        <p className="company-details">Learn Hub</p>
        <p className="company-details">Tutorials</p>
        <p className="company-details">Communities</p>
      </div>

      <div className="company">
        <p className="category">RESOURCES</p>
        <p className="company-details">Third-Party Tools</p>
        <p className="company-details">Illustrations</p>
        <p className="company-details">Stock Photos</p>
      </div>

      <div className="company">
        <p className="category">LEGAL</p>
        <p className="company-details">Privacy Policy</p>
        <p className="company-details">Terms & Conditions</p>
        <p className="company-details">EULA</p>
      </div>
    </div>

    <div className="company-rights-footer">
      <div className="company-logo-container">
        <img
          src="https://i.postimg.cc/94KQqKCC/Ellipse-83.png"
          alt="Ellipse-83"
          className="eclipse-img"
        />
        <h1 className="company-name">Go Business</h1>
        <img
          src="https://i.postimg.cc/8F9LPZYr/Ellipse-82.png"
          alt="Ellipse-82"
          className="eclipse-dot-img"
        />
      </div>
      <div className="copyrights">
        <p className="copyrights-text">
          2024 Go Business, Inc. All rights reserved.
        </p>
      </div>
      <div className="company-social-links-container">
        <ImLinkedin size={25} style={{ marginRight: "10px" }} />
        <FaFacebookSquare size={25} style={{ marginRight: "10px" }} />
        <FaInstagram size={25} style={{ marginRight: "10px" }} />
        <AiFillTwitterCircle size={25} style={{ marginRight: "10px" }} />
      </div>
    </div>
    </div>
  </>
);

export default Footer;
