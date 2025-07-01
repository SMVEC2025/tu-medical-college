import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"To enhance quality medical education by implementing excellence and professionalism in the practice of General Medicine.To provide the best evidence based medical care to the patients in an ethical and compassionate environment.", 
  vision:"To achieve excellence in Quality health care, Medical education and Scientific research.",
  title:"General Medicine",
  para:"Department of General Medicine is one of the broad specialty department providing primary health care to adult population. Out patient services are available on all days between 8.30 am to 3 pm. An extended outpatient consultation is available on all working days. A review consultation is available on designated days. Apart from regular General medicine consultation, special clinics on various specialties are functioning. In patient services are available in the third floor and fourth floor of the hospital."
}
const GeneralMedicine = () => {
  return (
    <>
    
      <Navbar/>

      <Breadcrumb heading={true} title={"Department of General Medicine"} />

  
      <FeaturesTwo data={deptData}/>

      <FooterThree />
    </>
  );
};

export default GeneralMedicine;
