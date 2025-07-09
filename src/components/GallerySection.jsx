import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
const GallerySection = () => {
  const GalleryData =[
    {
      img:'assets/images/img/infra/beds.webp',
      name:''
    },
    {
      img:'assets/images/img/infra/medicine.webp',
      name:''
    },
    {
      img:'assets/images/img/infra/centre.webp',
      name:''
    },
    {
      img:'assets/images/img/infra/reception.webp',
      name:''
    },
    {
      img:'assets/images/img/infra/waiting.webp',
      name:''
    },
    {
      img:'assets/images/img/infra/reception2.webp',
      name:''
    }
  ]
  return (
    <section className='gallery py-120'>
      <div className='container'>
        <div className='container'>
          <div className='section-heading text-center'>
            <div className='flex-align d-inline-flex gap-8 mb-16'>
              
              <h5 className='text-main-two-600 mb-0'>Infrastructure</h5>
            </div>
            <h2 className='mb-24'>Explore Our Hospital</h2>
            <p className=''>
              {/* Students can register for the workshops through the EduAll
              platform. Limited seats are available */}
            </p>
          </div>
          <div className='text-center'>
           
          </div>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='pills-education'
              role='tabpanel'
              aria-labelledby='pills-education-tab'
              tabIndex={0}
            >
              {/* Masonry Start */}

              <div className='masonry'>
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                 {GalleryData?.map((item,index)=>(
                   <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href={item.img}
                  >
                    <img
                      alt='img2'
                      src={item.img}
                    />
                  </a>
                 ))}
                 
                </LightGallery>
              </div>
              {/* Masonry End */}
            </div>
            <div
              className='tab-pane fade'
              id='pills-University'
              role='tabpanel'
              aria-labelledby='pills-University-tab'
              tabIndex={0}
            >
              {/* Masonry Start */}
              <div className='masonry'>
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img1.png'
                  >
                    <img
                      alt='img1'
                      src='assets/images/thumbs/gallery-img1.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img2.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img2.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img3.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img3.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img4.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img4.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img5.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img5.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img6.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img6.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img7.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img7.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img8.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img8.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img9.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img9.png'
                    />
                  </a>
                </LightGallery>
              </div>
              {/* Masonry End */}
            </div>
            <div
              className='tab-pane fade'
              id='pills-Tutors'
              role='tabpanel'
              aria-labelledby='pills-Tutors-tab'
              tabIndex={0}
            >
              {/* Masonry Start */}
              <div className='masonry'>
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img1.png'
                  >
                    <img
                      alt='img1'
                      src='assets/images/thumbs/gallery-img1.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img2.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img2.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img3.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img3.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img4.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img4.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img5.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img5.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img6.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img6.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img7.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img7.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img8.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img8.png'
                    />
                  </a>
                  <a
                    className='masonry__item position-relative rounded-12 overflow-hidden'
                    href='assets/images/thumbs/gallery-img9.png'
                  >
                    <img
                      alt='img2'
                      src='assets/images/thumbs/gallery-img9.png'
                    />
                  </a>
                </LightGallery>
              </div>
              {/* Masonry End */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
