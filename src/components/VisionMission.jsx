import React from 'react';
import './styles/VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-mission section" id="vision">
      <div className="container">
        <h2 className="section-title">Our Vision & Mission</h2>
        <div className="vision-mission-content">
          <div className="vision">
            <div className="icon-box">
              <div className="icon">👁️</div>
            </div>
            <h3>Our Vision</h3>
            <p>To become a globally recognized medical institution committed to academic excellence, clinical expertise, and community service.</p>
          </div>
          <div className="mission">
            <div className="icon-box">
              <div className="icon">🎯</div>
            </div>
            <h3>Our Mission</h3>
            <ul>
              <li>To impart world-class medical education that integrates innovation, ethics, and empathy.</li>
              <li>To foster research that addresses local and global health challenges.</li>
              <li>To provide affordable, accessible, and advanced healthcare to all.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;