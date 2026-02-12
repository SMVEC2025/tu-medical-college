// src/pages/hospital/Hospital.jsx
import React from 'react';
import './Hospital.css';
import Navbar from '../../components/Navbar';
import FooterOne from '../../components/FooterOne';
import Breadcrumb from '../../components/Breadcrumb';
import { Ambulance, AudioLines, Bed, BedSingle, Cross, Tablets, TestTubeDiagonal } from 'lucide-react';

function Hospital() {

  const medicalSpecialities = [
    {
      title: 'Anesthesiology',
      description: 'Our anesthesiology department ensures safe and effective anesthesia care for surgical and diagnostic procedures, with constant monitoring for optimal patient safety and comfort.',
    },
    {
      title: 'Dermatology / Chemical Peeling / PRP',
      description: 'Our dermatology unit offers expert care for skin, hair, and nail conditions, including cosmetic procedures like chemical peeling and PRP therapy for skin rejuvenation and hair restoration.',
    },
    {
      title: 'General Medicine',
      description: 'Our general medicine department provides comprehensive diagnosis and treatment for a wide range of adult health conditions, including chronic diseases, infections, and lifestyle disorders.',
    },
    {
      title: 'Pediatrics - Surfactant Therapy / NICU / PICU',
      description: 'Our pediatrics department offers specialized care for newborns and children, including advanced treatments like surfactant therapy and critical care in well-equipped NICU and PICU facilities.',
    },
    {
      title: 'Psychiatry - De-addiction Clinic / ECT',
      description: 'Our psychiatry department provides compassionate care for mental health issues, with specialized services including de-addiction programs and Electroconvulsive Therapy (ECT) for treatment-resistant conditions.',
    },
    {
      title: 'Radiology - CT / Doppler / USG / X-Ray',
      description: 'Our radiology department offers a full range of imaging services including CT scans, Doppler studies, ultrasonography (USG), and X-rays for accurate and timely diagnosis.',
    }
  ];

  const surgicalSpecialities = [
    {
      title: 'Dentistry',
      description: 'Our dentistry department offers advanced surgical procedures including root canal treatment and dental implants, ensuring long-term oral health and functional restoration.',
    },
    {
      title: 'ENT',
      description: 'Our ENT specialists perform intricate surgical procedures such as Functional Endoscopic Sinus Surgery (FESS) and mastoidectomy to treat chronic sinus and ear conditions effectively.',
    },
    {
      title: 'General Surgery',
      description: 'Our general surgery unit specializes in minimally invasive procedures including endoscopy and laparoscopy for accurate diagnosis and treatment with quicker recovery.',
    },
    {
      title: 'Obstetrics and Gynaecology',
      description: 'We offer advanced surgical care for infertility, high-risk pregnancies, and laparoscopic gynecological procedures, ensuring safe and comprehensive women’s health services.',
    },
    {
      title: 'Ophthalmology',
      description: 'Our ophthalmology team performs cataract surgeries and corrective procedures for refractive errors, using modern techniques to restore and enhance vision.',
    },
    {
      title: 'Orthopaedics',
      description: 'Our orthopaedic department provides specialized surgeries including spine procedures, arthroscopy, and total joint replacements for improved mobility and pain relief.',
    }
  ];

  const diagnosticServices = [
    {
      title: 'MRI',
      description: 'MRI offers advanced, high-resolution imaging for accurate and early diagnosis across a wide range of medical conditions. With state-of-the-art technology and expert radiologists, we ensure safe, precise, and patient-centric imaging care',
    },
    {
      title: '2D Echo',
      description: 'Our 2D Echo service offers precise cardiac imaging to assess heart structure and function for early diagnosis and management of heart conditions.',
    },
    {
      title: 'Audiometry',
      description: 'Our audiometry tests evaluate hearing ability and detect any hearing impairments, supporting accurate ENT diagnosis and treatment.',
    },
    {
      title: 'CT Scan',
      description: 'We provide advanced CT scan imaging for detailed cross-sectional views of the body, aiding in quick and accurate diagnosis of various conditions.',
    },
    {
      title: 'Color Doppler',
      description: 'Our Color Doppler service visualizes blood flow through vessels, helping diagnose blockages, clots, or vascular abnormalities.',
    },
    {
      title: 'ECG/EEG',
      description: 'We offer ECG and EEG tests to monitor heart rhythms and brain activity, essential for diagnosing cardiac and neurological disorders.',
    },
    {
      title: 'Holter Monitoring',
      description: 'Our Holter monitoring service tracks heart activity over 24-48 hours to detect irregular heart rhythms and cardiac anomalies.',
    },
    {
      title: 'Mammography',
      description: 'Our digital mammography provides early detection of breast abnormalities and is essential for breast cancer screening and care.',
    },
    {
      title: 'Ultrasound',
      description: 'We offer high-resolution ultrasound imaging to assess internal organs, pregnancy progress, and other medical conditions non-invasively.',
    },
    {
      title: 'X-Ray',
      description: 'Our X-ray services deliver clear radiographic images to identify fractures, infections, or abnormalities in bones and soft tissues.',
    },
    {
      title: 'Laboratory Services - Biochemistry',
      description: 'Our biochemistry lab provides accurate blood and body fluid analyses to evaluate organ function, metabolic health, and disease markers.',
    },
    {
      title: 'Laboratory Services - Microbiology',
      description: 'Our microbiology services identify infectious agents like bacteria, viruses, and fungi to guide effective antimicrobial treatment.',
    },
    {
      title: 'Laboratory Services - Pathology',
      description: 'Our pathology lab offers detailed tissue analysis and cytology for accurate diagnosis of diseases, including cancers and chronic conditions.',
    }
  ];



  const facilities = [
    {
      title: 'Accident and Emergency Unit',
      icon: <Cross />,
      description: 'Our 24x7 Accident and Emergency Unit is equipped to handle trauma, accidents, and critical medical conditions with rapid response and expert emergency care.',
    },
    {
      title: 'Ambulance',
      icon: <Ambulance />,
      description: 'We offer round-the-clock ambulance services with trained medical personnel and advanced life-support systems for safe and timely patient transport.',
    },
    {
      title: 'Laboratory Service',
      icon: <TestTubeDiagonal />,
      description: 'Our fully automated laboratory operates 24x7, providing accurate and timely diagnostic testing in biochemistry, microbiology, pathology, and more.',
    },
    {
      title: 'Radiology Service',
      icon: <AudioLines />,
      description: 'Our 24x7 radiology services include X-rays, CT scans, ultrasounds, and Doppler studies, ensuring prompt imaging support for emergency and inpatient care.',
    },
    {
      title: 'Intensive Care Unit (ICU)',
      icon: <Bed />,
      description: 'Our ICU is equipped with advanced monitoring and life-support systems, offering critical care for patients with life-threatening conditions under continuous specialist supervision.',
    },
    {
      title: 'Medical-ICU, Surgical-ICU, Paediatric-ICU, Neonatal-ICU and Respiratory ICU',
      icon: <BedSingle />,
      description: 'We offer specialized ICUs tailored to patient needs—Medical ICU, Surgical ICU, Paediatric ICU, Neonatal ICU (NICU), and Respiratory ICU—each managed by skilled critical care teams.',
    },
    {
      title: 'Pharmacy',
      icon: <Tablets />,
      description: 'Our 24x7 in-house pharmacy ensures uninterrupted availability of essential medicines and surgical supplies, supporting both emergency and inpatient care.',
    }
  ];

  const otherFacilities = [
    {
      title: '10 Ultra-Modern Operation Theaters with Laminar Flow',
      description: 'Our facility houses 10 state-of-the-art operation theaters equipped with laminar airflow systems to maintain a sterile environment and reduce infection risk during surgeries.',
    },
    {
      title: 'Normal and Caesarean delivery free of cost',
      description: 'We offer both normal and caesarean delivery services completely free of cost, ensuring safe, compassionate, and expert maternity care for mothers and newborns with continuous medical supervision.',
    },
    {
      title: 'Free Food and Accommodation',
      description: 'We offer free nutritious meals and clean accommodation for inpatients and their attendants to ensure comfort and well-being during hospital stays.',
    },
    {
      title: 'Medical Care at a Subsidized Rate',
      description: 'Our hospital is committed to affordability by offering high-quality medical services at subsidized rates, making healthcare accessible to all sections of society.',
    },
    {
      title: 'Telephonic Feedback System',
      description: 'We have a dedicated telephonic feedback system that allows patients and attendants to share their experience, helping us continuously improve our care and services.',
    },
    {
      title: 'RTPCR Test',
      description: 'We offer accurate RTPCR testing for COVID-19 and other infections with quick report turnaround, ensuring timely diagnosis and containment.',
    }
  ]
  const MedicalAndSurgical = [
    {
      title: 'Anesthesiology',
      description: 'The department of Anaesthesiology delivers standardised peri-operative care, ensuring patient safety through expert anaesthesia for all surgical specialities. From pre-operative assessment to chronic pain management and critical care we utilise advanced monitoring and evidence-based techniques to provide safe, reliable and compassionate care tailored to every patients’ recovery journey.',
    },
    {
      title: 'Dermatology, Venereology and Leprosy',
      description: 'The department of Dermatology provide specialized diagnosis and treatment for skin diseases, sexually transmitted infections, and leprosy, offering both medical and cosmetic dermatological care. Our dermatology unit offers expert care for skin, hair, and nail conditions, including cosmetic procedures like chemical peeling and PRP therapy for skin rejuvenation and hair restoration.',
    },
    {
      title: 'General Medicine',
      description: 'The department of General Medicine provides comprehensive diagnosis and treatment for a wide range of adult health conditions, including chronic diseases, infections, and lifestyle disorders. Our general medicine department delivers holistic care for adult patients, managing a broad range of acute and chronic illnesses with a focus on accurate diagnosis and long-term wellness.',
    },
    {
      title: 'Paediatrics',
      description: 'The department of Pediatrics provides specialized care for newborns, infants and children including advanced treatments such as surfactant therapy and critical care in a level-III NICU and well equipped PICU. We also offer immunization and specialty pediatrics clinics on designated days for expert consultation, follow up and comprehensive child healthcare.',
    },
    {
      title: 'Pain and Palliative Care',
      description: 'We offer compassionate pain and palliative care services to improve the quality of life for patients with chronic illnesses, terminal conditions, and those in need of end-of-life care.',
    },
    {
      title: 'Psychiatry',
      description: 'The department of Psychiatry provides compassionate care for mental health issues, with specialized services including de-addiction programs and Electroconvulsive Therapy (ECT) for treatment-resistant conditions. Our psychiatry unit provides expert mental health care, offering therapy, counselling, de-addiction services, and advanced treatments for a range of psychiatric disorders.',
    },
    {
      title: 'Radio-diagnosis',
      description: 'The department of Radiology offers comprehensive, state-of-the-art imaging services including CT scans, Doppler studies, ultrasonography (USG), digital X-rays, mammography, and image-guided interventions Our department is committed to delivering accurate and timely diagnostic insights to support clinical decision-making and optimize patient care outcomes.',
    },
    {
      title: 'Emergency Medicine',
      description: 'The department of Emergency Medicine is dedicated to delivering rapid, high-quality care for acute and life-threatening conditions. The department integrates advanced clinical training, evidence-based practice, and modern emergency infrastructure. It emphasizes excellence in trauma care, critical care, and disaster preparedness. Students receive hands-on exposure under the guidance of experienced emergency physicians and multidisciplinary teams.',
    },
    {
      title: 'General Surgery',
      description: 'The department of General Surgery offers expert surgical care for a variety of conditions, with skilled surgeons performing both routine and complex procedures safely. Our general surgery team specializes in minimally invasive procedures including endoscopy and laparoscopy for accurate diagnosis and treatment with quicker recovery.',
    },
    {
      title: 'Obstetrics and Gynaecology',
      description: 'The department of Obstetrics and Gynaecology is committed to excellence in women’s healthcare, education for students and research. The department provides comprehensive care in obstetrics, gynaecology, and reproductive health. It is equipped with modern facilities such as laparoscopy, hysteroscopy, colposcopy for maternal, foetal, and gynaecological services. Faculty members are actively involved in teaching, clinical training, and research activities. The department strives to promote safe motherhood, women’s wellbeing, and academic excellence.',
    },
    {
      title: 'Ophthalmology',
      description: 'The department of ophthalmology is well equipped with advanced instruments in giving comprehensive eye care ranging from routine visual screening to advanced cataract and glaucoma surgeries to diabetic retinopathy screening. The department also conducts eye camps on a routine basis in rural areas.',
    },
    {
      title: 'Orthopaedics',
      description: 'The department of Orthopedics offers advanced surgical and non-surgical management of musculoskeletal disorders. Operative services include trauma fixation, joint replacement surgeries, arthroscopic procedures, spine surgeries, deformity correction, and management of complex fractures. The department is equipped with modern operation theatres and follows evidence-based surgical protocols, while actively training students in contemporary operative techniques and perioperative care.',
    },
    {
      title: 'ENT',
      description: 'Our ENT specialists perform intricate surgical procedures such as Septoplasty and Functional Endoscopic Sinus Surgery (FESS) for nasal conditions, tympano-mastoidectomy exploration to treat chronic ear conditions, Micro laryngeal surgeries for vocal cord diseases, Foreign body removal from food passage/airway, Adenotonsillectomy, thyroid and salivary gland surgeries and other head and neck procedures.',
    },
    {
      title: 'Dentistry',
      description: 'Our dentistry department offers advanced surgical procedures including root canal treatment and dental implants, ensuring long-term oral health and functional restoration.',
    },
    {
      title: 'Pulmonory medicine',
      description: 'The department of Pulmonary Medicine is dedicated to excellence in respiratory healthcare, education, and research. The department offers comprehensive diagnosis and management of respiratory and sleep-related disorders. Equipped with modern diagnostic facilities, it provides evidence-based and patient-centred care. Faculty members are actively involved in teaching, clinical training, and research activities. The department strives to improve lung health through quality care, academic excellence, and community outreach.',
    }
  ]
  return (
    <>


      <div className='hospital-container'>
        <Breadcrumb title={"Hospital"} />
        <div className="hospital-page">
          <section className="scope-of-services">
            <h2>Scope of Hospital Services</h2>
            <p>
              At Takshashila Medical College & Hospital, we offer a comprehensive range of healthcare services designed to meet the diverse medical needs of our patients. Our hospital is equipped with cutting-edge diagnostic and therapeutic technologies, supported by highly qualified medical professionals and dedicated support staff. From preventive care and outpatient consultations to advanced surgical procedures and critical care, we provide integrated services across all major specialties and super-specialties. Our goal is to deliver patient-centered, affordable, and evidence-based healthcare that upholds the highest standards of quality, safety, and compassion. With a focus on continuous improvement and innovation, our hospital ensures that every patient receives timely, personalized, and holistic care.

            </p>
          </section>

          {/* <section className="medical-specialities">
            <h2>Medical Specialities</h2>
            <ul>
              {medicalSpecialities.map((speciality, index) => (
                <li key={index}>
                  <h3 >{speciality.title}</h3>
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
          </section> */}
          <section className="facilities">
            <h2>Medical and Surgical broad specialities</h2>
            <ul>
              {MedicalAndSurgical.map((medical, index) => (
                <li key={index}>
                  <h3>{medical.title}</h3>
                  <p>{medical.description}</p>
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
          {/* <section className="facilities">
            <h2>Medical and surgical broad specialities</h2>
            <ul>
              {MedicalAndSurgical.map((medical, index) => (
                <li key={index}>
                  <h3>{medical.title}</h3>
                  <p>{medical.description}</p>
                </li>
              ))}
            </ul>
          </section> */}
          <section className="facilities">
            <h2>24x7 Facilities</h2>
            <ul>
              {facilities.map((facility, index) => (
                <li key={index}>
                  <h3 className='d-flex item-center justify-center gap-2'>{facility.icon}{facility.title}</h3>
                  <p>{facility.description}</p>
                </li>
              ))}
            </ul>
          </section>
          <section className="facilities">
            <h2>Other Facilities</h2>
            <ul>
              {otherFacilities.map((facility, index) => (
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