import Breadcrumb from "../components/Breadcrumb";
import FeaturesTwo from "../components/FeaturesTwo";
import FooterThree from "../components/FooterThree";

import Navbar from "../components/Navbar";



const deptData = {
  mission:"Loading...",
  vision:"Loading...",
  title:"title",
  para:"hello"
}
const AboutTwoPage = () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of radiology"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default AboutTwoPage;
