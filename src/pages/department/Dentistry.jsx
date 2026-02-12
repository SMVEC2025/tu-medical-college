import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";


const deptData = {
  mission:"To educate and impart oral health to the community.To set high standard in dental health care by imparting high degree of professional skills.To raise the quality of oral health care through continual dental education and research.", 
  vision:"Our department is envisioned to serve the people in the region with quality dental health care at an affordable cost, with special focus on rural population.",
  title:"Dentistry",
  para:"Dental Specialty clinic is run by a group of expert dental surgeons, each having specialized in a branch that offers personal care and complete satisfaction. The clinic houses state-of-the-art equipment. The latest and highest quality dental materials to help carry out various surgical and restorative techniques, all of which makes a world of difference in diagnosis and treatment.The department is fired with the zeal to create world class institutions; this department is serving the needy by providing all kinds of dental treatment. "
}
const Dentistry = () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Dentistry"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default Dentistry;
