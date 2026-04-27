
import Breadcrumb from "../../components/Breadcrumb";
import DepartmentGallery from "../../components/DepartmentGallery";
import FeaturesTwo from "../../components/FeaturesTwo";
import { getDepartmentGalleryData } from "../../data/departmentGalleries";



const deptData = {
  mission:"To provide high-quality, compassionate, and evidence-based psychiatric care. To train competent medical professionals in diagnosis, management, and prevention of mental health disorders. To encourage research, community outreach, and interdisciplinary collaboration in mental health.", 
  vision:"To be a center of excellence in mental health care, education, and research.To promote holistic, patient-centered approaches to psychological well-being and recovery. To advance awareness and reduce stigma associated with mental illness in the community.",
  title:"Psychiatry",
  para:"Mental health is as important as physical health. Mental illness is one of the leading causes of morbidity globally. Prevalence of mental illness in our country is grossly under-gauged. This can be attributed to various reasons, which includes social stigma, covert nature, and poor social awareness. The department is currently functioning with a team of scholarly faculties who strive to provide mental health services based on the latest evidence-based treatment protocol. With the aim of benefitting the underprivileged population, we have extended a helping hand."
}
const Psychiatry= () => {
  const GalleryData = getDepartmentGalleryData("phychiatry");

  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Psychiatry"} />

  
      <FeaturesTwo data={deptData}/>

      <DepartmentGallery title={deptData.title} GalleryData={GalleryData} />

      
    </>
  );
};

export default Psychiatry
;
