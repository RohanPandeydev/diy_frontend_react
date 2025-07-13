import React, { useMemo, useCallback, useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Button, Container } from "reactstrap";
import { sliderImages, sliderSettings } from "../../Constants";

// Memoized slide component for better performance
const SlideItem = React.memo(({ id, image, isActive, priority }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  return (
    <div className="slider-img-box">
      <div className={`image-container ${imageLoaded ? 'loaded' : 'loading'}`}>
        <img
          src={image}
          alt={`Slide ${id}`}
          loading={priority ? "eager" : "lazy"}
          className="slider-image"
          onLoad={handleImageLoad}
          onError={handleImageError}
          decoding="async"
          fetchPriority={priority ? "high" : "low"}
        />
        {!imageLoaded && !imageError && (
          <div className="image-placeholder">
            <div className="spinner"></div>
          </div>
        )}
        {imageError && (
          <div className="image-error">
            <span>Failed to load image</span>
          </div>
        )}
      </div>
    </div>
  );
});

SlideItem.displayName = "SlideItem";

// Memoized content component
const HeroContent = React.memo(() => {
  const handleButtonClick = useCallback(() => {
    // Add your button click logic here
    console.log("Get consultation clicked");
  }, []);

  return (
    <div className="slider-content-box">
      <Container>
        <span className="hero-subtitle">
          We provide cutting-edge, PEB Structure Solutions
        </span>
        <h1 className="hero-title">
          High-quality PEB and modular structures, ensuring
        </h1>
        <p className="hero-description">
          Explore our 3D Smart Building Planner, an intuitive digital tool
          that allows you to visualize, customize, and refine your
          prefabricated structure in real time. This immersive platform
          empowers you to experiment with layouts, optimize material usage,
          and perfect your design before execution—ensuring efficiency,
          cost-effectiveness, and sustainability from day one.
        </p>
        <Button className="common-btn hero-cta" onClick={handleButtonClick}>
          Get Your Free Design & Estimate Consultation Now!
        </Button>
      </Container>
    </div>
  );
});

HeroContent.displayName = "HeroContent";

const HeroSlider = React.memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderReady, setIsSliderReady] = useState(false);
  const sliderRef = useRef(null);

  // Memoize slider settings with performance optimizations
  const optimizedSliderSettings = useMemo(() => ({
    ...sliderSettings,
    lazyLoad: "ondemand",
    waitForAnimate: false,
    useCSS: true,
    useTransform: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    onInit: () => {
      setIsSliderReady(true);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        }
      }
    ]
  }), [sliderSettings]);

  // Memoize slides with priority loading for first slide
  const memoizedSlides = useMemo(() => {
    return sliderImages.map((slide, index) => (
      <SlideItem
        key={slide.id}
        id={slide.id}
        image={slide.image}
        isActive={index === currentSlide}
        priority={index === 0} // First slide gets priority loading
      />
    ));
  }, [sliderImages, currentSlide]);

  // Preload next slide image
  useEffect(() => {
    if (isSliderReady && sliderImages.length > 1) {
      const nextSlideIndex = (currentSlide + 1) % sliderImages.length;
      const nextImage = new Image();
      nextImage.src = sliderImages[nextSlideIndex].image;
    }
  }, [currentSlide, sliderImages, isSliderReady]);

  // Intersection Observer for lazy initialization
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSliderReady(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      observer.observe(sliderElement);
    }

    return () => {
      if (sliderElement) {
        observer.unobserve(sliderElement);
      }
    };
  }, []);

  return (
    <div className="slider-container unique" ref={sliderRef}>
      <HeroContent />
      
      <div className="slider-wrapper">
        {isSliderReady ? (
          <Slider {...optimizedSliderSettings}>
            {memoizedSlides}
          </Slider>
        ) : (
          <div className="slider-loading">
            <div className="slider-skeleton">
              <div className="skeleton-image"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

HeroSlider.displayName = "HeroSlider";

export default HeroSlider;

// Additional CSS for performance optimizations (add to your CSS file)
/*

*/