import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };

  const imgData = [
    { src: "https://m.media-amazon.com/images/I/61JJhixcqkL._SX3000_.jpg" },
    { src: "https://m.media-amazon.com/images/I/61BARAaP3zL._SX3000_.jpg" },
    { src: "https://m.media-amazon.com/images/I/61DZSlMBUEL._SX3000_.jpg" },
    { src: "https://m.media-amazon.com/images/I/61N0dQibnvL._SX3000_.jpg" },
    { src: "https://m.media-amazon.com/images/I/71qjAo9D-LL._SX3000_.jpg" },
  ];

  return (
    <section>
      <Slider {...settings}>
        {imgData.map((el, index) => (
          <div key={index}>
            <img src={el.src} className="w-100" alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
