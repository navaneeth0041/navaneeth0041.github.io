import React from 'react';
import Slider from "react-slick";
import './Prices.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Prizes() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="prizes-container">
      <h2 className="prizes-title">Game Prizes</h2>
      <Slider {...settings}>
        <div className="prize-card">
          <div className="prize-content"><img src="https://static.vecteezy.com/system/resources/previews/007/642/164/non_2x/headphone-earphone-headset-for-music-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-vector.jpg"></img></div>
        </div>
        <div className="prize-card">
          <div className="prize-content"></div>
        </div>
        <div className="prize-card">
          <div className="prize-content"></div>
        </div>
        <div className="prize-card">
          <div className="prize-content"></div>
        </div>
      </Slider>
    </div>
  );
}

export default Prizes;
