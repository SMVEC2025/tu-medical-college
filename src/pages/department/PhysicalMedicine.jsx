import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";

const deptData = {
  mission:
    "To restore function and improve quality of life for individuals with physical impairments or disabilities through compassionate, multidisciplinary rehabilitation services.",
  vision:
    "To be a leading center for excellence in physical medicine and rehabilitation, advancing patient care, education, and research in functional recovery and disability management.",
  title: "Physical Medicine & Rehabilitation",
  para:
    "The Department of Physical Medicine & Rehabilitation (PM&R) is dedicated to helping patients regain functional independence and improve their quality of life following injury, illness, or disability. The department provides comprehensive outpatient and inpatient rehabilitation services including physiotherapy, occupational therapy, pain management, electrotherapy, and musculoskeletal rehabilitation. Specialized clinics for stroke rehabilitation, spinal cord injuries, and pediatric rehabilitation are conducted regularly. The department is supported by a multidisciplinary team that includes physiatrists, therapists, psychologists, and nurses. Services are available from 8:30 am to 3:00 pm on all working days.",
};

const PhysicalMedicine = () => {
  return (
    <>
      <Breadcrumb heading={true} title={"Department of Physical Medicine & Rehabilitation"} />
      <FeaturesTwo data={deptData} />
    </>
  );
};

export default PhysicalMedicine;
