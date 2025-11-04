import React from "react";
import "../../scss/custom.scss";

const FeatureHighlights = () => {
  return (
    <section className="feature-highlights">
      <div className="feature-container">
        {/* Feature 1 */}
        <div className="feature-box">
          <img src="/assets/icons1.png" alt="Real-Time Tracking Icon" />
          <h3>Real-Time Tracking</h3>
          <p>
            Monitor usage as it happens to stay updated with the latest data.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-box">
          <img src="/assets/icons2.png" alt="Detailed Reporting Icon" />
          <h3>Detailed Reporting</h3>
          <p>
            Generate in-depth reports that provide insights into usage patterns
            and trends.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-box">
          <img src="/assets/icons3.png" alt="Customizable Alerts Icon" />
          <h3>Customizable Alerts</h3>
          <p>
            Set up notifications for specific usage thresholds or unusual
            activity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
