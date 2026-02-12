import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";


const deptData = {
  mission:"To inculcate clinical skills, professionalism, teaching and leadership skills among undergraduates & postgraduates in Dermatology, Venereology & Leprosy.", 
  vision:"To impart evidence based medical education, quality patient care and ethical clinical research to become globally recognized centre of excellence in Dermatology, Venereology & Leprosy.",
  title:"Anatomy",
  para:"TMCH in Tamilnadu was established with an aim to excel in the fields of medical education, training and research. The department is involved in medical teaching and training at the undergraduate.\nThe Department of Anatomy is approved by the Takshashila University which imparts teaching and training programs in human anatomy to undergraduate students of Medicine, Nursing, Physiotherapy (BPT), and Allied Health Sciences (AHS).\nThe Department has adequate number of teaching faculty as per NMC norms. All the faculty members have undergone periodical Faculty Development Programmes. They participate and present research papers in conferences and workshops to update their knowledge. The faculty members of the department have published articles in various national and international indexed journals. The department cultivates teaching qualities in young minds using peer assisted learning. The students have access to highly engaging academic information via the learning management system on the e-governance site 24 hours a day, 7 days a week. E learning content includes lecture presentations, video lessons, multimedia animations, multiple choice quiz sections, and question banks.\nThe department has a well-equipped Research lab with research microscopes. The department organises various academic events that enhances anatomical knowledge. The department also involves in conducting and coordinating events that focusses to impart ethics, humanities and communication skills amongst medical students.\nEngaging in periodic Interdepartmental activities and research projects amplify students competencies. The department encourages under graduate students to take up short term student projects under ICMR. They are motivated to participate in various quiz programmes and they win prizes.\nNurturing medical students has brought accolades and laurels in the form of university ranks and medals. Post graduate alumni are enrolled in premier institutes of India and abroad."
}
const Anatomy = () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Anatomy"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default Anatomy;
