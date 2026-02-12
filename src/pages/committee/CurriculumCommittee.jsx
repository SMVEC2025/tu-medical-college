import '../../components/styles/PharmacovigilanceCommittee.css';

const CurriculumCommittee = () => {
    const committeeData = {
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

export default CurriculumCommittee;
