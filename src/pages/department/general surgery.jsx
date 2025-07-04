import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";

const deptData = {
  mission:
    "To provide comprehensive surgical care with the highest standards of ethics, professionalism, and compassion, while fostering an environment conducive to academic excellence and research.",
  vision:
    "To be a center of excellence in surgical care, education, and research, recognized nationally and globally.",
  title: "General Surgery",
  para:
    "The Department of General Surgery offers a wide range of surgical services for the diagnosis and treatment of various conditions involving the abdomen, skin, soft tissues, and endocrine system. The department provides outpatient consultation, minor procedures, and elective as well as emergency surgeries. Outpatient services are available from 8:30 am to 3:00 pm on all working days. The department also conducts specialty clinics in areas such as gastrointestinal surgery, hernia, breast, and thyroid disorders. Inpatient services are located on designated surgical floors with well-equipped operation theaters and post-operative care units.",
};

const GeneralSurgery = () => {
  return (
    <>
      <Breadcrumb heading={true} title={"Department of General Surgery"} />
      <FeaturesTwo data={deptData} />
    </>
  );
};

export default GeneralSurgery;
