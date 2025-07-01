
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"To train undergraduate and postgraduate students with the aim of producing a highly skilled & professionally competent doctor.To impart quality training for the technical staff with the aim of producing skilled & competent technicians.", 
  vision:"To impart high quality education in the field of Microbiology and quality laboratory services and research.",
  title:"Microbiology",
  para:"The Department of Microbiology has a well established clinical and research laboratory. The Clinical Microbiology Laboratory functions round the clock on all the seven days of the week. The department has facilities for bacterial, fungal and mycobacterial culture and a variety of serology/immunology tests including IFA and blot assay for ANA, Hepatitis B markers, serum IgE in addition to serology for common infectious diseases. The department has a well established museum."
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
