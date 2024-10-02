import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; 
import './Prices.css'; 

function Prizes() {
  return (
    <div className="prizes-container">
      <h1 className="prizes-title">Game Prizes</h1>
      <Swiper
        spaceBetween={90}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={false} 
        navigation={true} 
        breakpoints={{
          640: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 }, 
        }}
        className="slider"
        modules={[Autoplay]} 
      >
        <SwiperSlide>
          <div className="prizebox"><img src='https://img.freepik.com/premium-photo/minimalist-white-headphones-with-4k-hd-technology_899449-18119.jpg'></img></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="prizebox"><img src='https://imageio.forbes.com/specials-images/imageserve/5fb3d1fa8e17f0f68a05b87f/The-new-MacBook-Air-with-M1-processor-/960x0.jpg?format=jpg&width=960'></img></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="prizebox"><img src='https://m.media-amazon.com/images/I/817dgnh61GL.jpg'></img></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="prizebox"><img src='https://img.freepik.com/premium-photo/minimalist-white-headphones-with-4k-hd-technology_899449-18119.jpg'></img></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="prizebox"><img src='https://img.freepik.com/premium-photo/minimalist-white-headphones-with-4k-hd-technology_899449-18119.jpg'></img></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Prizes;
