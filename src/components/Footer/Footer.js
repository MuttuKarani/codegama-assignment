import React from "react";
import "../../scss/custom.scss";

const Footer = () => {
  return (
    <section
      className="manage-footer"
      style={{
        backgroundImage: "url('/assets/footer-img.png')", // Background image
      }}
    >
      <div className="manage-content">
        {/* Left Section */}
        <div className="manage-left">
          <h1>
            Manage your sales <br /> and analytics at one <br /> place
          </h1>

          <div className="manage-sub">
            <img
              src="/assets/arrow.png"
              alt="Arrow Icon"
              className="arrow-icon"
            />
            <p>
              Empowering Your Projects, <br />
              Enhancing Your Success, Every <br />
              Step of the Way.
            </p>
          </div>

          {/* ✅ Social Icons with Valid Links */}
          <div className="social-icons">
            <a
              href="https://linkedin.com/company/ropflow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src="/assets/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="https://x.com/ropflow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <img src="/assets/x-media.png" alt="X" />
            </a>
            <a
              href="https://instagram.com/ropflow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/assets/instagram-icon.png" alt="Instagram" />
            </a>
          </div>

          <p className="footer-credit">© ropflow.in</p>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Right Section */}
        <div className="manage-right">
          <h4>Download our App</h4>
          <div className="app-buttons">
            <img src="/assets/play-store.png" alt="Google Play" />
            <img src="/assets/app-store.png" alt="App Store" />
          </div>
        </div>
      </div>

      {/* Privacy Text */}
      <p className="privacy-text">Privacy Policy</p>
    </section>
  );
};

export default Footer;
