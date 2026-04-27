
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";



const deptData = {
  mission:"To promote academic excellence through evidence-based teaching and knowledge dissemination.To acquire new knowledge in Pharmacology by conducting and promoting innovative research.", 
  vision:"To become one of the globally distinguished research-intensive academic centers in the field of Pharmacology, by imparting highest quality of pharmacological training to the medical and paramedical students and promoting rational therapeutics.",
  title:"Pharmacology",
  para:"The Department of Pharmacology is dedicated to excellence in teaching, research, and rational therapeutics. It provides comprehensive training in pharmacodynamics, pharmacokinetics, and clinical pharmacology. The department emphasizes safe, effective, and evidence-based use of medicines in patient care. Well-equipped laboratories and experimental facilities support practical learning and research activities. Faculty actively engage in academic teaching, research, and promoting ethical prescribing practices."
}
const Pharmacology= () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Pharmacology"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default Pharmacology
;
