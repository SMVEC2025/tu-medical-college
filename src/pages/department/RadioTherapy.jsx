import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";

const deptData = {
    mission:
        "To deliver safe, precise, and compassionate radiation therapy to patients with cancer, utilizing advanced technologies and evidence-based practices to improve outcomes and quality of life.",
    vision:
        "To be a leading center of excellence in cancer treatment through innovation in radiation therapy, multidisciplinary collaboration, and a commitment to education and research.",
    title: "Radiotherapy",
    para:
        "The Department of Radiotherapy, also known as Radiation Oncology, is dedicated to the treatment of cancer using targeted radiation techniques. The department provides comprehensive care through external beam radiation therapy, brachytherapy, and advanced modalities like IMRT, IGRT, and stereotactic radiosurgery. Each treatment plan is customized by a team of radiation oncologists, medical physicists, and radiation technologists to ensure optimal care. The department works closely with surgical and medical oncology units to offer a multidisciplinary approach. Patient safety, comfort, and continuous monitoring are integral to all treatment processes. Services are available for both inpatient and outpatient cases, with facilities equipped to handle curative as well as palliative care.",
};

const RadioTherapy = () => {
    return (
        <>
            <Breadcrumb heading={true} title={"Department of Radiotherapy"} />
            <FeaturesTwo data={deptData} />
        </>
    );
};

export default RadioTherapy;
