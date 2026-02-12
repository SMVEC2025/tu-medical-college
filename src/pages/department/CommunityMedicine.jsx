import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";


const deptData = {
    mission: "To promote holistic community health through preventive care, education, research, and equitable healthcare delivery.",
    vision: "To build healthier communities by advancing public health practice, social responsibility, and evidence-based medicine.",
    title: "Community Medicine",
    para: "The department of Community Medicine focuses on improving population health through disease prevention, health promotion, and primary health care. Health needs of populations are measured and appropriate strategies are developed to improve the health status of the community. Our department is dedicated to training competent healthcare professionals who address community health needs through education, research, and active community engagement. By integrating public health principles with real-world practice, we strive to promote equitable healthcare and sustainable health outcomes for all."
}
const CommunityMedicine = () => {
    return (
        <>



            <Breadcrumb heading={true} title={"Department of Community Medicine"} />


            <FeaturesTwo data={deptData} />


        </>
    );
};

export default CommunityMedicine;
