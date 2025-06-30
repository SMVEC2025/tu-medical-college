import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"To inculcate clinical skills, professionalism, teaching and leadership skills among undergraduates & postgraduates in Dermatology, Venereology & Leprosy.", 
  vision:"To impart evidence based medical education, quality patient care and ethical clinical research to become globally recognized centre of excellence in Dermatology, Venereology & Leprosy.",
  title:"Dermatology",
  para:"The Department of Dermatology, Leprosy and Venereology is one of the pioneer department which excels in patient care and academic activities. The Department provides a comprehensive Out Patient services in Dermatology, Venereology, Leprosy and Paediatric Dermatology. The Department also provides wholesome care to patients with Psoriasis, Pigmentary disorders, Contact dermatitis, Leprosy, Autoimmune disorders."
}
const Dermatology = () => {
  return (
    <>
    
      <Navbar/>

      <Breadcrumb title={"Department of radiology"} />

  
      <FeaturesTwo data={deptData}/>

      <FooterThree />
    </>
  );
};

export default Dermatology;
