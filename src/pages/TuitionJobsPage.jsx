import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import HeaderOne from "../components/HeaderOne";
import TuitionJobs from "../components/TuitionJobs";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const TuitionJobsPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Tuition Jobs"} />

      {/* TuitionJobs */}
      <TuitionJobs />

      {/* CertificateOne */}
      <CertificateOne />
      
    </>
  );
};

export default TuitionJobsPage;
