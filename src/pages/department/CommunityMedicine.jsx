import Breadcrumb from "../../components/Breadcrumb";
import DepartmentGallery from "../../components/DepartmentGallery";
import FeaturesTwo from "../../components/FeaturesTwo";


const deptData = {
    mission: "To promote holistic community health through preventive care, education, research, and equitable healthcare delivery.",
    vision: "To build healthier communities by advancing public health practice, social responsibility, and evidence-based medicine.",
    title: "Community Medicine",
    para: "The Department of Community Medicine focuses on improving population health through disease prevention, health promotion, and primary health care. The department caters at community level through two health centers- Urban Health Training Centre at Tindivanam and Rural Health Training Centre at Mailam. Health needs of the population are measured and appropriate strategies are developed to improve the health status of the community.\n \nOur department is dedicated to training competent healthcare professionals who address community health needs through education, research, and active community engagement.The department provides early exposure of undergraduate students to community health care through Family Adoption Program.By integrating public health principles with real - world practice, we strive to promote equitable healthcare and sustainable health outcomes for all.The discipline bridges clinical medicine and public health by addressing social, behavioral, environmental, and economic determinants of health.It equips medical students with the skills to understand community disease patterns, plan and implement health interventions, evaluate health programs, and contribute to health policy."
}


const CommunityMedicine = () => {

    const GalleryData = [
        {
            img: '/assets/images/img/infra/beds.webp',
            name: ''
        },
        {
            img: '/assets/images/img/infra/medicine.webp',
            name: ''
        },
        {
            img: '/assets/images/img/infra/centre.webp',
            name: ''
        },
        {
            img: '/assets/images/img/infra/reception.webp',
            name: ''
        },
        {
            img: '/assets/images/img/infra/waiting.webp',
            name: ''
        },
        {
            img: '/assets/images/img/infra/reception2.webp',
            name: ''
        }
    ]
    return (
        <>
            <Breadcrumb heading={true} title={"Department of Community Medicine"} />
            <FeaturesTwo data={deptData} />
            {/* <DepartmentGallery title={deptData.title} GalleryData={GalleryData} /> */}
        </>
    );
};

export default CommunityMedicine;
