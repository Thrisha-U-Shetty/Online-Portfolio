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
  },
  {
    title: "Agriculture Management System - DBMS Project",
    description:
      "Developed a web-based application for managing agricultural produce, allowing farmers to update details of fruits and vegetables grown, buyers to place orders, and receive real-time updates.",
    image:agriculture,
  },
  {
    title: "JobHunt – A Web Portal Connecting Job Seekers with Recruiters",
    description:
      "Built a Job Portal Management System to streamline job searching and recruitment with features like job listings and application tracking.",
    image:jobportal,
  },
  {
    title: "AI Travel and Hospitality Chatbot",
    description:
      "Developed the chatbot using Botpress and OpenAI ChatGPT API, enabling seamless customer interaction with travel agencies, hotels, and tourism platforms.",
    image:chatbot,
  },
  {
    title: "Online Voting System",
    description:
      "Developed a web-based Online Voting System to simplify election management through monitoring, authentication, and secure voting for students.",
    image:voting,
  },
  {
    title: "Boundary Detection using Python",
    description:
      "Implemented image processing techniques in Python to identify object outlines and distinct regions within an image using OpenCV and NumPy.",
    image:boundary,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
