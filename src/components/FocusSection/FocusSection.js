import React from "react";
import "../../scss/custom.scss";

const FocusSection = () => {
  return (
    <section className="focus-section">
      <div className="focus-content">
        <h2>Focus on what matters</h2>
        <p>Checkout how both end of forms look like for our users</p>

        <div className="focus-buttons">
          <button className="active">
            <span className="dot orange"></span> Creator View
          </button>
          <button>
            <span className="dot purple"></span> End User View
          </button>
        </div>

        <div className="focus-video">
          <div className="video-wrapper">
            <img src="/assets/lapbanner.png" alt="Focus Preview" />
          </div>
        </div>

        <div className="focus-grid"></div>
      </div>
    </section>
  );
};

export default FocusSection;
