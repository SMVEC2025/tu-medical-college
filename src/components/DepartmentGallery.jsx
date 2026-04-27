import React from 'react'
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import "./DepartmentGallery.css";

function DepartmentGallery({ title, GalleryData }) {

    return (
        <section className='gallery py-120'>
            <div className='container'>
                <div className='container'>
                    <div className='section-heading text-center'>
                        <div className='flex-align d-inline-flex gap-8 mb-16'>

                            <h5 className='text-main-two-600 mb-0'>{title}</h5>
                        </div>
                        <h2 className='mb-24'>Explore Our Department</h2>

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
                            <div className='department-gallery'>
                                <LightGallery
                                    speed={500}
                                    plugins={[lgThumbnail, lgZoom]}
                                    elementClassNames='department-gallery__grid'
                                >
                                    {GalleryData?.map((item, index) => (
                                        <a
                                            key={`${item.img}-${index}`}
                                            className='department-gallery__item position-relative rounded-12 overflow-hidden'
                                            href={item.img}
                                        >
                                            <img
                                                alt={item.name || `${title} gallery ${index + 1}`}
                                                src={item.img}
                                            />
                                        </a>
                                    ))}

                                </LightGallery>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DepartmentGallery
