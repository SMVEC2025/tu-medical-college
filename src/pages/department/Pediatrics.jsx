
import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";




const deptData = {
  mission:"To train UGs & PGs to have basic knowledge on assessment of optimal growth, development and nutrition of children and adolescents and to recognize and treat common paediatric illness.", 
  vision:"To create clinicians, competent in dealing with major health problems of children through excellence in teaching and innovative scientific research.",
  title:"Paediatrics",
  para:"The Department of Paediatrics is dedicated to delivering comprehensive healthcare services for infants, children, and adolescents. With a team of highly skilled paediatricians, nurses, and allied health professionals, we provide compassionate and evidence-based care tailored to the unique needs of each child.Our department offers a wide range of paediatric services, including preventive health care, immunization, nutritional guidance, and the diagnosis and management of both acute and chronic illnesses. We also support child growth and development monitoring through regular well-child visits.In addition to clinical services, the department is actively involved in undergraduate and postgraduate medical education, ensuring the next generation of healthcare professionals is well-equipped with the knowledge and skills required in paediatric medicine. Our faculty is committed to fostering a nurturing and intellectually stimulating environment that encourages clinical excellence and research.The Department of Paediatrics also collaborates with other specialties to provide multidisciplinary care for children with complex medical conditions, ensuring holistic and family-cantered care."
}
const Pediatrics= () => {
  return (
    <>
    
      

      <Breadcrumb heading={true} title={"Department of Paediatrics"} />

  
      <FeaturesTwo data={deptData}/>

      
    </>
  );
};

export default Pediatrics
;
