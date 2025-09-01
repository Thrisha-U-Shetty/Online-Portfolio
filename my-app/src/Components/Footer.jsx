import React from "react";

const Footer = () => {
  return (
  <section id="contact">
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Thrisha U Shetty</h3>
            <div className="contact-details">
              <p>+91 6364747450</p>
              <p>thrishashetty009@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  </section>
   
  );
};

export default Footer;