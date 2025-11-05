import React from "react";
import { Check, X, Video } from "lucide-react";
import "../../scss/custom.scss";

const FeatureComparison = () => {
  return (
    <section className="comparison-section">
      <h2>Focus on what matters</h2>

      {/* --- Comparison Table --- */}
      <div className="comparison-table-wrapper">
        <div className="comparison-table">
          {/* Left Feature List */}
          <div className="table-left">
            <p>Dynamic copies for questions</p>
            <p>Auto-sequence of questions</p>
            <p>Follow-up questions on the basis</p>
            <p>AI thank you and start screen</p>
            <p>AI report generation with all important</p>
          </div>

          {/* Feature Columns */}
          <div className="table-columns">
            {/* Highlighted Column */}
            <div className="column highlight">
              <div className="highlight-header">
                <h3>Metaforms</h3>
                <div className="diagonal-line"></div>
              </div>
              <ul>
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i}>
                    <div className="icon-wrapper check-bg">
                      <Check className="icon check" size={18} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Competitor Columns */}
            {["Typeform", "Typeform", "Typeform"].map((name, index) => (
              <div className="column" key={index}>
                <h3 className="with-icon">
                  <Video size={18} className="video-icon" />
                  {name}
                </h3>
                <ul>
                  {[1, 2, 3, 4, 5].map((j) => (
                    <li key={j}>
                      <X className="icon cross" size={20} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* --- Bottom Section --- */}
      <div className="bottom-section">
        <div className="product-card">
          <img
            src="/assets/pro-certificate.png"
            alt="Product Hunt Badge"
            className="product-hunt"
          />
          <img
            src="/assets/Ranking position.png"
            alt="Product of the Week Badge"
            className="ranking-badge"
          />
        </div>

        <div className="stats">
          <div className="row row-top">
            <div className="stat">
              <h3>40,00,000+</h3>
              <span>USERS LOVE TICKERTAPE</span>
            </div>
          </div>
          <div className="divider horizontal dotted"></div>
          <div className="row row-bottom">
            <div className="stat">
              <h3>4.6</h3>
              <span>GOOGLE PLAY RATING</span>
            </div>

            <div className="divider vertical dotted"></div>

            <div className="stat">
              <h3>100cr+</h3>
              <span>TRANSACTION VOLUME</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
