import React from "react";
import "../../scss/custom.scss";

const ManageDashboard = () => {
  return (
    <section className="manage-dashboard">
      <div className="manage-container">
        <div className="manage-text">
          <h2>Keep track of all usage</h2>
          <p className="manage-subtext">
            Tracking all usages for efficient management and comprehensive
            oversight.
          </p>

          <ul className="manage-features">
            <li> Comprehensive Usage Monitoring</li>
            <li> Efficient Management</li>
            <li> Enhanced Oversight</li>
          </ul>

          <button className="button manage-btn">Go to Watchlist →</button>
        </div>

        {/* Image  */}
        <div className="manage-image">
          <img
            src="/assets/managedashboard.png"
            alt="Usage dashboard preview"
          />
        </div>
      </div>
    </section>
  );
};

export default ManageDashboard;
