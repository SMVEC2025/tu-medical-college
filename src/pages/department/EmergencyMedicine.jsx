import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";



const deptData = {
    mission: "To deliver rapid, high-quality, and life-saving emergency care through skilled teams, advanced technology, and compassionate service.",
    vision: "To be a trusted center of excellence in emergency medicine, ensuring timely care and improved outcomes for every patient.",
    title: "Emergency Medicine",
    para: "The Emergency Medicine Department provides 24/7 rapid, coordinated care for medical, surgical, and trauma emergencies. Equipped with advanced technology and led by experienced emergency physicians, we ensure timely diagnosis and immediate life-saving interventions. Our patient-first approach prioritizes safety, efficiency, and compassionate care during every critical moment."
}
const EmergencyMedicine = () => {
    return (
        <>



            <Breadcrumb heading={true} title={"Department of Emergency Medicine"} />


            <FeaturesTwo data={deptData} />


        </>
    );
};

export default EmergencyMedicine;
