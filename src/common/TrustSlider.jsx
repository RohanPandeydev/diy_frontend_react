import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from 'react-slick';
import ImagePath from '../assets/ImagePath';

const imageList = [
  { img: ImagePath.downSlider1 },
  { img: ImagePath.downSlider2 },
  { img: ImagePath.downSlider3 },
  { img: ImagePath.downSlider4 },
  { img: ImagePath.downSlider5 },
];

const TrustSlider = () => {
  const settings = {
    infinite: true,
    speed: 8000,             // Reduced speed
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: false,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="trust-slider">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="trust-slider-container">
              <h2>
                Trusted by Engineering Visionaries and Industrial Innovators Worldwide
              </h2>
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
                      style={{ width: '100%', padding: '0 5px', borderRadius: '8px' }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
          <Col md={6}>
            <div className="trust-map-img-box">
              <img
                src={ImagePath.Map}
                alt="map"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default React.memo(TrustSlider);
