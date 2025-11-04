import React from "react";
import "../../scss/custom.scss";

const BlogSection = () => {
  const blogs = [
    {
      image: "/assets/image-section-one.png",
      title: "Timely alerts & sync ups",
      text: "Pick winning stocks confidently with 130+ filters or create your own goal-based screens.",
    },
    {
      image: "/assets/image-section-two.png",
      title: "Timely alerts",
      text: "Pick winning stocks confidently with 130+ filters or create your own goal-based screens.",
    },
    {
      image: "/assets/image-section-three.png",
      title: "Timely alerts & sync ups",
      text: "Pick winning stocks confidently with 130+ filters or create your own goal-based screens.",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Blogs and newsroom updates</h2>
        <p>
          A community for India’s investors hang out and talk about investments,
          personal finance
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className={`blog-card ${index === 2 ? "wide" : ""}`} key={index}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
