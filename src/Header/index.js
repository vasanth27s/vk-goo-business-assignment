import React from 'react';
import "./style.css";

const Header = () => (
  <div className="navbar-container">
    <div className="nav-logo-container">
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
    <ul className="nav-items-container">
      <li className="nav-item">Home</li>
      <li className="nav-item">About Us</li>
      <li className="nav-item">Courses</li>
      <li className="nav-item">Projects</li>
      <li className="nav-item">Contact</li>
    </ul>
    <button className="try-btn">Try for free</button>
  </div>
);

export default Header;
