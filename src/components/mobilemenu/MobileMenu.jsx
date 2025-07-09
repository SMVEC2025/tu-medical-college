import React, { useState } from 'react';
import './MobileMenu.css';

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
  { title: 'Hospital', link: '/hospital' },
  {
    title: 'Departments',
    submenu: [
     { title: 'Anatomy', link: '/department/anatomy' },
        { title: 'BioChemistry', link: '/department/bio-chemistry' },
        { title: 'Physiology', link: '/department/physiology' },
        { title: 'Pharmacology', link: '/department/pharmacology' },
        { title: 'Pathology', link: '/department/pathology' },
        { title: 'Forensic Medicine', link: '/department/forensic-medicine' },
        { title: 'General Medicine', link: '/department/general-medicine' },
        { title: 'Pediatrics', link: '/department/pediatrics' },
        { title: 'Dermatology', link: '/department/dermatology' },
        { title: 'Psychiatry', link: '/department/psychiatry' },
        { title: 'Anaesthesiology', link: '/department/anaesthesiology' },
        { title: 'General surgery', link: '/department/general-surgery' },
        { title: 'Obstetrics & Gynaecology', link: '/department/obstetrics' },
        { title: 'Oto-Rhino-Laryngology', link: '/department/otorhinolaryngology' },
        { title: 'Orthopedics', link: '/department/orthopedics' },
        { title: 'Ophthalmology', link: '/department/ophthalmology' },
        { title: 'Radio-diagnosis', link: '/department/radio-diagnosis' },
        { title: 'Dentistry', link: '/department/dentistry' },
        { title: 'Radio-Therapy', link: '/department/radio-therapy' },
        { title: 'Physical Medicine & Rehabilitation', link: '/department/physical-medicine-rehabilitation' },
        { title: 'Diagnostic Services', link: '/department/diagnostic' },
    ],
  },
  {
    title: 'Admin & Faculty Details',
    submenu: [
      { title: 'Admin', link: '/admin' },
      { title: 'Dean', link: '/dean' },
      { title: 'non clinical', link: '/non-clinical-faculty' },
      { title: 'clinical', link: '/clinical-faculty' },
    ],
  },
  { title: 'Contact us', link: '/contact-us' },
  {
    title: 'others',
    submenu: [
      { title: 'MARB NMC Pro-Forma', link: '/pro-fomra' },
      { title: 'MSR CLAUSE B.1.11', link: '/mci-detail' },
      { title: 'Research', link: '/research' },
      { title: 'Gallery', link: '/gallery' },
      { title: 'Career', link: '/career' },
    ],
  },];

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const hasSubmenu = !!item.submenu;

  return (
    <div className="menu-item">
      <div className="menu-title" onClick={() => setOpen(!open)}>
        {item.link ? (
          <a href={item.link}>{item.title}</a>
        ) : (
          <span>{item.title}</span>
        )}
        {hasSubmenu && <span className="arrow">{open ? '-' : '+'}</span>}
      </div>

      {hasSubmenu && open && (
        <div className="submenu">
          {item.submenu.map((sub, idx) => (
            <MenuItem item={sub} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='mobile-menu-main'>
        <img src="/assets/images/logo/logo-full.png" alt="" />

      </div>
      <button className="menu-btn" onClick={() => setMenuOpen(true)}>☰ </button>

      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="side-header">
          <img src="/assets/images/logo/logo-full.png" alt="" />
          <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="menu-list">
          {menu.map((item, index) => (
            <MenuItem item={item} key={index} />
          ))}
        </div>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
};

export default MobileMenu;
