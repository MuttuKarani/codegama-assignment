import React, { useState } from "react";
import "../../scss/custom.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is the conversion % of MetaForm?",
      answer:
        "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together, please fill the form above. Imply want to get in touch?",
    },
    {
      question: "How do your quote pricing works and when can we get on call?",
      answer:
        "Pricing depends on the complexity and scope of the project. Once we understand your goals, we can provide a transparent estimate and schedule a quick call to discuss further.",
    },
    {
      question: "Can you facelift my design?",
      answer:
        "Absolutely! We can refine your existing design to make it more modern, intuitive, and aligned with your brand’s visual identity.",
    },
    {
      question: "Can you facelift my design?",
      answer:
        "Yes, we can help redesign and improve your UI/UX while keeping your core brand elements intact.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <span className="sparkle">✴</span>
        <h2>Frequently Asked Questions</h2>
        <p>
          A community for India’s investors hang out and talk about investments,
          personal finance
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h4>{faq.question}</h4>
              {activeIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
