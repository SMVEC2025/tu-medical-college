// src/pages/hospital/Hospital.jsx
import React from 'react';
import './Hospital.css';
import Navbar from '../../components/Navbar';
import FooterOne from '../../components/FooterOne';
import Breadcrumb from '../../components/Breadcrumb';

function Hospital() {

  const medicalSpecialities = [
    {
      title: 'General Medicine',
      description: 'Our general medicine department provides comprehensive care for patients with various medical conditions.',
    },
    {
      title: 'Cardiology',
      description: 'Our cardiology department provides specialized care for patients with heart-related conditions.',
    },
    {
      title: 'Neurology',
      description: 'Our neurology department provides specialized care for patients with brain and nervous system-related conditions.',
    },
  ];

  const surgicalSpecialities = [
    {
      title: 'General Surgery',
      description: 'Our general surgery department provides comprehensive care for patients requiring surgical interventions.',
    },
    {
      title: 'Orthopedic Surgery',
      description: 'Our orthopedic surgery department provides specialized care for patients with bone and joint-related conditions.',
    },
    {
      title: 'Neurosurgery',
      description: 'Our neurosurgery department provides specialized care for patients with brain and nervous system-related conditions requiring surgical interventions.',
    },
  ];

  const diagnosticServices = [
    {
      title: 'Laboratory Services',
      description: 'Our laboratory services provide accurate and timely diagnostic results for patients.',
    },
    {
      title: 'Imaging Services',
      description: 'Our imaging services provide high-quality diagnostic images for patients.',
    },
    {
      title: 'Pathology Services',
      description: 'Our pathology services provide accurate and timely diagnostic results for patients.',
    },
  ];

  const facilities = [
    {
      title: 'Emergency Department',
      description: 'Our emergency department provides 24x7 care for patients requiring immediate attention.',
    },
    {
      title: 'Pharmacy',
      description: 'Our pharmacy provides 24x7 access to medications for patients.',
    },
    {
      title: 'Cafeteria',
      description: 'Our cafeteria provides 24x7 access to food and beverages for patients and visitors.',
    },
  ];

  return (
    <>
      
      
      <div className='hospital-container'>
        <Breadcrumb title={"Hospital"}/>
        <div className="hospital-page">
          <section className="scope-of-services">
            <h2>Scope of Hospital Services</h2>
            <p>
              Our hospital provides a wide range of medical services to cater to the needs of our patients. From general medicine to specialized care, we have a team of experienced doctors and nurses who are dedicated to providing the best possible care.
            </p>
          </section>

          <section className="medical-specialities">
            <h2>Medical Specialities</h2>
            <ul>
              {medicalSpecialities.map((speciality, index) => (
                <li key={index}>
                  <h3>{speciality.title}</h3>
                  <p>{speciality.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="surgical-specialities">
            <h2>Surgical Specialities</h2>
            <ul>
              {surgicalSpecialities.map((speciality, index) => (
                <li key={index}>
                  <h3>{speciality.title}</h3>
                  <p>{speciality.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="diagnostic-services">
            <h2>Diagnostic Services</h2>
            <ul>
              {diagnosticServices.map((service, index) => (
                <li key={index}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="facilities">
            <h2>24x7 Facilities</h2>
            <ul>
              {facilities.map((facility, index) => (
                <li key={index}>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      
    </>
  );
}

export default Hospital;