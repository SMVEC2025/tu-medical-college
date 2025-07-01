import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import GallerySection from "../components/GallerySection";
import Navbar from "../components/Navbar";

const GalleryPage = () => {
  return (
    <>
   
      <Navbar/>
      {/* Breadcrumb */}
      <Breadcrumb title={"Gallery"} />

      {/* GallerySection */}
      <GallerySection />


      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default GalleryPage;
