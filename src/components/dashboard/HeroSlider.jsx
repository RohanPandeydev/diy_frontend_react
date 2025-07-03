import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Slider from "react-slick";
import { Button, Container } from "reactstrap";
import { sliderImages, sliderSettings } from "../../Constants";

// Optimized image component with proper error handling and loading states
const OptimizedSliderImage = React.memo(({ src, alt, index, isFirst = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    if (isFirst && imgRef.current) {
      imgRef.current.classList.add("zoom-in", "active");
    }
  }, [isFirst]);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div className="slider-img-wrapper">
      {!isLoaded && !hasError && (
        <div className="image-placeholder" aria-label="Loading image">
          <div className="loading-spinner"></div>
        </div>
      )}
      {hasError && (
        <div className="image-error" role="alert">
          <span>Image failed to load</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`slider-image ${isLoaded ? 'loaded' : ''}`}
        loading={isFirst ? "eager" : "lazy"}
        fetchPriority={isFirst ? "high" : "low"}
        decoding={isFirst ? "sync" : "async"}
        onLoad={handleLoad}
        onError={handleError}
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
    </div>
  );
});

OptimizedSliderImage.displayName = 'OptimizedSliderImage';

const HeroSlider = React.memo(() => {
  const [isSliderReady, setIsSliderReady] = useState(false);
  const sliderRef = useRef(null);

  // Memoize slider settings to prevent recreation
  const optimizedSettings = useMemo(() => ({
    ...sliderSettings,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    accessibility: true,
    focusOnSelect: false,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  }), []);

  // Preload first image for better LCP
  useEffect(() => {
    if (sliderImages.length > 0) {
      const firstImage = new Image();
      firstImage.src = sliderImages[0].image;
      firstImage.onload = () => setIsSliderReady(true);
      firstImage.onerror = () => setIsSliderReady(true);
    }
  }, []);

  // Memoize slides to prevent recreation
  const slides = useMemo(() => 
    sliderImages.map(({ id, image }, index) => (
      <div key={id} className="slider-img-box">
        <OptimizedSliderImage
          src={image}
          alt={`PEB Structure Solution ${id}`}
          index={index}
          isFirst={index === 0}
        />
      </div>
    )), []);

  return (
    <>
      <style>{`
        .slider-container {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }
        .slider-content-box {
          position: absolute;
          top: 50%;
          left: 5vw;
          transform: translateY(-50%);
          z-index: 2;
          width: 40vw;
          min-width: 260px;
          max-width: 520px;
          text-align: left;
          padding: 0 2vw;
          box-sizing: border-box;
        }
        .slider-content-box span,
        .slider-content-box h1,
        .slider-content-box p,
        .slider-content-box .common-btn {
          text-shadow: 0 2px 8px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.25);
        }
        .slider-tagline {
          color: #ffd700;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 15px;
        }
        .slider-title {
          font-size: 38px;
          font-weight: 800;
          margin: 0 0 20px 0;
          color: #fff;
          line-height: 1.2;
        }
        .slider-description {
          font-size: 16px;
          line-height: 1.7;
          color: #fff;
          margin-bottom: 28px;
          font-weight: 400;
        }
        .common-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          padding: 16px 36px;
          font-weight: 700;
          font-size: 16px;
          border-radius: 50px;
          color: white;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .common-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        .common-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }
        .common-btn:hover::before {
          left: 100%;
        }
        .common-btn:active {
          transform: translateY(-1px) scale(1.01);
        }
        .common-btn:focus {
          outline: 2px solid #ffd700;
          outline-offset: 2px;
        }
        .slick-slider, .slick-list, .slick-track, .slider-img-box {
          height: 100vh !important;
          min-height: 350px;
        }
        .slider-img-box, .slider-img-wrapper {
          position: relative;
          overflow: hidden;
          height: 100vh !important;
        }
        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform;
        }
        .image-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
                      linear-gradient(-45deg, #f0f0f0 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
                      linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .image-error {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 16px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .zoom-in {
          animation: zoomIn 0.8s ease-out;
        }
        @keyframes zoomIn {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }
        @media (max-width: 900px) {
          .slider-content-box {
            left: 2vw;
            width: 60vw;
            max-width: 90vw;
            padding: 0 2vw;
          }
          .slider-title {
            font-size: 32px;
          }
          .slider-description {
            font-size: 14px;
          }
        }
        @media (max-width: 600px) {
          .slider-content-box {
            left: 0;
            width: 98vw;
            max-width: 98vw;
            padding: 0 2vw;
          }
          .slider-title {
            font-size: 28px;
          }
          .slider-tagline {
            font-size: 12px;
          }
          .common-btn {
            padding: 14px 28px;
            font-size: 14px;
          }
        }
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .slider-image,
          .common-btn,
          .loading-spinner {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
      
      <section className="slider-container unique" aria-label="Hero Slider">
        <div className="slider-content-box">
          <span className="slider-tagline">
            We provide cutting-edge, PEB Structure Solutions
          </span>
          <h1 className="slider-title">
            High-quality PEB and modular structures, ensuring
          </h1>
          <p className="slider-description">
            Explore our 3D Smart Building Planner, an intuitive digital tool
            that allows you to visualize, customize, and refine your
            prefabricated structure in real time. This immersive platform
            empowers you to experiment with layouts, optimize material usage,
            and perfect your design before execution—ensuring efficiency,
            cost-effectiveness, and sustainability from day one.
          </p>
          <Button 
            className="common-btn"
            aria-label="Get your free design and estimate consultation"
          >
            Get Your Free Design & Estimate Consultation Now!
          </Button>
        </div>
        
        {isSliderReady && (
          <div role="region" aria-label="Image carousel">
            <Slider ref={sliderRef} {...optimizedSettings}>
              {slides}
            </Slider>
          </div>
        )}
      </section>
    </>
  );
});

HeroSlider.displayName = 'HeroSlider';

export default HeroSlider;