import React, { useEffect, useRef } from 'react';
import { Button } from 'reactstrap';
import ImagePath from '../assets/ImagePath';

const slides = [
  {
    heading: "We provide cutting-edge, PEB Structure Solutions",
    title: 'High-quality PEB and modular structures, ensuring',
    image: ImagePath?.Slider1,
    des: 'Explore our 3D Smart Building Planner...',
  },
  {
    heading: "We provide cutting-edge, PEB Structure Solutions",
    title: 'High-quality PEB and modular structures, ensuring',
    image: ImagePath?.Slider2,
    des: 'Explore our 3D Smart Building Planner...',
  },
  // Additional slides...
];

const DashboardSlider = React.memo(() => {
  const slideRef = useRef(null);

  const nextSlide = () => {
    const slide = slideRef.current;
    if (slide && slide.children.length > 0) {
      const firstElement = slide.children[0];
      slide.appendChild(firstElement);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-slider">
      <div className="slide" ref={slideRef}>
        {slides.map((item, index) => (
          <div className="item" key={index} style={{ backgroundImage: `url(${item.image})` }}>
            <div className="content">
              <div className="heading">{item.heading}</div>
              <div className="name">{item.title}</div>
              <div className="des">{item.des}</div>
              <Button className="btn common-btn">
                Get Your Free Design & Estimate Consultation Now!
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default DashboardSlider;
