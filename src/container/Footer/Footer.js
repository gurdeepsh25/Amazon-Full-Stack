import React, { useState, useEffect } from "react";

import "./Footer.css";

import logo from "../../assets/logo.png";

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#f2f2f2",
    color: "#333",
    border: "none",
    borderRadius: "30%",
    cursor: "pointer",
    padding: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
  },
  show: {
    opacity: 1,
  },
};

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="footer">
      <div className="footer-section">
        <h3>Get to Know Us</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Cares</li>
          <li>Gift a Smile</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect with Us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Make Money with Us</h3>
        <ul>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Become an Affiliate</li>
          <li>Fulfilment by Amazon</li>
          <li>Advertise Your Products</li>
          <li>Amazon Pay on Merchants</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Let Us Help You</h3>
        <ul>
          <li>COVID-19 and Amazon</li>
          <li>Your Account</li>
          <li>Returns Centre</li>
          <li>100% Purchase Protection</li>
          <li>Amazon App Download</li>
          <li>Amazon Assistant Download</li>
          <li>Help</li>
        </ul>
      </div>
      <button
        style={{ ...styles.button, ...(showButton && styles.show) }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to Top
      </button>
      <img className="footer__logo" src={logo} alt="" />
    </div>
  );
}

export default Footer;
