import React from "react";
import "../../scss/custom.scss";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      {/* Logo Row  */}
      <div className="logo-row">
        <img src="/assets/item1.png" alt="Brand 1" />
        <img src="/assets/item2.png" alt="Brand 2" />
        <img src="/assets/item3.png" alt="Brand 3" />
        <img src="/assets/item4.png" alt="Brand 4" />
        <img src="/assets/item5.png" alt="Brand 5" />
        <img src="/assets/item6.png" alt="Brand 6" />
      </div>

      {/* Testimonials  */}
      <div className="testimonial-container">
        <div className="testimonial-box">
          <p>
            “We were one of the early adopters of Metaforms. More than the lead
            quality, the quality of conversations with our prospects improved.
            Metaforms pays for itself in the first few days! I don’t see us not
            using Metaforms in near future.”
          </p>
          <h4>Rohin Singh</h4>
          <span>Chief Integrating Officer</span>
        </div>

        <div className="divider"></div>

        <div className="testimonial-box">
          <p>
            “We were one of the early adopters of Metaforms. More than the lead
            quality, the quality of conversations with our prospects improved.
            Metaforms pays for itself in the first few days! I don’t see us not
            using Metaforms in near future.”
          </p>
          <h4>Rohin Singh</h4>
          <span>Chief Integrating Officer</span>
        </div>

        <div className="divider"></div>

        <div className="testimonial-box">
          <p>
            “We were one of the early adopters of Metaforms. More than the lead
            quality, the quality of conversations with our prospects improved.
            Metaforms pays for itself in the first few days! I don’t see us not
            using Metaforms in near future.”
          </p>
          <h4>Rohin Singh</h4>
          <span>Chief Integrating Officer</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
