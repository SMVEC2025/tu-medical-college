import { Link } from "react-router-dom";

const FeaturesTwo = ({ data }) => {
  return (
    <section className='features-two  py-120 position-relative overflow-hidden'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <img
        src='assets/images/shapes/shape4.png'
        alt=''
        className='shape six animation-walking'
      />
      <div className='container'>
        <div className='section-heading style-flex'>
          <div className=''>
            <h2 className='mb-24 wow bounceInLeft'>
              {data.title}
            </h2>
            <p style={{ width: "70%", whiteSpace: "pre-line" }}>{data.para} </p>
          </div>
          {/* <div className='section-heading__content wow bounceInRight'>
            <p className='text-line-2'>
              Explore new skills, deepen existing passions, and get lost in
              creativity. What you find just might...
            </p>
            <Link
              to='/course-list-view'
              className='item-hover__text flex-align d-inline-flex gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1 fw-semibold'
            >
              Read More
              <i className='ph ph-arrow-right' />
            </Link>
          </div> */}
        </div>
        <div className='row gy-4'>
          <div
            className='col-lg-6 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='text-center features-item animation-item bg-white border border-neutral-30 rounded-16 transition-1 '>
              <span className='mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle'>
                <i className="ph ph-shield-plus text-thak " style={{fontSize:"50px"}} />

              </span>
              <h4 className='mb-16 transition-1 item-hover__text'>
                MISSION
              </h4>
              <p className='transition-1 item-hover__text '>
                {data.mission}
              </p>
              <span className='item-hover__bg w-48 h-1 bg-neutral-500 mt-32' />
            </div>
          </div>
          <div
            className='col-lg-6 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <div className='text-center features-item  animation-item bg-white border border-neutral-30 rounded-16 transition-1'>
              <span className='mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle'>
                <i className="ph ph-eye text-thak " style={{fontSize:"50px"}} />

              </span>
              <h4 className='mb-16 transition-1 item-hover__text'>
                VISION
              </h4>
              <p className='transition-1 item-hover__text'>
                {data.vision}

              </p>
              <span className='item-hover__bg w-48 h-1 bg-neutral-500 mt-32' />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesTwo;
