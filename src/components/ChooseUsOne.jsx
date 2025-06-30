import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const ChooseUsOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='choose-us pt-120 position-relative z-1 mash-bg-main mash-bg-main-two'>

      <div className='container'>
        <div className='row gy-4'>
          <div className='col-xl-9'>
            <div className='choose-us__content'>
              <div className='mb-40'>
                <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                  <h5 className='text-thak mb-0'>Why Choose Us</h5>
                </div>
                <h2 className='mb-24  wow bounceIn'>
Where future doctors are shaped, lives are healed, and humanity is served.                </h2>
                <p className='text-neutral-500   wow bounceInUp'>
                  Choosing the right medical institution is the first step toward becoming a great healer. At Takshashila Medical College & Hospital, we offer a dynamic learning environment backed by experienced faculty, advanced clinical facilities, and a patient-centered approach. Our commitment to academic rigor, ethical practice, and holistic development ensures that every student is empowered to lead, innovate, and serve with distinction in the ever-evolving world of medicine.
                </p>
              </div>
              <ul>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={200}
                >
                  <span className='flex-shrink-0 text-xl text-thak d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    Experienced Faculty & Clinicians

                  </span>
                </li>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={400}
                >
                  <span className='flex-shrink-0 text-xl text-thak d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    Fully Equipped Teaching Hospital

                  </span>
                </li>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={500}
                >
                  <span className='flex-shrink-0 text-xl text-thak d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    Research-Driven Learning

                  </span>
                </li>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={500}
                >
                  <span className='flex-shrink-0 text-xl text-thak d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    Patient-Centric Approach

                  </span>
                </li>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={500}
                >
                  <span className='flex-shrink-0 text-xl text-thak d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    Vibrant Campus Life
                  </span>
                </li>
              </ul>
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
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </section>
  );
};

export default ChooseUsOne;
