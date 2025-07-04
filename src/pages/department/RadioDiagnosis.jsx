import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";

const deptData = {
  mission:
    "To provide accurate, timely, and high-quality diagnostic imaging services to support clinical decision-making, with a commitment to safety, innovation, and excellence in patient care.",
  vision:
    "To be a leader in radiological sciences through advancements in imaging technology, education, and research, improving outcomes across all medical specialties.",
  title: "Radio-Diagnosis",
  para:
    "The Department of Radio-Diagnosis plays a crucial role in the diagnosis and management of various diseases through advanced imaging techniques. The department offers a comprehensive range of imaging services including X-ray, ultrasound, Doppler studies, CT scan, MRI, mammography, and interventional radiology procedures. These services are available for both outpatient and inpatient departments. The imaging unit is equipped with modern, high-resolution machines operated by skilled radiologists and trained technicians. The department also supports emergency imaging services 24/7 and actively contributes to academic training for medical and allied health students.",
};

const RadioDiagnosis = () => {
  return (
    <>
      <Breadcrumb heading={true} title={"Department of Radio-Diagnosis"} />
      <FeaturesTwo data={deptData} />
    </>
  );
};

export default RadioDiagnosis;