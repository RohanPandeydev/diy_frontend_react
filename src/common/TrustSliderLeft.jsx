import React from 'react';
import Slider from 'react-slick';
import ImagePath from '../assets/ImagePath';

const imageList = [
  { img: ImagePath.downSlider1 },
  { img: ImagePath.downSlider2 },
  { img: ImagePath.downSlider3 },
  { img: ImagePath.downSlider4 },
  { img: ImagePath.downSlider5 },
];

const TrustSliderLeft = React.memo(() => {
  const settings = {
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: false,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="trust-slider-container">
      <h2>Trusted by Engineering Visionaries and Industrial Innovators Worldwide</h2>
      <p>
        Trusted by engineering and industrial leaders for delivering
        innovative, reliable, and scalable prefab building solutions.
      </p>
      <hr style={{ borderColor: "#001524", borderWidth: "1px" }} />
      <Slider {...settings}>
        {imageList.map((item, index) => (
          <div key={index}>
            <img
              src={item.img}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default TrustSliderLeft;
