import Breadcrumb from "../../components/Breadcrumb";
import DepartmentGallery from "../../components/DepartmentGallery";
import FeaturesTwo from "../../components/FeaturesTwo";
import { getDepartmentGalleryData } from "../../data/departmentGalleries";


const deptData = {
  mission:"To educate and impart oral health to the community.To set high standard in dental health care by imparting high degree of professional skills.To raise the quality of oral health care through continual dental education and research.", 
  vision:"Our department is envisioned to serve the people in the region with quality dental health care at an affordable cost, with special focus on rural population.",
  title:"Dentistry",
  para:"The Department of Dentistry at Takshashila University is dedicated to excellence in oral healthcare, education, and research. The department provides comprehensive training in preventive restorative and surgical dental practices. Modern dental clinics and advanced equipment ensure high-quality patient care and hands-on clinical experience. Students are trained in ethical practice, infection control, and evidence-based treatment approaches. The department strives to improve oral health awareness and community well-being through outreach and academic excellence."
}
const Dentistry = () => {
  const GalleryData = getDepartmentGalleryData("dentistry");

  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Dentistry"} />

  
      <FeaturesTwo data={deptData}/>

      <DepartmentGallery title={deptData.title} GalleryData={GalleryData} />

      
    </>
  );
};

export default Dentistry;
