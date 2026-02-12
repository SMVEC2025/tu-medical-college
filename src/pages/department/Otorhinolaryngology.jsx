
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";

const deptData = {
  mission:"To train the undergraduates in basic ENT care and emergency management.To collaborate with national & international institutes for knowledge sharing & excellence.", 
  vision:"To provide high quality evidence based medical education to the undergraduate and postgraduate students, high quality patient care and ethical research to serve the community and become globally recognized centre of excellence in otorhinolaryngology, head and neck surgery.",
  title:"Otorhinolaryngology",
  para:"The Department of ENT and Head & Neck surgery provides comprehensive care to patients with diseases of the ear, nose, throat and head and neck, the anatomic limits being the dura above and the pleura below.Well trained surgeons with sound knowledge are offering best care to the patients with the help of state of the art equipments and instruments resulting in best outcomes"
}
const Otorhinolaryngology = () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Otorhinolaryngology"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default Otorhinolaryngology
;
