import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"To enable students to understand the scientific basis of life processes at the molecular level and orient them towards the application of knowledge acquired, in solving clinical problems.", 
  vision:"To become centre of excellence by rendering in depth knowledge about biochemical and molecular basics of health and disease to the students, which makes them competent in diagnostic biochemistry and research.",
  title:"Biochemistry",
  para:"Department of the Biochemistry was started as a part of Takshashila Medical College and Hospital, Tamilnadu. It is involved in teaching theoretical knowledge and skills related to biochemical pathways of humans and biochemical investigations and tests related to diseases. It renders its diagnostic services to the hospital patients through Clinical Biochemistry Laboratory with latest diagnostic instruments."
}
const Biochemistry = () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Biochemistry"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default Biochemistry;
