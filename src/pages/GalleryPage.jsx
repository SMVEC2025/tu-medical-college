import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import GallerySection from "../components/GallerySection";
import Navbar from "../components/Navbar";

const GalleryPage = ({title}) => {
  return (
    <>
   
      
      {/* Breadcrumb */}
      <Breadcrumb title={title} />

      {/* GallerySection */}
      <GallerySection title={title} />


      {/* FooterOne */}
      
    </>
  );
};

export default GalleryPage;
