import React from "react";
import NavBar from "./components/Navbar/NavBar";
import HeroModule from "./components/HeroModule";
import DashboardSection from "./components/Dashboard/DashboardSection";
import ManageDashboard from "./components/Dashboard/ManageDashboard";
import FeatureHighlights from "./components/Features/FeatureHighlights";
import AdvancedFeatures from "./components/Features/AdvancedFeatures";
import TrackSection from "./components/TrackSection/TrackSection";
import FocusSection from "./components/FocusSection/FocusSection";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";
import FeatureComparison from "./components/Features/FeatureComparison";
import BlogSection from "./components/Blogs/BlogSection";
import FaqSection from "./components/FAQ/FaqSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <HeroModule />
      <DashboardSection />
      <ManageDashboard />
      <FeatureHighlights />
      <AdvancedFeatures />
      <TrackSection />
      <FocusSection />
      <TestimonialsSection />
      <FeatureComparison />
      <BlogSection />
      <FaqSection />
      <Footer />
    </>
  );
}

export default App;
