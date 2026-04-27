import Breadcrumb from "../../components/Breadcrumb";
import FeaturesTwo from "../../components/FeaturesTwo";


const deptData = {
  mission: "Loading...",
  vision: "Loading...",
  title: "Diagnostics Services",
  para: "At Takshashila medical college hospital, our Diagnostic Services Department is committed to delivering accurate, timely, and reliable diagnostic support to aid in the prevention, diagnosis, and management of diseases. Equipped with state-of-the-art technology and staffed by highly trained professionals, our diagnostic facilities play a vital role in patient care, education, and research."
}

const servicesAvailable = [
  "Clinical Laboratory Services including biochemistry, hematology, microbiology, and pathology.",
  "Imaging Services such as X-ray, ultrasound, CT scan, and MRI.",
  "Cardiac Diagnostics including ECG, echocardiography, and stress testing.",
  "Pulmonary Function Tests and other specialized diagnostic procedures.",
  "Preventive health check-ups and screening programs for early disease detection.",
];

const Diagnostics = () => {
  return (
    <>



      <Breadcrumb heading={true} title={"Department of Diagnostics Services"} />


      <FeaturesTwo data={deptData} />

      <section className="py-120">
        <div className="container">
          <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16">
              <h5 className="text-main-two-600 mb-0">Diagnostics Services</h5>
            </div>
            <h2 className="mb-24">Services Available</h2>
          </div>

          <div className="row gy-4">
            {servicesAvailable.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={service}>
                <div className="h-100 p-24 rounded-12 border border-neutral-30 bg-white">
                  <div className="w-48 h-48 rounded-circle bg-main-25 text-main-600 flex-center mb-16 fw-semibold">
                    {index + 1}
                  </div>
                  <p className="mb-0 text-neutral-700">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
};

export default Diagnostics;
