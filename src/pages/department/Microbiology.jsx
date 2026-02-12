
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"To achieve excellence in diagnostic Microbiology, teaching, and research for the accurate detection, prevention, and control of infectious diseases.", 
  vision:"To emerge as a centre of excellence in Microbiology that advances patient care, scientific innovation, and public health.",
  title:"Microbiology",
  para:"The Department of Microbiology is dedicated to excellence in teaching, research, and diagnostic services, with a strong focus on the role of microorganisms in health, disease, and the environment. It offers comprehensive training in bacteriology, virology, mycology, parasitology, and immunology, supported by well-equipped laboratories. The department fosters scientific inquiry, ethical practice, and effective infection control, preparing students for successful careers in academics, clinical practice, and research."
}
const Microbiology = () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Microbiology"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default Microbiology
;
