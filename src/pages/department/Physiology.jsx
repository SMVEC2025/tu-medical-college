
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:" To impart the highest possible standards of excellence in knowledge, skills and attitude through a well-designed curriculum in physiology.To collaborate with other disciplines to improve learning of physiology in an integrated manner.", 
  vision:"To provide Under Graduates and Post Graduates a comprehensive knowledge of normal functions of various organ systems of the human body and to facilitate better understanding of the physiological basis of health and diseases through interactive and interdisciplinary learning approaches that enable them to serve the humanity competently.",
  title:"Physiology",
  para:"The Department of Physiology being one of the three basic pioneer departments of the Takshashila Medical College and Hospital has been given the responsibility to impart medical education to the medical students. The department has come a long way since then, under the guidance of senior experienced faculty members having good teaching and research background. A number of faculty members served the department from time to time and played pivotal role in improving the department and taking it to new heights."
}
const Physiology= () => {
  return (
    <>
    
      <Navbar/>

      <Breadcrumb heading={true} title={"Department of Physiology"} />

  
      <FeaturesTwo data={deptData}/>

      <FooterThree />
    </>
  );
};

export default Physiology
;
