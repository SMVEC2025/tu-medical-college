
import Breadcrumb from "../../components/Breadcrumb";
import DepartmentGallery from "../../components/DepartmentGallery";
import FeaturesTwo from "../../components/FeaturesTwo";
import { getDepartmentGalleryData } from "../../data/departmentGalleries";



const deptData = {
    mission: "To provide comprehensive, compassionate, and evidence-based care for the prevention, diagnosis, and management of respiratory diseases.",
    vision: "To be a leading pulmonology department delivering excellence in lung health, research, and patient-centered care.",
    title: "Pulmonary Medicine",
    para: "The Department of Pulmonary Medicine provides comprehensive, evidence-based care for respiratory and sleep-related disorders using modern diagnostic facilities.It is actively involved in teaching, clinical training, and research to promote academic excellence. The department is committed to improving lung health through quality care and community outreach."
}
const PulmonaryMedicine = () => {
    const GalleryData = getDepartmentGalleryData("pulmonary");

    return (
        <>



            <Breadcrumb heading={true} title={"Department of Pulmonary Medicine"} />


            <FeaturesTwo data={deptData} />

            <DepartmentGallery title={deptData.title} GalleryData={GalleryData} />


        </>
    );
};

export default PulmonaryMedicine
    ;
