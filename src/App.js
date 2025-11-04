import React from "react";
import NavBar from "./components/NavBar";
import HeroModule from "./components/HeroModule";
import DashboardSection from "./components/DashboardSection";
import ManageDashboard from "./components/ManageDashboard";
import FeatureHighlights from "./components/FeatureHighlights";

function App() {
  return (
    <>
      <HeroModule />
      <DashboardSection />
      <ManageDashboard />
      <FeatureHighlights />
    </>
  );
}

export default App;
