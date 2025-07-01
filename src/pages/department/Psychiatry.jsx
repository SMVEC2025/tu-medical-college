
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"Loading...", 
  vision:"Loading...",
  title:"Psychiatry",
  para:"Mental health is as important as physical health. Mental illness is one of the leading causes of morbidity globally. Prevalence of mental illness in our country is grossly under-gauged. This can be attributed to various reasons, which includes social stigma, covert nature, and poor social awareness. The department is currently functioning with a team of scholarly faculties who strive to provide mental health services based on the latest evidence-based treatment protocol. With the aim of benefitting the underprivileged population, we have extended a helping hand."
}
const Psychiatry= () => {
  return (
    <>
    
      <Navbar/>

      <Breadcrumb heading={true} title={"Department of Psychiatry"} />

  
      <FeaturesTwo data={deptData}/>

      <FooterThree />
    </>
  );
};

export default Psychiatry
;
