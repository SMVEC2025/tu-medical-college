
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"To inculcate clinical skills, professionalism, teaching and leadership skills among students in ophthalmology.To strive for excellence in quality patient care and treatment, to reduce preventable and avoidable blindness.", 
  vision:"To impart holistic medical education, quality patient care and ethical research to become globally recognized centre of excellence for eye care.",
  title:"Ophthalmology",
  para:"The Department of Ophthalmology is dedicated to providing comprehensive eye care services with a focus on clinical excellence, cutting-edge research, and advanced surgical techniques. Our team of experienced ophthalmologists, optometrists, and support staff is committed to preserving and restoring vision for patients of all ages. We offer specialized care in the diagnosis and treatment of a wide range of eye conditions, including cataracts, glaucoma, retinal disorders, corneal diseases, paediatric ophthalmology, and oculoplastic surgery. Using the latest diagnostic tools and surgical innovations, we ensure that our patients receive the most effective and personalized treatment plans. In addition to patient care, the department actively engages in academic and research activities. We strive to train the next generation of eye care professionals through robust teaching programs and contribute to the advancement of ophthalmic knowledge through clinical and translational research."
}
const Ophthalmology = () => {
  return (
    <>
    
      <Navbar/>

      <Breadcrumb title={"Department of Ophthalmology"} />

  
      <FeaturesTwo data={deptData}/>

      <FooterThree />
    </>
  );
};

export default Ophthalmology
;
