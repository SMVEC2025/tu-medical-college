import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import HeaderOne from "../components/HeaderOne";
import ProductsInner from "../components/ProductsInner";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const ProductPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Products"} />

      {/* ProductsInner */}
      <ProductsInner />

      {/* CertificateOne */}
      <CertificateOne />
      
    </>
  );
};

export default ProductPage;
