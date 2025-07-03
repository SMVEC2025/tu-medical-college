import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"Loading...", 
  vision:"Loading...",
  title:"Diagnostics Services",
  para:"At Takshashila medical college hospital, our Diagnostic Services Department is committed to delivering accurate, timely, and reliable diagnostic support to aid in the prevention, diagnosis, and management of diseases. Equipped with state-of-the-art technology and staffed by highly trained professionals, our diagnostic facilities play a vital role in patient care, education, and research."
}
const Diagnostics = () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Diagnostics Services"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default Diagnostics;
