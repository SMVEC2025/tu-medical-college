import React from 'react';
import '../../components/styles/PharmacovigilanceCommittee.css';
import Navbar from '../../components/Navbar';

const AntiRagging = () => {

    const committeesData = {
  CurriculumCommittee: {
    title: 'Hospital Infection Control Committee',
    description:
      'The Hospital Infection Control Committee (HICC) plays a vital role in maintaining hygiene, controlling infection outbreaks, and ensuring a safe hospital environment. It implements and monitors infection control practices to safeguard both patients and healthcare workers.',
    members: [
      ['Dr. Prasath. C, Medical Superintendent', 'Chairperson'],
      ['Dr. Johny Cyriac, Professor & HOD of General Medicine', 'Member'],
      ['Dr. Mahadevan R, Professor of General Surgery', 'Member'],
      ['Dr. Saraswathy.K, Professor of Ophthalmology', 'Member'],
      ['Dr. Anant Kumar Singh, Professor of Orthopedics', 'Member'],
      ['Dr. Sunii T Sabhnani, Professor of Dermatology', 'Member'],
      ['Dr. Veena, Professor of OBG', 'Member'],
      ['Dr. Vadlamudy Vinay, Assoc. Prof Pediatrics', 'Member'],
      ['Dr. Seethy. Y Professor of ENT', 'Member'],
      ['Mrs. Glory, Nursing Superintendent', 'Member'],
      ['Dr. Kumaraguru, Senior Resident', 'Member Secretary'],
    ],
  },
  curriculum: {
    title: 'Curriculum Committee - 2025',
    description:
      'The Curriculum Committee ensures a structured and updated academic curriculum, aligning with regulatory bodies and modern medical education standards. It continuously reviews and revises syllabi to enhance student learning outcomes.',
    members: [
      ['Dr. M. Jayasree', 'Chairperson'],
      ['Dr. Prasath. C, Professor of Anaesthesia', 'MEU Co-ordinator'],
      ['Dr. Kuzhandai Velu. V', 'Professor of Biochemistry'],
      ['Dr. Patil Vaibhav Damodar', 'Professor of Pathology'],
      ['Dr. Johny Cyriac', 'Professor of General Medicine'],
      ['Dr. Chaitanya Prasad B', 'Associate Professor of General Medicine'],
      ['Dr. Tejaswi Chandana', 'Associate Professor of General Surgery'],
      ['Dr. Anant Kumar Singh', 'Professor of Orthopedics'],
      ['Student Representative', 'Awaited LOP'],
    ],
  },
  antiRagging: {
    title: 'Anti Ragging Committee',
    description:
      'The Anti-Ragging Committee is formed to prevent and address issues of ragging on campus. It ensures a safe, respectful, and inclusive environment for all students by promoting awareness and enforcing strict anti-ragging policies.',
    members: [
      ['Dr. M. Jayasree, Chairperson Dean', '9443769196 / jayasreevyshali@gmail.com'],
      ['Dr. Shanmugavadivel. G, Professor of Dentistry', '7358658687 / shanpedo@gmail.com'],
      ['Dr. Ramkumar. G, Assistant Professor of ENT', '8903486246 / ramg1991@gmil.com'],
      ['Dr. Sangeetha.P, Assistant Professor of Psychiatry', '7401179241 / psangeetha1103@gmail.com'],
      ['Dr. Divya Bharathy.R, Assistant Professor of Community Medicine', '7094344720 / drdivyabharathy@gmail.com'],
      ['Dr. A. Suphalakshmi, Dean of Engineering and Technology', '8925829052 / deanfet@takshashilauniv.ac.in'],
      ['Mr. P. Pattabiraman, Police Nominee', '9498153099 / palanipattabiraman@gmail.com'],
      ['Students Representative', 'Not Applicable'],
      ['Parents Representative', 'Not Applicable'],
      ['Mrs. G.D. Vijayalakshmi, Admin Manager', '9655386385 / vijayalakshmiiswin@gmail.com'],
      ['Dr. Prem kumar.K, Secretary, Assistant Professor of Orthopaedics', '9003333273 / premgkmc@gmail.com'],
    ],
  },
  CurriculumCommittee: {
    title: 'Gender Harassment Committee',
    description:
      'The Gender Harassment Committee ensures a work and academic environment free from gender-based discrimination or misconduct. It provides support to affected individuals and takes necessary actions to ensure justice and safety.',
    members: [
      ['Dr. Ramya.G, Professor & Head, Dept. of Pathology', 'Chairperson'],
      ['Dr. Arthy, Associate Professor of Forensic Medicine', 'Member'],
      ['Dr. Divyabharathy.R, Assistant Professor of Community Medicine', 'Member'],
      ['Dr. Ramkumar. G, Assistant Professor of ENT', 'Member'],
      ['Ms. Fatima, NGO', 'Member'],
      ['Mrs. G.D. Vijayalakshmi, Assistant Admin Manager, Dean office', 'Member'],
      ['Mrs. Usha. A, Accountant, MS Office', 'Secretary'],
    ],
  },
};
  return (
    <>
    
    <div className="pharma-container">
      <header className="pharma-header">
        <h1>{committeesData.antiRagging.title}</h1>
      </header>

      <section className="pharma-description">
       <p>{committeesData.antiRagging.description}</p>
      </section>

      <section className="pharma-table-section">
        <table className="pharma-table">
          <thead>
            <tr>
              <th>Name & Designation</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
           {committeesData.antiRagging.members.map((e,i)=>(
             <tr>
              <td>{e[0]}</td>
              <td>{e[1]}</td>
            </tr>
           ))}
           
          </tbody>
        </table>
      </section>
    </div>
    </>
  );
};

export default AntiRagging;
