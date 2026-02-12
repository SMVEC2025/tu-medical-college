
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";



const deptData = {
  mission:"To promote academic excellence through evidence-based teaching and knowledge dissemination.To acquire new knowledge in Pharmacology by conducting and promoting innovative research.", 
  vision:"To become one of the globally distinguished research-intensive academic centers in the field of Pharmacology, by imparting highest quality of pharmacological training to the medical and paramedical students and promoting rational therapeutics.",
  title:"Pharmacology",
  para:"Mental health is as important as physical health. Mental illness is one of the leading causes of morbidity globally. Prevalence of mental illness in our country is grossly under-gauged. This can be attributed to various reasons, which includes social stigma, covert nature, and poor social awareness. The department is currently functioning with a team of scholarly faculties who strive to provide mental health services based on the latest evidence-based treatment protocol. With the aim of benefitting the underprivileged population, we have extended a helping hand."
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
