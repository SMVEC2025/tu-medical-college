
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"•	To collaborate with national & international institutes for knowledge sharing & excellence.To provide quality Radiological imaging service for 24 x 7.To promote ethical Radiological research for improved patient outcome.", 
  vision:"To impart high quality Medical Education, to provide continuous improvement in patient care through research.",
  title:"Radiology",
  para:"The department of Radio-diagnosis is a well-equipped department with latest radiology equipment’s, fully computerised reporting and fully air conditioned department providing round the clock patient care services, both for in patients and out patients.The department has faculties to look after the day to day activities of the department. It has got skilled technicians to provide routine as well as round the clock emergency and bedside services in the hospital. There are in addition, Staff nurse, ANMs, Junior Assistants, Female Attender to help run the department."
}
const Radiology= () => {
  return (
    <>
    
      <Navbar/>

      <Breadcrumb heading={true} title={"Department of radiology"} />

  
      <FeaturesTwo data={deptData}/>

      <FooterThree />
    </>
  );
};

export default Radiology
;
