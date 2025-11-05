import React from "react";
import "../../scss/custom.scss";

const Footer = () => {
  return (
    <section
      className="manage-footer"
      style={{
        backgroundImage: "url('/assets/footer-img.png')",
      }}
    >
      <div className="manage-content">
        <div className="manage-left">
          <h1>
            Manage your sales <br /> and analytics at one <br /> place
          </h1>

          <div className="manage-sub">
            <div className="sub-left">
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

            <div className="vertical-dotted-line"></div>

            <div className="sub-right">
              <h4>Download our App</h4>
              <div className="app-buttons">
                <img src="/assets/play-store.png" alt="Google Play" />
                <img src="/assets/app-store.png" alt="App Store" />
              </div>
            </div>
          </div>

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
      </div>

      {/* Keep one Privacy Policy text */}
      <p className="privacy-text">Privacy Policy</p>
    </section>
  );
};

export default Footer;
