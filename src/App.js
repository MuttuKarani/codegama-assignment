import React, { useEffect } from "react";
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
import "./scss/custom.scss";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <NavBar />
      <section id="features">
        <HeroModule />
        <DashboardSection />
        <ManageDashboard />
        <FeatureHighlights />
      </section>

      <section id="resources">
        <AdvancedFeatures />
        <TrackSection />
        <FocusSection />
        <TestimonialsSection />
      </section>

      <section id="comparison">
        <FeatureComparison />
      </section>

      <section id="blogs">
        <BlogSection />
        <FaqSection />
        <Footer />
      </section>
    </>
  );
}

export default App;
