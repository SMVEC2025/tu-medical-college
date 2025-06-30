import React from 'react';
import './TakshashilaHome.css';

const HomePage = () => {
  return (
    <div className="tak-main">
      <header className="tak-header">
        <h1>Takshashila Medical College & Hospital</h1>
        <p>Shaping Healthcare. Empowering Healers. Serving Humanity.</p>
      </header>

      <section className="tak-intro">
        <p>
          At Takshashila Medical College & Hospital, we are more than a center of learning—we are a movement towards transforming healthcare. Located in the heart of Tamil Nadu, our institution is dedicated to nurturing future-ready doctors, advancing medical research, and delivering compassionate patient care.
        </p>
      </section>

      <section className="tak-vision-mission">
        <div className="tak-box">
          <h2>Our Vision</h2>
          <p>To become a globally recognized medical institution committed to academic excellence, clinical expertise, and community service.</p>
        </div>
        <div className="tak-box">
          <h2>Our Mission</h2>
          <ul>
            <li>To impart world-class medical education that integrates innovation, ethics, and empathy.</li>
            <li>To foster research that addresses local and global health challenges.</li>
            <li>To provide affordable, accessible, and advanced healthcare to all.</li>
          </ul>
        </div>
      </section>

      <section className="tak-services">
        <h2>Hospital Services</h2>
        <p>With a 600+ bedded state-of-the-art teaching hospital, we deliver multidisciplinary care across general medicine, surgery, pediatrics, obstetrics & gynecology, orthopedics, radiology, and more. Our hospital is equipped with:</p>
        <ul>
          <li>24/7 Emergency & Trauma Care</li>
          <li>ICU, NICU, and Dialysis Units</li>
          <li>CT, MRI & Diagnostic Labs</li>
          <li>Pharmacy and Blood Bank Services</li>
        </ul>
      </section>

      <section className="tak-why">
        <h2>Why Choose Us?</h2>
        <div className="tak-grid">
          <div className="tak-card">✅ Experienced Faculty & Clinicians</div>
          <div className="tak-card">✅ Fully Equipped Teaching Hospital</div>
          <div className="tak-card">✅ Research-Driven Learning</div>
          <div className="tak-card">✅ Patient-Centric Approach</div>
          <div className="tak-card">✅ Vibrant Campus Life</div>
        </div>
      </section>

      <footer className="tak-footer">
        <p>© 2025 Takshashila Medical College & Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;