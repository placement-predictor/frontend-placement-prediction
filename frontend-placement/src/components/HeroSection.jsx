import React from "react";
import "../css/HeroSection.css";
import girl from "../assets/94773414d9ad297912557ec5bb06d5aa7df78e6d.jpg"; // replace with your image
import smallgirl from "../assets/28c12bed36b31dc90ca341d9f19add1923366c46.png"
function HeroSection() {
  return (
    <div className="hero-wrapper">
      <header className="top-bar">
        <div className="logo"><img src={girl} alt="Person" className="image"/></div>
        <div className="auth-buttons">
          <button className="signup">Sign up</button>
          <button className="login">Log in</button>
        </div>
      </header>

      <main className="hero">
        <div className="text-section">
          <p className="tagline">Optimize Your Resume. Maximize Your Potential</p>
          <h1><span>Accelerate</span> your hiring process</h1>

          <div className="how-it-works">
            <h2>📌 How it works?</h2>
            <ul>
              <li>Upload resume for ATS-based analysis</li>
              <li>Check placement probability</li>
              <li>Get personalized improvement suggestions</li>
              <li>View top-performing student resumes</li>
              <li>Re-upload to track improvements over time</li>
            </ul>
          </div>
        </div>

        <div className="image-section">
          <img src={smallgirl} alt="Person" className="smallgirl" />
          <div className="blob"></div>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
