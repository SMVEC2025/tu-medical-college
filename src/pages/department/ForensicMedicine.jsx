import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"•	To provide understanding of medico legal issues in medical practice.To provide understanding of code of conduct and medical ethics.To provide knowledge to manage medical and legal issues in case of poisoning / overdose.", 
  vision:"To impart the knowledge of law in relation to medical practice, code of ethics and evidence based scientific approach to manage medico legal issues.",
  title:"Forensic Medicine",
  para:"The Department of Forensic Medicine plays a critical role at the intersection of medicine and law. Our department is dedicated to the application of medical knowledge to support justice, public health, and legal processes. We provide expert education, training, research, and medico-legal services in areas such as autopsy, clinical forensic medicine, toxicology, and forensic pathology."
}
const ForensicMedicine = () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Forensic Medicine"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default ForensicMedicine;
