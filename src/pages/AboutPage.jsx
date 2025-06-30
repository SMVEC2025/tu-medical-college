
import AboutThree from "../components/AboutThree";
import BrandTwo from "../components/BrandTwo";
import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import ChooseUsOne from "../components/ChooseUsOne";
import CounterOne from "../components/CounterOne";
import FooterOne from "../components/FooterOne";
import Navbar from "../components/Navbar";
import TestimonialsOne from "../components/TestimonialsOne";


const AboutPage = () => {
  return (
    <>
     


      {/* HeaderOne */}

       <Navbar/>
      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* AboutOne */}
      <AboutThree />

   

      {/* ChooseUsOne */}
      <ChooseUsOne />

     

    

     

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default AboutPage;
