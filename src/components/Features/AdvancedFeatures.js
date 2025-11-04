import React from "react";
import "../../scss/custom.scss";

const AdvancedFeatures = () => {
  return (
    <section className="advanced-features">
      <div className="feature-grid">
        {/* Left Column */}
        <div className="feature-col left">
          <div className="feature-item">
            <div className="feature-text">
              <h3>Timely alerts & sync ups</h3>
              <p>
                Pick winning stocks confidently with 130+ filters or create your
                own goal-based screens
              </p>
            </div>
            <img src="/assets/notifications.png" alt="Notification Feature" />
          </div>

          <div className="feature-item">
            <div className="feature-text">
              <h3>Encrypted integrations across</h3>
              <p>
                Pick winning stocks confidently with 130+ filters or create your
                own goal-based screens
              </p>
            </div>
            <img
              src="/assets/bar-code-scan.png"
              alt="Secure Analysis Feature"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="feature-col right">
          <div className="feature-item">
            <div className="feature-text">
              <h3>AI suggested optimisation</h3>
              <p>
                Pick winning stocks confidently with 130+ filters or create your
                own goal-based screens
              </p>
            </div>
            <img
              src="/assets/list-of-media.png"
              alt="AI Optimisation Feature"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
