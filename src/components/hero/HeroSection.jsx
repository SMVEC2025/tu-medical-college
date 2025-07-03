import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <video className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/assets/video/frame.webp"
      >
        <source src='/assets/video/hero.mp4' type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="hero-overlay">
        <h1>Welcome To Takshashila Medical College</h1>
        <p>
          At Takshashila Medical College Hospital, we are more than a center of learnin we are a movement towards transforming healthcare.
        </p>
        <a href="/about-us" className="admission-btn hover-text-white">View More</a>
      </div>
    </section>
  );
};

export default HeroSection;
