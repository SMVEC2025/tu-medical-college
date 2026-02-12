import '../../components/styles/PharmacovigilanceCommittee.css';

const AntiRagging = () => {
    const committeeData = {
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

export default AntiRagging;
