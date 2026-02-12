import '../../components/styles/PharmacovigilanceCommittee.css';

const GenderHarassment = () => {

    const committeeData = {
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
  };
  return (
    <>
    
    <div className="pharma-container">
      <header className="pharma-header">
        <h1>{committeeData.title}</h1>
      </header>

      <section className="pharma-description">
       <p>{committeeData.description}</p>
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
           {committeeData.members.map((e) => (
             <tr key={e[0]}>
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

export default GenderHarassment;
