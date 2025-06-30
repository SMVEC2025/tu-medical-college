import React from 'react';
import './DeanDetails.css';
import Navbar from '../Navbar';
import FooterThree from '../FooterThree';
import Breadcrumb from '../Breadcrumb';

const DeanDetails = () => {
  const deans = [
    {
      title: 'Dean',
      name: 'Dr. Jayasree.M',
      qualifications: 'DNB (OBG)',
      address: `Takshashila University, Ongur,
Tindivanam Taluk, Villupuram District,
Tamil Nadu - 604305, India`,
      phone: '04147-234515 Extn-2177',
      email: 'deantmch@takshashilauniv.ac.in',
    },
    {
      title: 'Medical Superintendent',
      name: 'Dr. Prasath',
      qualifications: 'MD Anaesthesia',
      address: `Takshashila University, Ongur,
Tindivanam Taluk, Villupuram District,
Tamil Nadu - 604305, India`,
      phone: '04147-234515 Extn-2188',
      email: 'ms@takshashilauniv.ac.in',
    },
  ];

  return (
   <>
   <Navbar/>
   <Breadcrumb />
    <div className="dean-container">
      {deans.map((dean, index) => (
        <div className="dean-card" key={index}>
          <h3>Details of {dean.title}</h3>
          <div className="dean-info">
            <p><strong>Name:</strong> {dean.name}</p>
            <p><strong>Qualifications:</strong> {dean.qualifications}</p>
            <p><strong>Complete Address:</strong><br />{dean.address}</p>
            <p><strong>Telephone Number:</strong> {dean.phone}</p>
            <p><strong>Email ID:</strong> <a href={`mailto:${dean.email}`}>{dean.email}</a></p>
          </div>
        </div>
      ))}
    </div>
    <FooterThree/>
   </>
  );
};

export default DeanDetails;
