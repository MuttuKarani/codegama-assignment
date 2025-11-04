import React from "react";
import "../scss/custom.scss";

const DashboardSection = () => {
  return (
    <section className="dashboard-section">
      {/*Dashboard Image */}
      <div className="dashboard-container">
        <img
          src="/assets/maindashboard.png"
          alt="Dashboard Overview"
          className="dashboard-image"
        />
      </div>

      {/* Logos */}
      <div className="brand-logos">
        <img src="/assets/item6.png" alt="Netflix" />
        <img src="/assets/item4.png" alt="Disney" />
        <img src="/assets/item2.png" alt="Airbnb" />
        <img src="/assets/item3.png" alt="Microsoft" />
        <img src="/assets/item1.png" alt="Duolingo" />
        <img src="/assets/item6.png" alt="Netflix" />
      </div>
    </section>
  );
};

export default DashboardSection;
