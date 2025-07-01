import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { LuAmbulance } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { GiHospital } from "react-icons/gi";
import { GiMedicines } from "react-icons/gi";
import { GrWheelchair } from "react-icons/gr";
import { LiaHospital } from "react-icons/lia";

const ChooseUsOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='choose-us pb-100 pt-120 position-relative z-1 mash-bg-main mash-bg-main-two'>

      <div className='container'>
        <div className='row gy-4'>
          <div className='col-xl-12'>
            <div className='choose-us__content'>
              <div className='mb-40 col-lg-8'>
                <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                  <h5 className='text-thak mb-0'>Why Choose Us</h5>
                </div>
                <h2 className='mb-24  wow bounceIn'>
                  Where future doctors are shaped, lives are healed, and humanity is served.                </h2>
                <p className='text-neutral-500   wow bounceInUp'>
                  Choosing the right medical institution is the first step toward becoming a great healer. At Takshashila Medical College & Hospital, we offer a dynamic learning environment backed by experienced faculty, advanced clinical facilities, and a patient-centered approach. Our commitment to academic rigor, ethical practice, and holistic development ensures that every student is empowered to lead, innovate, and serve with distinction in the ever-evolving world of medicine.
                </p>
              </div>
             <div className="choouse-us-high">
              <div className="con">
                <span><FaUserDoctor/></span>
                <h5>Experienced Faculty & Clinicians</h5>
              </div>
               <div className="con">
                <span><LiaHospital/></span>
                <h5>Fully Equipped Teaching Hospital</h5>
              </div> <div className="con">
                <span><GiMedicines/></span>
                <h5>Research-Driven Learning</h5>
              </div> <div className="con">
                <span><GrWheelchair/></span>
                <h5>Patient-Centric Approach</h5>
              </div> <div className="con">
                <span><GiHospital/></span>
                <h5>Vibrant Campus Life</h5>
              </div>

             </div>
              {/* <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                <Link
                  to='/about'
                  className='btn bg-color-thak rounded-pill flex-align d-inline-flex gap-8'
                >
                  Read More
                  <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                </Link>
              </div> */}
            </div>
          </div>

        </div>
      </div>
     
    </section>
  );
};

export default ChooseUsOne;
