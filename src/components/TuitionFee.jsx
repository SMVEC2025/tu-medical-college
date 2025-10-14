import React from 'react';
import './styles/TuitionFee.css';
import Breadcrumb from './Breadcrumb';

const TuitionFee = () => {
  return (
    <>
    <Breadcrumb title={'Tuition Fee'}/>
    <div className="fee-container">
      <p className="subheading">Applicable for Academic Years: 2025–2028</p>

      <table className="fee-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Fee (Per Annum)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Government Quota</td>
            <td>₹5,40,000</td>
          </tr>
          <tr>
            <td>Management Quota</td>
            <td>₹16,20,000</td>
          </tr>
          <tr>
            <td>NRI Quota</td>
            <td>₹30,00,000</td>
          </tr>
        </tbody>
      </table>

      <section className="notes">
        <h2>Important Notes:</h2>
        <ul>
          <li>₹60,000 per student is permitted as development fee.</li>
          <li>Fees do not include Hostel, Transport, or Mess charges (optional).</li>
          {/* <li>No capitation or additional non-recurring fee is allowed.</li> */}
        </ul>
      </section>
    </div>
    </>
  );
};

export default TuitionFee;
