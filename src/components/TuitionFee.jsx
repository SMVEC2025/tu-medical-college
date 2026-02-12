import React from "react";
import Breadcrumb from "./Breadcrumb";
import "./styles/TuitionFee.css";
import {
  MBBS_TUITION_FEE_ACADEMIC_YEARS,
  MBBS_TUITION_FEE_NOTES,
  MBBS_TUITION_FEE_STRUCTURE,
} from "../data/mbbsTuitionFee";

const TuitionFee = () => {
  return (
    <>
      <Breadcrumb title={"Tuition Fee"} />
      <div className="fee-container">
        <p className="subheading">
          Applicable for Academic Years: {MBBS_TUITION_FEE_ACADEMIC_YEARS}
        </p>

        <table className="fee-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Fee (Per Annum)</th>
            </tr>
          </thead>
          <tbody>
            {MBBS_TUITION_FEE_STRUCTURE.map((feeRow) => (
              <tr key={feeRow.category}>
                <td>{feeRow.category}</td>
                <td>{feeRow.feePerAnnum}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section className="notes">
          <h2>Important Notes:</h2>
          <ul>
            {MBBS_TUITION_FEE_NOTES.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default TuitionFee;
