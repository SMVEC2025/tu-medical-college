import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";

const deptData = {
  mission:"To impart medical knowledge, clinical skills, professionalism in both undergraduates and postgraduates and to inspire them for clinical research.To provide holistic health care from puberty, reproductive period, menopause to postmenopausal age groups.", 
  vision:"Will render evidence based medical education for the undergraduate students on optimal healthcare for women of all ages, and promotes clinical research to update the department as an excellent centre in the field of both Obstetrics & Gynaecology.",
  title:"Obstetrics & Gynaecology",
  para:"Since its inception the Department of Obstetrics and Gynaecology has grown into one of the well-established departments of the Institution. The Department offers state of art treatment to all classes of patients. The department caters to the need of high risk patients from surrounding areas of Puducherry and Tamil Nadu. The services of trained specialists and a team of doctors are available 24/7/365 days.In the field of Obstetrics, we are dealing with all high risk pregnancies. Normal deliveries are done free of cost and other operative and gynaecological services are done at very nominal rate. Apart from routine gynaecological surgeries, operative laparoscopic and hysteroscopic surgeries are also done."
}
const Obstetrics = () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Obstetrics & Gynaecology"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default Obstetrics;
