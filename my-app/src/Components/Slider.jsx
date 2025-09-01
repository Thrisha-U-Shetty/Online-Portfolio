import React, { useState, useEffect } from "react";

// Import your dashboard icons (replace with actual imports)
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import hackerrankIcon from "../assets/hackerrank.png";
import leetcodeIcon from "../assets/leetcode.png";
import freecodecampIcon from "../assets/freecodecamp.png";
import infosysIcon from "../assets/infosys.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const dashboards = [
    {
      id: 1,
      title: "GitHub",
      description: "Check out my code repositories, projects, and contributions",
      icon: githubIcon,
      url: "https://github.com/Thrisha-U-Shetty",
      stats: "50+ repositories, 100+ contributions",
      color: "#24292e"
    },
    {
      id: 2,
      title: "LinkedIn",
      description: "View my professional profile, experience, and network",
      icon: linkedinIcon,
      url: "https://www.linkedin.com/in/thrisha-u-shetty-1a5059307/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      stats: "58 connections",
      color: "#0a66c2"
    },
    {
      id: 3,
      title: "HackerRank",
      description: "See my coding challenges and problem-solving skills",
      icon: hackerrankIcon,
      url: "https://www.hackerrank.com/profile/thrishashetty009",
      stats: "3 badges and 1 certificate",
      color: "#00ea64"
    },
    {
      id: 4,
      title: "LeetCode",
      description: "Explore my algorithm solutions and coding practice",
      icon: leetcodeIcon,
      url: "https://leetcode.com/progress/",
      stats: "50 days badge 2025, 62 problems",
      color: "#ffa116"
    },
    {
      id: 5,
      title: "freeCodeCamp",
      description: "Review my completed certifications and projects",
      icon: freecodecampIcon,
      url: "https://www.freecodecamp.org/fccf06dd3ea-bb2d-43b6-a9d4-b37fe6db2f1a",
      stats: "2 certifications, 300+ hours",
      color: "#0a0a23"
    },
    {
      id: 6,
      title: "Infosys Springboard",
      description: "See my completed courses and learning progress",
      icon: infosysIcon,
      url: "https://infyspringboard.onwingspan.com/web/en/app/profile/dashboard",
      stats: "6 courses completed, 100% progress",
      color: "#1380b3"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === dashboards.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, dashboards.length]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === dashboards.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? dashboards.length - 1 : currentSlide - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="platforms" className="slider-section">
      <div className="slider-container">
        <h2 className="slider-title">MY PROFESSIONAL DASHBOARDS</h2>
        <p className="slider-subtitle">Explore my work across different platforms</p>

        <div 
          className="slider-wrapper"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="slider">
            {dashboards.map((dashboard, index) => (
              <div
                key={dashboard.id}
                className={
                  index === currentSlide
                    ? "slide active"
                    : index === currentSlide - 1 || 
                      (currentSlide === 0 && index === dashboards.length - 1)
                    ? "slide previous"
                    : index === currentSlide + 1 ||
                      (currentSlide === dashboards.length - 1 && index === 0)
                    ? "slide next"
                    : "slide"
                }
              >
                <div 
                  className="dashboard-card"
                  style={{ "--accent-color": dashboard.color }}
                >
                  <div className="dashboard-icon">
                    <img src={dashboard.icon} alt={dashboard.title} />
                  </div>
                  <h3>{dashboard.title}</h3>
                  <p>{dashboard.description}</p>
                  <div className="dashboard-stats">
                    <span>{dashboard.stats}</span>
                  </div>
                  <a
                    href={dashboard.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dashboard-button"
                  >
                    Visit My Profile
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-control prev" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="slider-control next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>

        <div className="slider-indicators">
          {dashboards.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? "indicator active" : "indicator"}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;