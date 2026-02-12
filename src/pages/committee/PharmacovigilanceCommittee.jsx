import '../../components/styles/PharmacovigilanceCommittee.css';

const PharmacovigilanceCommittee = () => {
  return (
    <>
    
    <div className="pharma-container">
      <header className="pharma-header">
        <h1>Pharmacovigilance Committee</h1>
      </header>

      <section className="pharma-description">
        <p>
          The Pharmacovigilance Committee is responsible for ensuring the safe and effective use of medicines within the institution. This committee monitors adverse drug reactions, promotes awareness about drug safety among healthcare professionals and students, and ensures compliance with national pharmacovigilance guidelines. Through active surveillance and continuous training, the committee plays a crucial role in protecting patient well-being and enhancing therapeutic outcomes.
        </p>
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
            <tr>
              <td>Dr. M. Jayasree, Dean</td>
              <td>Chairperson</td>
            </tr>
            <tr>
              <td>Dr. Prasath. C, Medical Superintendent</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>Dr. Veena Choodamani, Professor OBG</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>Dr. Harish Kumar. M, Assistant Professor Surgery</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>Dr. Harinie. S, Assistant Professor of Paediatrics</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>Dr. Amzath Khan. A, Assistant Professor General Medicine</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>Mrs. Glory, Nursing Superintendent</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>Mr. Ashok Kumar, Chief Pharmacist</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>Dr. Nitya. S, Professor & HOD of Pharmacology</td>
              <td>Member Secretary</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    </>
  );
};

export default PharmacovigilanceCommittee;
