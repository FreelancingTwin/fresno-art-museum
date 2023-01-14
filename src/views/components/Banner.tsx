import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/autoplay"
import "swiper/css/effect-fade"

const Banner = () => {
  return (
     <Swiper
     className="banner"
      modules={[Autoplay]}
      centeredSlides={true}
      autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      speed={1500}
      loop={true}
      spaceBetween={5}
      slidesPerView={'auto'}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="timings">
        <div>
        Monday 10 am - 10 pm
        </div>
        </SwiperSlide>
      <SwiperSlide className="timings">Tuesday 10 am - 10 pm</SwiperSlide>
      <SwiperSlide className="timings">Thursday 10 am - 10 pm</SwiperSlide>
      <SwiperSlide className="timings">Wednesday 10am - 10pm</SwiperSlide>
      <SwiperSlide className="timings">Friday 10 am - 10 pm</SwiperSlide>
      <SwiperSlide className="timings">Saturday 10 am - 10 pm</SwiperSlide>
      <SwiperSlide className="timings">Sunday 10 am - 10 pm</SwiperSlide>
    </Swiper>
  )
}

export default Banner


