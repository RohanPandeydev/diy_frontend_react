import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Slider from "react-slick";
import { Button, Container } from "reactstrap";
import { sliderImages, sliderSettings } from "../../Constants";

// Custom Arrow Components
// Custom Previous Arrow Component
const CustomPrevArrow = React.memo(({ className, onClick, currentSlide }) => {
  const isDisabled = currentSlide === 0;
 
  return (
    <button
      className={`custom-arrow custom-prev-arrow ${className || ''} ${isDisabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
      aria-label="Previous slide"
      aria-disabled={isDisabled}
      type="button"
      style={{
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        background: 'rgba(0, 0, 0, 0.5)',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        transition: 'all 0.3s ease'
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
  );
});

// Custom Next Arrow Component
const CustomNextArrow = React.memo(({ className, onClick, currentSlide, slideCount }) => {
  const isDisabled = currentSlide === slideCount - 1;
 
  return (
    <button
      className={`custom-arrow custom-next-arrow ${className || ''} ${isDisabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
      aria-label="Next slide"
      aria-disabled={isDisabled}
      type="button"
      style={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        background: 'rgba(0, 0, 0, 0.5)',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        transition: 'all 0.3s ease'
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  );
});

CustomPrevArrow.displayName = 'CustomPrevArrow';
CustomNextArrow.displayName = 'CustomNextArrow';

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
    setIsLoaded(false);
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
          transition: 'opacity 0.3s ease',
          display: hasError ? 'none' : 'block'
        }}
      />
    </div>
  );
});

OptimizedSliderImage.displayName = 'OptimizedSliderImage';

const HeroSlider = React.memo(() => {
  const [isSliderReady, setIsSliderReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Handle slider state changes
  const handleAfterChange = useCallback((current) => {
    setCurrentSlide(current);
  }, []);

  // Memoize slider settings to prevent recreation
  const optimizedSettings = useMemo(() => ({
    ...sliderSettings,
    lazyLoad: "ondemand",
    infinite: true, // Changed back to true for better UX
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
    // prevArrow: <CustomPrevArrow currentSlide={currentSlide} slideCount={sliderImages?.length || 0} />,
    // nextArrow: <CustomNextArrow currentSlide={currentSlide} slideCount={sliderImages?.length || 0} />,
    dots: false,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
        }
      }
    ]
  }), [currentSlide, handleAfterChange]);

  // Preload first image for better LCP
  useEffect(() => {
    if (sliderImages && sliderImages.length > 0) {
      const firstImage = new Image();
      firstImage.src = sliderImages[0].image;
      firstImage.onload = () => setIsSliderReady(true);
      firstImage.onerror = () => setIsSliderReady(true);
    } else {
      setIsSliderReady(true);
    }
  }, []);

  // Handle button click
  const handleButtonClick = useCallback(() => {
    // You can replace this with actual functionality
    console.log("Free Design & Estimate Consultation clicked!");
    alert("Free Design & Estimate Consultation is coming soon!");
  }, []);

  // Memoize slides to prevent recreation
  const slides = useMemo(() => {
    if (!sliderImages || sliderImages.length === 0) {
      return [];
    }
    
    return sliderImages.map(({ id, image }, index) => (
      <div key={id} className="slider-img-box">
        <OptimizedSliderImage
          src={image}
          alt={`PEB Structure Solution ${id}`}
          index={index}
          isFirst={index === 0}
        />
      </div>
    ));
  }, []);

  return (
    <>
      <style>{`
        .slider-container {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
        }
        
        .slider-container .slick-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .slider-content-box {
          position: absolute;
          top: 50%;
          left: 5%;
          transform: translateY(-50%);
          z-index: 100;
          width: 45%;
          max-width: 600px;
          min-width: 300px;
          text-align: left;
          padding: 40px;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 15px;
          backdrop-filter: blur(10px);
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
        .slick-slider, .slick-list, .slick-track {
          height: 100vh !important;
          min-height: 600px !important;
        }
        
        .slider-img-box {
          position: relative;
          width: 100%;
          height: 100vh !important;
          min-height: 600px !important;
          overflow: hidden;
        }
        
        .slider-img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
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
            left: 3%;
            width: 60%;
            max-width: 90%;
            padding: 30px;
          }
          .slider-title {
            font-size: 32px;
          }
          .slider-description {
            font-size: 14px;
          }
          .custom-arrow {
            width: 50px;
            height: 50px;
          }
          .custom-prev-arrow {
            left: 15px;
          }
          .custom-next-arrow {
            right: 15px;
          }
        }
        @media (max-width: 600px) {
          .slider-content-box {
            left: 2%;
            width: 90%;
            max-width: 95%;
            padding: 20px;
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
          .custom-arrow {
            width: 40px;
            height: 40px;
          }
          .custom-prev-arrow {
            left: 10px;
          }
          .custom-next-arrow {
            right: 10px;
          }
        }
        
        /* Replace the existing .custom-arrow styles with this: */
.custom-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: transparent; /* Changed from rgba(255, 255, 255, 0.9) */
  border: none;
  border-radius: 50%;
  display: flex !important;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff; /* Changed from #333 to white */
  box-shadow: none; /* Removed shadow */
}

.custom-arrow:hover {
  background: rgba(255, 255, 255, 0.1); /* Subtle hover effect */
  transform: translateY(-50%) scale(1.1);
  box-shadow: none; /* No shadow on hover */
}

.custom-arrow:active {
  transform: translateY(-50%) scale(0.95);
}

.custom-arrow:focus {
  outline: 3px solid #ffd700;
  outline-offset: 2px;
}

.custom-arrow.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.custom-prev-arrow {
  left: 30px;
}

.custom-next-arrow {
  right: 30px;
}

/* Arrow hover effects */
.custom-arrow:hover svg {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

/* Optional: Add a subtle backdrop for better visibility */
.custom-arrow svg {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

/* Mobile responsiveness */
@media (max-width: 900px) {
  .custom-arrow {
    width: 50px;
    height: 50px;
  }
  .custom-prev-arrow {
    left: 15px;
  }
  .custom-next-arrow {
    right: 15px;
  }
}

@media (max-width: 600px) {
  .custom-arrow {
    width: 40px;
    height: 40px;
  }
  .custom-prev-arrow {
    left: 10px;
  }
  .custom-next-arrow {
    right: 10px;
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
            onClick={handleButtonClick}
          >
            Get Your Free Design & Estimate Consultation Now!
          </Button>
        </div>
        
        {isSliderReady && slides.length > 0 && (
          <div role="region" aria-label="Image carousel">
            <Slider ref={sliderRef} {...optimizedSettings}>
              {slides}
            </Slider>
          </div>
        )}
        
        {isSliderReady && slides.length === 0 && (
          <div className="slider-img-box">
            <div className="image-error">
              <span>No images available</span>
            </div>
          </div>
        )}
      </section>
    </>
  );
});

HeroSlider.displayName = 'HeroSlider';

export default HeroSlider;