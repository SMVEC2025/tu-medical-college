import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"To Provide safe, compassionate, prompt and clinically advanced care to every patient.To impart high quality undergraduate and post graduate medical education along with well-organized residency programme in anaesthesia", 
  vision:"To provide safe anaesthesia, high quality medical education, and ethical research in anaesthesia.",
  title:"Anaesthesiology",
  para:"The Department of Anaesthesiology is a working asset for TMCH.Our team of extremely skilled and well experienced anaesthesiologists aims to provide evidence-based quality patient care not only in the Operation Theatres but also beyond it by optimizing pre- operative status and providing comprehensive patient care during the post-operative period.Department is well equipped with talented and experienced teachers who are exposed to advances in the specialties of perioperative anaesthesia, trauma, pain management and super specialties providing an additional platform in managing almost all complicated patients and also train the students in developing their skills in trauma and resuscitation."
}
const Anaesthesiology = () => {
  return (
    <>
    
      <Navbar/>

      <Breadcrumb heading={true} title={"Department of Anaesthesiology"} />

  
      <FeaturesTwo data={deptData}/>

      <FooterThree />
    </>
  );
};

export default Anaesthesiology;
