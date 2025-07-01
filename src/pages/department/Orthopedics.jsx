
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";

import Navbar from "../../components/Navbar";



const deptData = {
  mission:"To train the undergraduates in basic orthopaedic sciences and trauma care.To train the postgraduates in orthopaedic specialities like trauma, arthroplasty, arthroscopy, spine, paediatric orthopaedics, musculoskeletal disorders and tumors.To collaborate with national & international institutions for knowledge sharing & excellence.", 
  vision:"render high quality orthopaedic medical education to students, high quality patient care and ethical research to serve the community and become globally recognized centre of orthopaedic excellence.",
  title:"Orthopaedics",
  para:"The department of Orthopaedics, Takshashila Medical College, Puducherry is one of the premier departments in the field of orthopaedics in this part of the country. It is well equipped to treat various orthopaedic conditions, thus maintaining and improving the musculoskeletal health of the community. The department is well staffed for providing world-class education to the undergraduates and post-graduates. The staffs strive for utmost patient care, research and clinical teaching. Well organised sub-speciality services are also provided by the department by well-trained specialists catering to the need of all age groups- from paediatric to geriatric. The faculties besides being excellent clinicians and teachers are good researchers who constantly strive hard to contribute novel concepts and ideas to the orthopaedic world. Sure, a career in Orthopaedics at Takshashila is an extra-ordinary opportunity.In addition, the department also maintains the smooth functioning of 24 hour trauma centre. Trauma clinic is conducted on all days. There is a 24 hour trauma service supported blood bank facility, thus emergency cases are attended as 24 hours service by our duty specialists. The operation theatre is equipped with state-of-art facilities like C-arm image intensifier, arthroplasty, arthroscopy and spine instruments. The trauma operating room with sophisticated operating tables and image intensifier facilitate state-of-art fixation of fractures. (The department also supervises the artificial limb centre which provides custom-made orthosis and prosthesis.) Well-equipped physiotherapy and rehabilitation unit with state-of-art facilities come under the supervision of the department."
}
const Orthopedics = () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Orthopaedics"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default Orthopedics
;
