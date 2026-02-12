import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import {
  MBBS_TUITION_FEE_ACADEMIC_YEARS,
  MBBS_TUITION_FEE_NOTES,
  MBBS_TUITION_FEE_STRUCTURE,
} from "../../data/mbbsTuitionFee";
import "./MBBSCourse.css";

const programHighlights = [
  {
    title: "Duration",
    description:
      "4.5 years of academic training followed by 1 year of compulsory rotatory internship.",
  },
  {
    title: "Training Model",
    description:
      "Integrated classroom learning, simulation, ward postings, and supervised patient care.",
  },
  {
    title: "Curriculum Focus",
    description:
      "Pre-clinical, para-clinical, and clinical competencies aligned to CBME-based MBBS standards.",
  },
];

const curriculumPhases = [
  "Phase I: Anatomy, Physiology, and Biochemistry fundamentals.",
  "Phase II: Pathology, Pharmacology, Microbiology, and Forensic Medicine.",
  "Phase III: Core clinical subjects with hospital-based training and case presentations.",
];

const admissionChecklist = [
  "Qualifying score in NEET-UG as per current state and regulatory norms.",
  "Counselling/allotment through the approved admission process for respective quota.",
  "Document verification, medical fitness, and fee payment within notified timelines.",
];

const MBBSCourse = () => {
  return (
    <>
      <Breadcrumb title={"MBBS Course"} />

      <section className="mbbs-course py-120">
        <div className="container">
          <div className="mbbs-course__hero">
            <p className="mbbs-course__eyebrow">Courses</p>
            <h2>Bachelor of Medicine and Bachelor of Surgery (MBBS)</h2>
            <p className="mbbs-course__intro">
              The MBBS program builds strong scientific foundations and clinical
              decision-making through progressive bedside exposure. Students are
              trained to deliver ethical, evidence-based care in primary,
              secondary, and tertiary healthcare settings.
            </p>
          </div>





          <section className="mbbs-course__fees">
            <div className="mbbs-course__fees-header">
              <h3>MBBS Tuition Fee Structure</h3>
              <p>
                Source: Academics {">"} Fee Structure {">"} Tuition Fee
              </p>
              <span>
                Applicable for Academic Years: {MBBS_TUITION_FEE_ACADEMIC_YEARS}
              </span>
            </div>

            <div className="table-responsive">
              <table className="mbbs-course__fees-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Fee (Per Annum)</th>
                  </tr>
                </thead>
                <tbody>
                  {MBBS_TUITION_FEE_STRUCTURE.map((fee) => (
                    <tr key={fee.category}>
                      <td>{fee.category}</td>
                      <td>{fee.feePerAnnum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="mbbs-course__fee-notes">
              {MBBS_TUITION_FEE_NOTES.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
};

export default MBBSCourse;
