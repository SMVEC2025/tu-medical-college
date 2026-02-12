import React, { use, useEffect, useRef, useState } from 'react';
import MenuItems from './MenuItems';
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const lastScrollY = useRef(0);
  const [lightNavbar, setLightNavbar] = useState(false)
  const [scrollDown, setScrollDown] = useState(false)
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (location.pathname === "/") {
      if (currentScroll > 100) {
        setLightNavbar(true);

        if (currentScroll > lastScrollY.current) {
          setScrollDown(true); // Scrolling down
        } else {
          setScrollDown(false); // Scrolling up
        }
      } else {
        setLightNavbar(false);
        setScrollDown(false);
      }
    } else {
      setLightNavbar(true);
      setScrollDown(false);
    }


    lastScrollY.current = currentScroll;
  };
  useEffect(() => {
    if (location.pathname != "/") {
      setLightNavbar(true);
      setScrollDown(false);
    } else {
      handleScroll()
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, setLightNavbar, setScrollDown])



  const topLinks = [
    { title: 'Contact us', link: '/contact-us' },
    { title: 'Hospital', link: '/hospital' },
    { title: 'MARB NMC Pro-Forma', link: '/pro-fomra' },
    { title: 'MSR CLAUSE B.1.11', link: '/mci-detail' },
    { title: 'Gallery', link: '/gallery' },
    { title: 'Career', link: '/career' },
    { title: 'Research', link: '/research' },
    { title: 'Infrastructure', link: '/infrastructure' },

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
            { title: 'Gender Harassment Committee', link: '/committee/gender-harasement' },
            { title: 'Anti Ragging Committee', link: '/committee/anti-ragging' },
            { title: 'Curriculum Committee - 2025', link: '/committee/curriculum-committee' },
            { title: 'hospital Infection Control Committee', link: '/committee/hospital-infection-control' },
            { title: 'Pharmacovigilance Committee', link: '/committee/Pharmacovigilance' },
            { title: 'Ethics committee', link: '/committee/ethics-committee' },
            { title: 'Research committee', link: '/committee/research-committee' },
            { title: 'College council', link: '/committee/college-council' },

          ],
        },
        {
          title: 'Fee Structure',
          submenu: [
            { title: 'Tuition Fee', link: '/fee/tuition-fee' },
            { title: 'Hostel Fee', link: '/fee/hostel-fee' },

          ],
        },

      ],
    },
    {
      title: 'Courses',
      submenu: [
        { title: 'MBBS', link: '/courses-mbbs' },
      ],
    },
    {
      title: 'Departments',
      //   submenu: [
      //     { title: 'Pre Clinical', link: '/departments/physics' },
      //     { title: 'Para clinical', link: '/departments/chemistry' },
      //     { title: 'clinical', link: '/departments/chemistry' },
      //   ],
      submenu: [
        { title: 'Anatomy', link: '/department/anatomy' },
        { title: 'BioChemistry', link: '/department/bio-chemistry' },
        { title: 'Physiology', link: '/department/physiology' },
        { title: 'Pharmacology', link: '/department/pharmacology' },
        { title: 'Pathology', link: '/department/pathology' },
        { title: 'Forensic Medicine', link: '/department/forensic-medicine' },
        { title: 'General Medicine', link: '/department/general-medicine' },
        { title: 'pediatrics', link: '/department/pediatrics' },
        { title: 'Dermatology', link: '/department/dermatology' },
        { title: 'Psychiatry', link: '/department/psychiatry' },
        { title: 'Anaesthesiology', link: '/department/anaesthesiology' },
        { title: 'general surgery', link: '/department/general-surgery' },
        { title: 'Obstetrics & Gynaecology', link: '/department/obstetrics' },
        { title: 'Oto-Rhino-Laryngology', link: '/department/otorhinolaryngology' },
        { title: 'orthopedics', link: '/department/orthopedics' },
        { title: 'Ophthalmology', link: '/department/ophthalmology' },
        { title: 'Radio-diagnosis', link: '/department/radio-diagnosis' },
        { title: 'Dentistry', link: '/department/dentistry' },
        // { title: 'Radio-Therapy', link: '/department/radio-therapy' }, removed on 12/2/26 ffrom sugestion of TU medical college
        { title: 'Physical medicine & Rehabilitation', link: '/department/physical-medicine-rehabilitation' },
        { title: 'Diagnostic Services', link: '/department/diagnostic' },
        { title: 'Community medicine', link: '/department/community-medicine' },
        { title: 'Microbiology', link: '/department/microbiology' },
        { title: 'Emergency medicine', link: '/department/emergency-medicine' },
        { title: 'Pulmonory medicine', link: '/department/pulmonory-medicine' },




        // { title: 'Radiology', link: '/department/radiology' },
        // { title: 'Opthalmology', link: '/department/opthalmology' },
      ],
    },
    {
      title: 'Admin & Faculty Details',
      submenu: [
        // { title: 'Admin', link: '/admin' },
        { title: 'Dean & MS', link: '/dean' },
        { title: 'non clinical', link: '/non-clinical-faculty' },
        { title: 'clinical', link: '/clinical-faculty' },
      ],
    },
  ];

  console.log("lightNavbar", lightNavbar)
  console.log("scrollDown", scrollDown)

  return (
    <>
      <div className={`nav-parent`}>
        <div className="top-header">
          <div className="top-links">

            <a href=''>+91 8925969546</a>
          </div>
          <div className="top-links">
            {topLinks.map((item, idx) => (
              <a href={item.link} key={idx}>{item.title}</a>
            ))}
          </div>
        </div>

        <nav className={`main-navbar ${lightNavbar ? 'light' : 'dark'} ${scrollDown ? "scrolling" : "stopscrolling"}`}>
          <div className="navbar-left">
            <img src="/assets/images/logo/logo-full.png" alt="logo" className="logo-img" />


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
