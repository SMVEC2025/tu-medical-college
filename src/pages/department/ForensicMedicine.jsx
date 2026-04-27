import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";

const deptData = {
  mission:"To impart comprehensive knowledge in forensic medicine, medico-legal aspects and ethical medical practice. To train students in the application of forensic principles for justice, patientcare and legal responsibilities. To promote research, professional integrity, and collaboration with legal authorities in medico-legal services.", 
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
