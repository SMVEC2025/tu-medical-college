import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterTwo = () => {
  return (
    <section className='counter-three py-120 bg-main-25'>
      <div className='container'>
        <div className='p-16 rounded-16 bg-white'>
          <div className='row gy-4'>
            <div
              className='col-xl-3 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={200}
            >
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className="ph ph-clock-afternoon"></i>                </span>

                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  <h5 className='display-four mb-16 text-neutral-600 counter'>
                    24/7 Emergency & Trauma Care

                  </h5>

                </VisibilitySensor>

              </div>
            </div>
            <div
              className='col-xl-3 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={400}
            >
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className="ph ph-heartbeat"></i>
                </span>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  <h5 className='display-four mb-16 text-neutral-600 counter'>
                    ICU, NICU, and Dialysis Units

                  </h5>
                </VisibilitySensor>

              </div>
            </div>
            <div
              className='col-xl-3 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className="ph ph-stethoscope"></i>
                </span>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  <h5 className='display-four mb-16 text-neutral-600 counter'>
                    CT, MRI & Diagnostic Labs

                  </h5>
                </VisibilitySensor>

              </div>
            </div>
            <div
              className='col-xl-3 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className="ph ph-drop"></i>
                </span>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  <h5 className='display-four mb-16 text-neutral-600 counter'>
                    Pharmacy and Blood Bank Services


                  </h5>
                </VisibilitySensor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterTwo;
