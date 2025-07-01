import { Link } from "react-router-dom";

const FooterOne = () => {

  const handleNavigate = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
  return (
    <footer className='footer bg-main-25 position-relative z-1'>

      <div className='py-120 '>
        <div className='container container-two'>
          <div className='row row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-5'>
            <div className='col' data-aos='fade-up' data-aos-duration={300}>
              <div className='footer-item'>
                <div className='footer-item__logo'>
                  <Link to='/'>
                    {" "}
                    <img src='https://takshashilauniv.ac.in/wp-content/uploads/2025/01/logo-new.png' alt='' />
                  </Link>
                </div>
                <p className='my-32'>
                  Takshashila University was established with the vision to recreate the glory of the ancient Takshashila, India’s oldest university of higher learning.
                </p>
                <div className="footer-socials">
                  <i onClick={()=>{handleNavigate('https://www.facebook.com/people/Takshashila-University/100083042965090')}} className='ph-bold ph-facebook-logo' />
                  <i onClick={()=>{handleNavigate('https://x.com/i/flow/login?redirect_after_login=%2Ftakshauniv')}} className='ph-bold ph-twitter-logo' />
                  <i onClick={()=>{handleNavigate('https://www.instagram.com/takshashilauniv/')}} className='ph-bold ph-instagram-logo' />
                  <i onClick={()=>{handleNavigate('')}} className='ph-bold ph-whatsapp-logo' />
                  <i onClick={()=>{handleNavigate('https://www.youtube.com/@takshashilauniversityofficial')}} className='ph-bold ph-youtube-logo' />

                </div>
               
              </div>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration={400}>
              <div className='footer-item'>
                <h4 className='footer-item__title mb-32'>Quick links</h4>
                <ul className='footer-menu'>
                  <li className='mb-16'>
                    <Link
                      to='/about-us'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      About us
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      to='/contact-us'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      Contact us
                    </Link>
                  </li>

                  <li className='mb-16'>
                    <Link
                      to='/dean'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      Dean
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration={600}>
              <div className='footer-item'>
                <h4 className='footer-item__title mb-32'>Committee cell</h4>
                <ul className='footer-menu'>
                  <li className='mb-16'>
                    <Link
                      to='/committee/general-harassment'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      Gender Harassment
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      to='/committee/anti-ragging'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      Anti Ragging
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      to='/courses'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      Curriculum Committee                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      to='/courses'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      Curriculum Committee
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      to='/committee/hospital-infection-control'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      Hospital Infection Control
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      to='/committee/Pharmacovigilance'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      Pharmacovigilance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration={800}>
              <div className='footer-item'>
                <h4 className='footer-item__title mb-32'>Contact Us</h4>
                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-thak'>
                    <i className='ph ph-phone' />
                  </span>
                  <div className=''>
                    <Link
                      to='/tel:(207)555-0119'
                      className='text-neutral-500 d-block hover-text-main-600 mb-4'
                    >
                      +91 94437 69196                    </Link>
                    <Link
                      to='/tel:(704)555-0127'
                      className='text-neutral-500 d-block hover-text-main-600 mb-0'
                    >
                      +91 94437 69196                    </Link>
                  </div>
                </div>
                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-thak'>
                    <i className='ph ph-envelope-open' />
                  </span>
                  <div className=''>
                    <Link
                      to='/mailto:dwallo@gmail.com'
                      className='text-neutral-500 d-block hover-text-main-600 mb-4'
                    >
                      dwallo@gmail.com
                    </Link>
                    <Link
                      to='/mailto:eduAll@gmail.com'
                      className='text-neutral-500 d-block hover-text-main-600 mb-0'
                    >
                      eduAll@gmail.com
                    </Link>
                  </div>
                </div>
                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-thak'>
                    <i className='ph ph-map-trifold' />
                  </span>
                  <div className=''>
                    <span className='text-neutral-500 d-block mb-4'>
                      Ongur, Tindivanam Taluk, Villupuram District,
                    </span>
                    <span className='text-neutral-500 d-block mb-0'>
                      Tamil Nadu – 604 305
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='container'>
        {/* bottom Footer */}
        <div className='bottom-footer bg-main-25 border-top border-dashed border-main-100 border-0 py-32'>
          <div className='container container-two'>
            <div className='bottom-footer__inner flex-between gap-3 flex-wrap'>
              <p className='bottom-footer__text'>
                {" "}
                Copyright © 2025 <span className='fw-semibold'>
                  Takshashila University{" "}
                </span>{" "}
                All Rights Reserved.
              </p>
              {/* <div className='footer-links'>
                <Link
                  to='#'
                  className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                >
                  Privacy Policy
                </Link>
                <Link
                  to='#'
                  className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                >
                  Terms &amp; Conditions
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
