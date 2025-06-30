import CountUp from "react-countup";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

const AboutThree = () => {
  return (
    <section className='about-three py-120 position-relative z-1 bg-main-25 overflow-hidden'>
      <div className='position-relative'>
        <div className='container'>
          <div className='row gy-xl-0 gy-5 flex-wrap-reverse align-items-center'>
            <div className='col-xl-6 pe-xl-5'>
              <div className='about-three-thumbs position-relative me-xxl-5'>
                <div className='row gy-4'>
                  <div className='col-sm-8'>
                    <img
                      src='https://www.eduska.com/assets/user_photo/45bdf69342120e8dbcf39ecf779d1f99.jpg'
                      style={{ width: "464px", height: "600px", objectFit: 'cover' }}
                      alt=''
                      className='about-three-thumbs__one rounded-16 w-100'
                      data-tilt=''
                      data-tilt-max={16}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                    />
                  </div>
                  <div className='col-sm-4'>
                    <div
                      className='bg-color-thak rounded-16 text-center py-24 px-2 mb-24'
                      data-tilt=''
                      data-tilt-max={10}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-transition='1s'
                      data-tilt-full-page-listening=''
                    >
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) => (
                          <h2 className='mb-16 text-white counter'>
                            {isVisible ? <CountUp end={200} /> : null}+
                          </h2>
                        )}
                      </VisibilitySensor>
                      <span className='text-white'>
                        Doctors
                      </span>
                      {/* <div className='enrolled-students style-two mt-12'>
                        <img
                          src='assets/images/thumbs/enroll-student-img1.png'
                          alt=''
                          className='w-32 h-32 rounded-circle object-fit-cove transition-2'
                        />
                        <img
                          src='assets/images/thumbs/enroll-student-img2.png'
                          alt=''
                          className='w-32 h-32 rounded-circle object-fit-cove transition-2'
                        />
                        <img
                          src='assets/images/thumbs/enroll-student-img3.png'
                          alt=''
                          className='w-32 h-32 rounded-circle object-fit-cove transition-2'
                        />
                        <img
                          src='assets/images/thumbs/enroll-student-img4.png'
                          alt=''
                          className='w-32 h-32 rounded-circle object-fit-cove transition-2'
                        />
                        <img
                          src='assets/images/thumbs/enroll-student-img5.png'
                          alt=''
                          className='w-32 h-32 rounded-circle object-fit-cove transition-2'
                        />
                        <img
                          src='assets/images/thumbs/enroll-student-img6.png'
                          alt=''
                          className='w-32 h-32 rounded-circle object-fit-cove transition-2'
                        />
                      </div> */}
                    </div>
                    <img
                      src='https://takshashilauniv.ac.in/wp-content/uploads/2025/03/06.webp'
                      alt=''
                      className='about-three-thumbs__two rounded-16 w-100'
                      data-tilt=''
                      data-tilt-max={10}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='about-three-content'>
                <div className='mb-40'>
                  <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>

                    <h5 className='text-thak mb-0'>Welcome to Takshashila Medical College & Hospital
                    </h5>
                  </div>
                  <h2 className='mb-24 wow bounceInRight'>
                    Shaping Healthcare. Empowering Healers. Serving Humanity.
                  </h2>
                  <p className='text-neutral-500  wow bounceInUp'>
                    At Takshashila Medical College & Hospital, we are not just a center of learning—we are a transformative force in the world of healthcare. Nestled in the culturally rich and vibrant state of Tamil Nadu, our institution stands as a beacon of academic excellence, cutting-edge medical research, and compassionate clinical practice. We are dedicated to nurturing a new generation of future-ready doctors who are not only skilled in medical science but also grounded in ethics, empathy, and a deep commitment to humanity. Through our state-of-the-art infrastructure, experienced faculty, and a multidisciplinary teaching hospital, we provide an environment where innovation thrives and healing begins. Every stride we take is driven by our unwavering mission to uplift communities, enhance lives, and redefine the standards of modern medical education and healthcare delivery. At Takshashila, we don't just treat illnesses—we empower healers, inspire breakthroughs, and serve humanity with heart and purpose.








                  </p>
                </div>
               
                <div className='pt-40 border-top border-neutral-50 mt-40 border-dashed border-0'>
                  <Link
                    to='/about'
                    className='btn bg-color-thak rounded-pill flex-align d-inline-flex gap-8'
                  >
                    Read More
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
