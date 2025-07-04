import React from "react";
import "../css/HeroSection.css";
import girl from "../assets/94773414d9ad297912557ec5bb06d5aa7df78e6d.jpg"; // replace with your image
import smallgirl from "../assets/28c12bed36b31dc90ca341d9f19add1923366c46.png";
import smallgirlstudying from "../assets/58d12c86e7d9b5f3a738f02f804b16c2dbbfbd99.jpg";

function HeroSection() {
  return (
    <div className="hero-wrapper">
      <header className="top-bar">
        <div className="logo">
          <img src={girl} alt="Logo" className="image" />
        </div>
        <div className="auth-buttons">
          <button className="signup">Sign up</button>
          <button className="login">Log in</button>
        </div>
      </header>

      <main className="hero">
        <div className="text-section">
          <p className="tagline">Optimize Your Resume. Maximize Your Potential</p>
          <h1>
            <span>Accelerate</span> your hiring process
          </h1>

          <div className="how-it-works">
            <div className="how-it-works-div">
              <h2>How it works?</h2>
            </div>
            <ul>
              <li>Upload resume for ATS-based analysis</li>
              <li>Check placement probability</li>
              <li>Get personalized improvement suggestions</li>
              <li>View top-performing student resumes</li>
              <li>Re-upload to track improvements over time</li>
            </ul>

            {/* Moved small girl studying image here */}
            <div className="small-girl-studying-div">
              <img
                src={smallgirlstudying}
                alt="Person studying"
                className="smallgirlstudying"
              />
             
            </div>
          </div>
        </div>

        <div className="image-section">
           <div className="circle-upper" ></div>
           <div className="circle-upper1" ></div>
              <div className="circle-lower1"></div>
              <div className="circle-lower2"></div>
          <img src={smallgirl} alt="Person" className="smallgirl" />
          <div className="blob"></div>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
