import React from "react";
import "../../scss/custom.scss";

const TrackSection = () => {
  return (
    <section className="track-section">
      <div className="track-content">
        <h2>
          Track what
          <br />
          matters to you
        </h2>

        <div className="track-cards">
          {/* Card 1 */}
          <div className="track-card green">
            <div className="track-info">
              <h3>Transactions</h3>
              <p>
                Pick winning stocks confidently with 130+ filters or create your
                own goal-based screens.
              </p>
            </div>
            <img
              src="/assets/history-card.png"
              alt="Transactions"
              className="track-img"
            />
          </div>

          {/* Card 2 */}
          <div className="track-card purple">
            <div className="track-info">
              <h3>Friends and family</h3>
              <p>
                Pick winning stocks confidently with 130+ filters or create your
                own goal-based screens.
              </p>
            </div>
            <img
              src="/assets/combine-card.png"
              alt="Friends and Family"
              className="track-img"
            />
          </div>

          {/* Card 3 */}
          <div className="track-card brown">
            <div className="track-info">
              <h3>Timely reminders</h3>
              <p>
                Pick winning stocks confidently with 130+ filters or create your
                own goal-based screens.
              </p>
            </div>
            <img
              src="/assets/date-card.png"
              alt="Timely Reminders"
              className="track-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackSection;
