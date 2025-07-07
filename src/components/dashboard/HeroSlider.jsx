import React from "react";
import Slider from "react-slick";
import { Button, Container } from "reactstrap";
import { sliderImages, sliderSettings } from "../../Constants";

const HeroSlider = React.memo(() => {
  return (
    <div className="slider-container unique">
      <div className="slider-content-box">
        <Container>
          <span>We provide cutting-edge, PEB Structure Solutions</span>
          <h3>High-quality PEB and modular structures, ensuring</h3>
          <p>
            Explore our 3D Smart Building Planner, an intuitive digital tool
            that allows you to visualize, customize, and refine your
            prefabricated structure in real time. This immersive platform
            empowers you to experiment with layouts, optimize material usage,
            and perfect your design before execution—ensuring efficiency,
            cost-effectiveness, and sustainability from day one.
          </p>
          <Button className="common-btn">
            Get Your Free Design & Estimate Consultation Now!
          </Button>
        </Container>
      </div>

      <Slider {...sliderSettings} lazyLoad="ondemand">
        {sliderImages.map(({ id, image }) => (
          <div key={id} className="slider-img-box">
            <img
              src={image}
              alt={`Slide ${id}`}
              loading="lazy"
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default HeroSlider;
