import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay"
import "swiper/css/effect-fade"

const Hero = () => {
  return (
    // <div className="hero">
    //     <img className="heroImage" src="" alt=""/>
    //     <h1 className="heroImageTagline">lorem30d dfdfdfd  fdfdkfj dkfjdkfj kdf dlkfjdl jdklfj dlj dj ldjdjlfj oijdlf jdlkfj d  ds d</h1>
    // </div>
     <Swiper
     className="swiper heroSwiper"
      modules={[Autoplay, EffectFade]}
      effect="fade"
      centeredSlides={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >

      <SwiperSlide className="swiperSlide hero">
        {/* <div className="hero">
        </div> */}
          <img className="heroImage" src="/assets/Art-Dyson-flash.jpg" alt="Dyson's Gallery"/>
          <h1 className="heroImageTagline">Ary-Dyson-Flash's Gallery</h1>
     </SwiperSlide>

      <SwiperSlide className="swiperSlide hero">
         {/* <div className="hero">
        </div> */}
          <img className="heroImage" src="/assets/Bruce-Beasley-flash.jpg" alt="Bruce's Gallery"/>
          <h1 className="heroImageTagline">Bruce-Beasley-flash's Gallery</h1>
      </SwiperSlide>
  
      <SwiperSlide className="swiperSlide hero">
         {/* <div className="hero">
        </div> */}
          <img className="heroImage" src="/assets/Lang-Harris-flash.jpg" alt="Harris' Gallery"/>
          <h1 className="heroImageTagline">Lang-Harris-flash's Gallery</h1>
      </SwiperSlide>

      <SwiperSlide className="swiperSlide hero">
         {/* <div className="hero">
        </div> */}
          <img className="heroImage" src="/assets/Lang-Harris-flash.jpg" alt=" Harris' Gallery"/>
          <h1 className="heroImageTagline">Lang-Harris-flash's Gallery</h1>
      </SwiperSlide>

      <SwiperSlide className="swiperSlide hero">
         {/* <div className="hero">
        </div> */}
          <img className="heroImage" src="/assets/Olivera-flash.jpg" alt="Olivera's Gallery"/>
          <h1 className="heroImageTagline">Olivera-flash's Gallery</h1>
      </SwiperSlide>

    </Swiper>
  )
}

export default Hero
