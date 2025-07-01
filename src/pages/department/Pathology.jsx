import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"To provide the highest quality of education, training and research experience for students.To ensure the highest quality and effective diagnostic services for optimum patient care.", 
  vision:"To provide best medical education, ethical research and quality diagnostic services and to be recognized as a centre of excellence in patient care and education.",
  title:"Pathology",
  para:"The department of Pathology started functioning with various activities including investigative services, teaching and training. The department has progressed rapidly in terms of expansion in services, recruitment of capable faculty members, paramedical & supportive staff as well as installation of sophisticated and modern equipments.\nThe department has started a graduate research laboratory. In addition, range of various immunohistochemicall stains which have been added now help in further making a more specific diagnosis. For better services a fully Automated Tissue Processor, a semi-automated microtome and a Cryostat have been added."
}
const Pathology = () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Pathology"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default Pathology;
