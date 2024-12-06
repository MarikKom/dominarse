import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../gallery_swiper.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import btnNext from '/images/btn-img-next-active.png'
import btnPrev from '/images/btn-img-prev-active.png'


const SwiperSlider = ({ images }) => {

  return (
  <div className='swiper__container'>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      initialSlide={3}
      slidesPerView={5}
      centeredSlides={true}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} data-swiper-slide-index={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            className="gallery-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className='swiper__navigation'>
      <div className='swiper-button-prev'>
        <img className='swiper-button-img' src={btnPrev} alt="Previous"/>
      </div>
      <div className='swiper-button-next'>
          <img className='swiper-button-img' src={btnNext} alt="Next" />
      </div>
    </div>
    </div>
  );
};

    

export default SwiperSlider;