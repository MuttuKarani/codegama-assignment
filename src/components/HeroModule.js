import React from "react";
import "../scss/custom.scss";
import NavBar from "./NavBar";

const HeroModule = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/assets/banneravater1.png')",
      }}
    >
      {/* Background overlay */}
      <div className="hero-overlay"></div>

      <NavBar />

      {/*Hero Content */}
      <div className="hero-content">
        <p className="hero-badge">
          Raised $1.5 Million funding • <a href="#">Read More →</a>
        </p>

        <h1>Manage your sales and analytics at one place</h1>
        <p className="hero-subtext">
          The page you are looking for does not exist. Sign up for Framer to
          publish your own website.
        </p>

        <div className="hero-buttons">
          <button className="button button-white">Buy Template</button>
          <button className="button">Book Demo</button>
        </div>
      </div>
    </section>
  );
};

export default HeroModule;
