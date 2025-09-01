import React, { useState } from "react";

// Import your certificate images
import fccPython from "../assets/data_analytics.png";
import fccWebDesign from "../assets/Responsive_web.png";
import infosysAI from "../assets/ai_and_ml.png";
import infosysBlockchain from "../assets/blockchain.png";
import infosysML from "../assets/explore_machine_learning.png";
import infosysPython from "../assets/Basics_of_python.png";
import infosysOracle from "../assets/Intoduction_to_oracle.png";
import hackerSql from "../assets/sql_basic.png"
import infosysVlsi from "../assets/vlsi_design.png"


const Certificates = () => {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [filter, setFilter] = useState("all");

  const certificates = [
    {
      id: 1,
      title: "Data Analysis with Python",
      issuer: "freeCodeCamp",
      date: "June 23, 2024",
      hours: "300 hours",
      image: fccPython,
      verifyUrl: "https://freecodecamp.org/certification/fccf06dd3ea-bb2d-43b6-a9d4-b37fe66b2fa/data-analysis-with-python-v7",
      category: "programming"
    },
    {
      id: 2,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "June 23, 2024",
      hours: "300 hours",
      image: fccWebDesign,
      verifyUrl: "https://freecodecamp.org/certification/fccf06dd3ea-bb2d-43b6-a9d4-b37fe6db2f1a/responsive-web-design",
      category: "web"
    },
    {
      id: 3,
      title: "Artificial Intelligence and Machine Learning",
      issuer: "Infosys Springboard",
      date: "December 24, 2024",
      hours: null,
      image: infosysAI,
      verifyUrl: "https://verify.onwingspan.com",
      category: "ai"
    },
    {
      id: 4,
      title: "Blockchain 101",
      issuer: "Infosys Springboard",
      date: "April 16, 2025",
      hours: null,
      image: infosysBlockchain,
      verifyUrl: "https://verify.onwingspan.com",
      category: "blockchain"
    },
    {
      id: 5,
      title: "Explore Machine Learning using Python",
      issuer: "Infosys Springboard",
      date: "April 27, 2025",
      hours: null,
      image: infosysML,
      verifyUrl: "https://verify.onwingspan.com",
      category: "ai"
    },
    {
      id: 6,
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      date: "Febraury 18, 2024",
      hours: null,
      image: infosysPython,
      verifyUrl: "https://verify.onwingspan.com",
      category: "programming"
    },
    {
       id: 7,   
       title: "Introduction to oracle",
      issuer: "Infosys Springboard",
      date: "July 10, 2024",
      hours: null,
      image: infosysOracle,
      verifyUrl: "https://verify.onwingspan.com",
      category: "programming"
    },
    {
        id: 8,   
       title: "SQL",
      issuer: "Hackerrank",
      date: "August 4, 2025",
      hours: null,
      image: hackerSql,
      verifyUrl: "https://www.hackerrank.com/certificates/7dd34fcdb143",
      category: "programming" 
    },
    {
        id: 9,
        title: "VLSI Design",
        issuer: "Infosys Springboard",
      date: "April 15, 2025",
      hours: null,
      image: infosysVlsi,
      verifyUrl: "https://verify.onwingspan.com",
      category: "programming"
    }
  ];

  const filteredCertificates = filter === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  const openModal = (cert) => {
    setActiveCertificate(cert);
  };

  const closeModal = () => {
    setActiveCertificate(null);
  };

  return (
    <section  id="certifications" className="certificates-section">
      <div className="certificates-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="certificates-container">
        <h2 className="section-title">MY CERTIFICATIONS</h2>
        <p className="section-subtitle">Proof of my continuous learning journey</p>

        <div className="filter-buttons">
          <button 
            className={filter === "all" ? "active" : ""} 
            onClick={() => setFilter("all")}
          >
            All Certificates
          </button>
          <button 
            className={filter === "programming" ? "active" : ""} 
            onClick={() => setFilter("programming")}
          >
            Programming
          </button>
          <button 
            className={filter === "web" ? "active" : ""} 
            onClick={() => setFilter("web")}
          >
            Web Development
          </button>
          <button 
            className={filter === "ai" ? "active" : ""} 
            onClick={() => setFilter("ai")}
          >
            AI & ML
          </button>
          <button 
            className={filter === "blockchain" ? "active" : ""} 
            onClick={() => setFilter("blockchain")}
          >
            Blockchain
          </button>
        </div>

        <div className="certificates-grid">
          {filteredCertificates.map((certificate, index) => (
            <div 
              key={certificate.id} 
              className="certificate-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(certificate)}
            >
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.title} />
                <div className="certificate-overlay">
                  <div className="overlay-content">
                    <h3>{certificate.title}</h3>
                    <p>Click to view details</p>
                  </div>
                </div>
              </div>
              <div className="certificate-info">
                <h3>{certificate.title}</h3>
                <p className="issuer">{certificate.issuer}</p>
                <p className="date">{certificate.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeCertificate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <div className="modal-certificate">
              <div className="modal-image">
                <img src={activeCertificate.image} alt={activeCertificate.title} />
              </div>
              <div className="modal-details">
                <h2>{activeCertificate.title}</h2>
                <p className="issuer">Issued by: {activeCertificate.issuer}</p>
                <p className="date">Completed on: {activeCertificate.date}</p>
                {activeCertificate.hours && (
                  <p className="hours">Duration: {activeCertificate.hours}</p>
                )}
                <a 
                  href={activeCertificate.verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="verify-button"
                >
                  Verify Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;