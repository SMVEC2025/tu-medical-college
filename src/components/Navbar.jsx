import React from 'react';
import MenuItems from './MenuItems';

const Navbar = () => {
  const topLinks = [
    { title: 'Contact us', link: '/contact-us' },
    { title: 'Hospital', link: '/hospital' },
    { title: 'MARB NMC Pro-Forma', link: '/pro-fomra' },
    { title: 'MSR CLAUSE B.1.11', link: '/msi-detail' },
    { title: 'Gallery', link: '/gallery' },
    { title: 'Career', link: '/career' },
  ];

  const menu = [
    { title: 'Home', link: '/' },
    { title: 'About us', link: '/about-us' },
    {
      title: 'Academics',
      submenu: [
        {
          title: 'Committee cell',
          submenu: [
            { title: 'GENDER HARASSMENT COMMITTEE', link: '/committee/gender-harasement' },
            { title: 'ANTI RAGGING COMMITTEE', link: '/committee/anti-ragging' },
            { title: 'CURRICULUM COMMITTEE - 2025', link: '/committee/curriculum-committee' },
            { title: 'HOSPITAL INFECTION CONTROL COMMITTEE', link: '/committee/hospital-infection-control' },
            { title: 'PHARMACOVIGILANCE COMMITTEE', link: '/committee/Pharmacovigilance' },
            
          ],
        },

      ],
    },
    { title: 'Infrastructure', link: '/infrastructure' },
    { title: 'Courses', link: '/courses' },
    { title: 'Research', link: '/research' },
    {
      title: 'Departments',
      //   submenu: [
      //     { title: 'Pre Clinical', link: '/departments/physics' },
      //     { title: 'Para clinical', link: '/departments/chemistry' },
      //     { title: 'clinical', link: '/departments/chemistry' },
      //   ],
      submenu: [
        { title: 'Ophthalmology', link: '/department/ophthalmology' },
        // { title: 'general surgery', link: '/departments/chemistry' },
        { title: 'diagnostics', link: '/department/diagnostics' },
        { title: 'orthopedics', link: '/department/orthopedics' },
        { title: 'pediatrics', link: '/department/pediatrics' },
        { title: 'Anaesthesiology', link: '/department/anaesthesiology' },
        { title: 'Dentistry', link: '/department/dentistry' },
        { title: 'Dermatology', link: '/department/dermatology' },
        { title: 'Otorhinolaryngology', link: '/department/otorhinolaryngology' },
        { title: 'General Medicine', link: '/department/general-medicine' },
        { title: 'Obstetrics & Gynaecology', link: '/department/obstetrics' },
        { title: 'Radiology', link: '/department/radiology' },
        { title: 'Psychiatry', link: '/department/psychiatry' },
        { title: 'Opthalmology', link: '/department/opthalmology' },
        { title: 'Forensic Medicine', link: '/department/forensic-medicine' },
        { title: 'Anatomy', link: '/department/anatomy' },
        { title: 'BioChemistry', link: '/department/bio-chemistry' },
        { title: 'Pathology', link: '/department/pathology' },
        { title: 'Pharmacology', link: '/department/pharmacology' },
        { title: 'Physiology', link: '/department/physiology' },
      ],
    },
    { 
      title: 'Admin & Faculty Details',
      submenu: [
        { title: 'Admin', link: '/admin' },
        { title: 'Dean', link: '/dean' },
        { title: 'non clinical', link: '/faculty' },
        { title: 'clinical', link: '/faculty' },
      ],
    },
  ];

  return (
    <>
     <div className='nav-parent'>
       <div className="top-header">
        <div className="top-links">

          <a href=''>+91 94437 69196</a>
        </div>
        <div className="top-links">
          {topLinks.map((item, idx) => (
            <a href={item.link} key={idx}>{item.title}</a>
          ))}
        </div>
      </div>

      <nav className="main-navbar">
        <div className="navbar-left">
          <img src="https://takshashilauniv.ac.in/wp-content/uploads/2025/01/logo-new.png" alt="logo" className="logo-img" />

        </div>

        <ul className="nav-menu">
          {menu.map((item, idx) => (
            <MenuItems key={idx} items={item} />
          ))}
        </ul>
      </nav>
     </div>
    </>
  );
};

export default Navbar;
