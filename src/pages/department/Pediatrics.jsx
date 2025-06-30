
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"this is mission", 
  vision:"this is hello",
  title:"title",
  para:"hello"
}
const Pediatrics= () => {
  return (
    <>
    
      <Navbar/>

      <Breadcrumb title={"Department of radiology"} />

  
      <FeaturesTwo data={deptData}/>

      <FooterThree />
    </>
  );
};

export default Pediatrics
;
