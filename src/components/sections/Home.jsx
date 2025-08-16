import React from "react";
import { Download } from "lucide-react";
import "./Home.css";

const personalInfo = {
  title: "Junior Software Developer",
  description:
    "Junior Software Developer | Building Intelligent, User-Focused Digital Solutions | IBM-Certified in AI, Agile, Cybersecurity and Project Management | Aspiring IT Project Leader",
  signature: "Wanga Thagwana",
};

const Home = () => {
  return (
    <div className="home-section">

      {/* Main Content */}
      <div className="home-content">
        {/* Center - Profile Photo */}
        <div className="profile-section">
          <div className="profile-frame">
            <div className="frame-corners">
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>
            </div>
            <img
              src="/assets/IMG-20250319-WA0133.jpg"
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>

        {/* Right Side - Title and Description */}
        <div className="info-section">
          <h1 className="main-title">{personalInfo.title}</h1>
          <div className="title-underline"></div>
          <p className="description">{personalInfo.description}</p>
          <div className="signature">{personalInfo.signature}</div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down-indicator">
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Scroll Down</p>
      </div>
    </div>
  );
};

export default Home;
