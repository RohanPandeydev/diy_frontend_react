import React from "react";
import Slider from "react-slick";
import { Button, Container } from "reactstrap";
import { sliderImages, sliderSettings } from "../../Constants";

const HeroSlider = () => {
  return (
    <div className="slider-container">
      <Container>
        <div className="slider-content-box">
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
        </div>
      </Container>

      <Slider
        {...sliderSettings}
        // Reduce slides rendered at once to improve render speed
        lazyLoad="ondemand"
        // You can also adjust 'initialSlide' or 'slidesToShow' in sliderSettings if needed
      >
        {sliderImages.map(({ id, image }) => (
          <div key={id} className="slider-img-box">
            <img
              src={image}
              alt={`Slider ${id}`}
              loading="lazy" // Lazy load to reduce initial load blocking
              className="slider-image"
              style={{
                width: "100%",
                height: "100%",
                transition: "transform 0.5s ease", // reduce transition duration
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
