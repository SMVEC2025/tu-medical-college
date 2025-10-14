import React from 'react';
import './styles/TuitionFee.css';
import Breadcrumb from './Breadcrumb';
import { BiBed } from "react-icons/bi";

const HostelFee = () => {
  return (
    <>
    <Breadcrumb title={'Hostel Fee'}/>
    <div className="fee-container">
        <h4>Hostel Fee Detail</h4>
        <p style={{display:"flex",alignItems:'center', gap:"3px"}}><BiBed/>Triple Sharing Accommodation</p>

      <table className="fee-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Fee (Per Annum)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Accommodation & Mess</td>
            <td>₹1,75,000</td>
          </tr>
          <tr>
            <td>Laundry Services	</td>
            <td>₹6,500</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>₹1,81,500</td>
          </tr>
        </tbody>
      </table>

      {/* <section className="notes">
        <h2>Important Notes:</h2>
        <ul>
          <li>₹60,000 per student is permitted as development fee.</li>
          <li>Fees do not include Hostel, Transport, or Mess charges (optional).</li>
          <li>No capitation or additional non-recurring fee is allowed.</li>
        </ul>
      </section> */}
    </div>
    </>
  );
};

export default HostelFee;
