import React from "react";
import blockchain from "../assets/blockchain.jpg";
import agriculture from "../assets/agriculture.jpg";
import jobportal from "../assets/jobportal.jpg";
import chatbot from "../assets/chatbot.jpg";
import voting from "../assets/voting.jpg";
import boundary from "../assets/boundary.jpg";

const projects = [
  {
    title: "E-Certify: Blockchain Based Digital Certificate Verification",
    description:
      "Developed a secure, decentralized platform that enables academic institutions and professionals to issue and manage tamper-proof digital certificates using blockchain technology.",
    image: blockchain,
    github: "https://github.com/Thrisha-U-Shetty/E-certify",
  },
  {
    title: "Agriculture Management System - DBMS Project",
    description:
      "Developed a web-based application for managing agricultural produce, allowing farmers to update details of fruits and vegetables grown, buyers to place orders, and receive real-time updates.",
    image: agriculture,
    github: "https://github.com/your-username/agriculture-system",
  },
  {
    title: "JobPath – A Web Portal Connecting Job Seekers with Recruiters",
    description:
      "Built a Job Portal Management System to streamline job searching and recruitment with features like job listings and application tracking.",
    image: jobportal,
    github: "https://github.com/Thrisha-U-Shetty/mini-project",
  },
  {
    title: "AI Travel and Hospitality Chatbot",
    description:
      "Developed the chatbot using Botpress and OpenAI ChatGPT API, enabling seamless customer interaction with travel agencies, hotels, and tourism platforms.",
    image: chatbot,
    github: "https://github.com/your-username/chatbot",
  },
  {
    title: "Online Voting System",
    description:
      "Developed a web-based Online Voting System to simplify election management through monitoring, authentication, and secure voting for students.",
    image: voting,
    github: "https://github.com/Thrisha-U-Shetty/e-voting-with-django",
  },
  {
    title: "Boundary Detection using Python",
    description:
      "Implemented image processing techniques in Python to identify object outlines and distinct regions within an image using OpenCV and NumPy.",
    image: boundary,
    github: "https://github.com/Thrisha-U-Shetty/Boundary-Detection",
  },
];

const Projects = () => {
  return (
     <section id="projects" className="projects-section" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
      {/* Gradient Background */}
      <div className="gradient-bg"></div>

      <div className="projects-container">
        <h2 className="project-text">MY PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="button-container">
                  <button onClick={() => window.open(project.github, "_blank")}>
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;