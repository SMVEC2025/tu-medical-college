import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <video className="bg-video" autoPlay muted loop>
        <source src='https://takshashilauniv.ac.in//wp-content//uploads//2025//01//Takshashila-Banner.mp4' type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="hero-overlay">
        <h1>Welcome To Takshashila Medical College</h1>
        <p>
          Start your journey towards excellence in healthcare, medical education,
          and global opportunities – all in one institution.
        </p>
        <a href="#admission" className="admission-btn">View More</a>
      </div>
    </section>
  );
};

export default HeroSection;
