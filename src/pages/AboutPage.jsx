
import AboutThree from "../components/AboutThree";
import Breadcrumb from "../components/Breadcrumb";
import ChooseUsOne from "../components/ChooseUsOne";
import HospitalFacility from "./department/HospitalFacility";


const AboutPage = () => {
  return (
    <>
     


      {/* HeaderOne */}

       
      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* AboutOne */}
      <AboutThree />

   

      {/* ChooseUsOne */}
      <ChooseUsOne />
      <HospitalFacility/>

     

    

     

      {/* FooterOne */}
      
    </>
  );
};

export default AboutPage;
