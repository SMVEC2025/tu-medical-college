import React from 'react';
import './styles/CollegeInfoTable.css';
import Breadcrumb from './Breadcrumb';

const collegeData = [
  ['1', 'Name', 'Takshashila Medical College'],
  ['2', 'Address with pin code', 'No.1, Ongur Post, Tindivanam Taluk, Villupuram District, Tamil Nadu - 604305, India.'],
  ['3', 'University address with pin code', 'Takshashila University, Tamil Nadu - 604305.'],
  ['4', 'Official website', 'www.takshashilauniv.ac.in'],
  ['5', 'Dean/ Principal/ Director', 'Dr. M. Jayasree\nDean'],
  ['6', 'Mobile Number', '94437 69196'],
  ['7', 'Email ID of Dean', 'deantmch@takshashilauniv.ac.in'],
  ['8', 'Hospital', 'Takshashila Medical College Hospital'],
  ['9', 'Date and Year of Registration of the Hospital', 'Takshashila Medical College Hospital \n Renewal Registration Number: VLPMALI20240036333 \nDate of issue: 08.08.2024'],
  ['10', 'Number of Beds', '986 beds'],
  ['11', 'Number of Beds for emergency', '30 beds'],
  ['12', 'Date of the First Letter of Permission (LoP) of MBBS & number of seats', '26-10-2025 for 100MBBS seats'],
  ['13', 'Status of Recognition', 'Recognized 100 MBBS seats'],
  ['14', 'Number of MBBS and PG broad specialty and super specialty students admitted in this session', '-'],
  // ['15', 'Inpatients registered and admitted (Previous month record)', '2424'],
  ['15', 'Inpatients registered and admitted (Previous month record)', ''],
  // ['16', 'Outpatients registered (Previous month record)', '33022'],
  ['16', 'Outpatients registered (Previous month record)', ''],
  // ['17', 'Number of Deaths reported to the Municipality/ village register (Previous month record)', '2'],
  ['17', 'Number of Deaths reported to the Municipality/ village register (Previous month record)', ''],
  ['18', 'Address and pin code of the Corporation/village where the Death records are reported', 'Ongur-Village,\nTindivanam-Tk,\nVillupuram-604305.'],
  ['19', 'Website link/email ID/hyperlink of the corporation in case Death Records are reported', 'https://www.crstn.org/birth_death_tn/'],
  // ['20', 'Number of Births reported (Month-wise)', '135'],
  ['20', 'Number of Births reported (Month-wise)', ''],
  ['21', 'Address and pin code of the Corporation/village where the Birth records are reported', 'Ongur-Village,\nTindivanam-Tk,\nVillupuram-604305.'],
  ['22', 'Website link/email ID/hyperlink of the corporation in case Birth Records are reported', 'https://www.crstn.org/birth_death_tn/'],
  ['23', 'Number of Rooms in Men’s Hostel and students accommodated', 'Rooms- 160\nStudents accommodated- 32'],
  ['24', 'Total Number of Rooms in Women’s Hostel and students accommodated', 'Rooms- 160\nStudents accommodated- 50'],
  ['25', 'Name of the Grievance Redressal Officer (PIO & CPIO)', 'Dr. M. Jayasree,\nDean,\nChairperson-Grievance Redressal Committee'],
  ['26', 'Address with Pin code', 'Takshashila Medical College,\nTakshashila University, Ongur, Tindivanam Taluk, Villupuram District, Tamil Nadu - 604305, India.'],
  ['27', 'Telephone Number Email Id', '04147 – 234515\ndeantmch@takshashilauniv.ac.in'],
  ['28', 'Details of Post-Graduation Courses offered', 'Not Applicable'],
];

const CollegeInfoTable = () => {
  return (
    <>

      <Breadcrumb title="Pro-Forma for Display of Information" />
      <div className="college-info-container">
        {/* <h2>Pro-Forma for Display of Information</h2> */}
        <table className="college-info-table">
          <thead>
            <tr>
              <th>S No.</th>
              <th>Information</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {collegeData.map(([sno, info, detail], index) => (
              <tr key={index}>
                <td>{sno}</td>
                <td>{info}</td>
                <td>{detail.split('\n').map((line, i) => <div key={i}>{line}</div>)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default CollegeInfoTable;
