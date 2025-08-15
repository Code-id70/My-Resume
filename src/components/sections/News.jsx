import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import "./News.css";

const certificates = [
  {
    id: 1,
    title: " IBM Working in a Digital World (Professional SKills)",
    date: "Aug 1, 2025",
    duration: "2 months",
    category: "IT Project Management",
    excerpt:
      "Completed IBM AI Engineering program covering machine learning, deep learning, and AI applications.",
    image: "assets/badges/project-management-fundamentals.png", // Path to your certificate image
  },
  {
    id: 2,
    title: " IBM Agile Explore",
    date: "Jul 15, 2025",
    duration: "2 weeks",
    category: "IT Project Management",
    excerpt:
      "Gained knowledge in Agile methodologies, Waterfall framework and team collaboration strategies.",
    image: "assets/badges/project-management-fundamentals.png",
  },
  {
    id: 3,
    title: "Building Your First Workflow with ClickUp",
    date: "July, 2025",
    duration: "1 month",
    category: "IT Project Managemnt",
    excerpt:
      "Building your first workflow in CLickUp involves structuring your workspace to manage tasks and project efficiently using Setting up Intake, Structuring Lists and Statuses, Leveraging Automations, Implementing and Testing and more. ",
    image: "assets/badges/click-intermidate .png",
  },
  {
    id: 4,
    title: " IBM Cybersecurity Fundamentals",
    date: "July, 2025",
    duration: "1 month",
    category: "Cybersecurity",
    excerpt:
      "I learned core cybersecurity concepts, key threats and industry best practices, along with skills in operating systems, compliance standards, endpoint security, cryptography and encryption preparing me to protect and manage secure digital environments.",
    image: "assets/badges/cybersecurity-fundamentals.png",
  },
  {
    id:5,
    title: " IBM Artificial Intelligence Fundamentals",
    date: "April, 2025",
    duration: "2 month",
    category: "Cybersecurity",
    excerpt:
      "I gained knowledge of AI concepts, including natural language processing, computer vision, machine learning, deep learning, chatbots and neural networks. I also learned about AI ethics and practical applications of AI across various industries.",
    image: "assets/badges/artificial-intelligence-fundamentals.png",
  },
  {
    id: 6,
    title: " IBM Project Manageent Fundamentals",
    date: "March, 2025",
    duration: "1 month",
    category: "IT Project Management",
    excerpt:
      "I learned the core principles of project management, its benefits and common challenges in the field. I also explored how trends like remote work, Agile methodologies and artificial intelligence are transforming modern project management practices.",
    image: "assets/badges/project-management-fundamentals.png",
  },
];

const News = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="news-section">
      <div className="news-content">
        <h1 className="section-title">CERTIFICATES</h1>
        <div className="title-underline"></div>

        <p className="news-intro">
          Certified in AI, Agile, Cybersecurity, and Project Management through IBM, 
          with a strong commitment to continuous learning and staying ahead in 
          the latest software development trends.
        </p>

        <div className="articles-grid">
          {certificates.map((cert) => (
            <article
              key={cert.id}
              className="article-card hover-lift transition-all"
            >
              <div className="article-image">
                <img src={cert.image} alt={cert.title} />
                <div className="article-category">{cert.category}</div>
              </div>

              <div className="article-content">
                <div className="article-meta">
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={14} />
                    <span>{cert.duration}</span>
                  </div>
                </div>

                <h3 className="article-title">{cert.title}</h3>
                <p className="article-excerpt">{cert.excerpt}</p>

                <button
                  className="read-more-btn"
                  onClick={() => openCertificate(cert)}
                >
                  View
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="article-modal" onClick={closeCertificate}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeCertificate}>
              ×
            </button>
            <div className="modal-body">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="modal-image"
              />
              <div className="modal-article-content">
                <div className="article-category">
                  {selectedCertificate.category}
                </div>
                <h1>{selectedCertificate.title}</h1>
                <div className="article-meta">
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>{selectedCertificate.date}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={14} />
                    <span>{selectedCertificate.duration}</span>
                  </div>
                </div>
                <div className="article-full-content">
                  <p>{selectedCertificate.excerpt}</p>
                  <p>
                    This certificate validates my skills and knowledge in {selectedCertificate.category.toLowerCase()}, 
                    demonstrating my commitment to professional growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
