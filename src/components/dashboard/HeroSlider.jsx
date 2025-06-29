import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Button, Container } from "reactstrap";
import { sliderImages, sliderSettings } from "../../Constants";
// High-performance image component
const OptimizedSliderImage = React.memo(({ src, alt, index, isFirst = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  const handleLoad = () => {
    setIsLoaded(true);
    // Add zoom animation to first image
    if (isFirst && imgRef.current) {
      imgRef.current.classList.add("zoom-in", "active");
    }
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className="slider-img-wrapper">
      {!isLoaded && !hasError && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      {hasError && (
        <div className="image-error">
          <span>Image failed to load</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`slider-image ${isLoaded ? 'loaded' : ''}`}
        loading={isFirst ? "eager" : "lazy"} // First image loads immediately
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

const HeroSlider = React.memo(() => {
  const [isSliderReady, setIsSliderReady] = useState(false);

  // Preload first image for better LCP
  useEffect(() => {
    if (sliderImages.length > 0) {
      const firstImage = new Image();
      firstImage.src = sliderImages[0].image;
      firstImage.onload = () => setIsSliderReady(true);
      firstImage.onerror = () => setIsSliderReady(true); // Still show slider even if first image fails
    }
  }, []);

  return (
    <>
      <style>{`
        /* Performance-optimized styles */
        .slider-container {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .slider-content-box {
          position: absolute;
          top: 50%;
          left: 50px;
          transform: translateY(-50%);
          z-index: 20;
          background: rgba(255, 255, 255, 0.95);
          padding: 50px;
          border-radius: 16px;
          max-width: 650px;
          backdrop-filter: blur(20px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: slideInLeft 1s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }

        .slider-content-box span {
          color: #007bff;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 15px;
        }

        .slider-content-box h3 {
          font-size: 42px;
          font-weight: 800;
          margin: 0 0 25px 0;
          color: #1a1a1a;
          line-height: 1.2;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slider-content-box p {
          font-size: 16px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 35px;
          font-weight: 400;
        }

        .common-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          padding: 18px 40px;
          font-weight: 700;
          font-size: 16px;
          border-radius: 50px;
          color: white;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateZ(0);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
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

        /* Slider optimizations */
        .slick-slider {
          position: relative;
          height: 100vh;
        }

        .slick-list {
          height: 100vh;
        }

        .slick-track {
          height: 100vh;
        }

        .slider-img-box {
          height: 100vh !important;
          position: relative;
          overflow: hidden;
        }

        .slider-img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .slider-image.zoom-in.active {
          transform: scale(1.05) translateZ(0);
        }

        .slider-image.loaded {
          opacity: 1;
        }

        .image-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(102, 126, 234, 0.3);
          border-top: 4px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .image-error {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #666;
          font-size: 18px;
        }

        /* Slick dots customization */
        .slick-dots {
          bottom: 30px;
          z-index: 15;
        }

        .slick-dots li {
          margin: 0 5px;
        }

        .slick-dots li button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: 2px solid white;
          transition: all 0.3s ease;
        }

        .slick-dots li button:before {
          display: none;
        }

        .slick-dots li.slick-active button {
          background: white;
          transform: scale(1.3);
        }

        .slick-dots li button:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .slider-container {
            min-height: 70vh;
          }

          .slick-slider,
          .slick-list,
          .slick-track,
          .slider-img-box {
            height: 70vh !important;
          }

          .slider-content-box {
            left: 20px;
            right: 20px;
            padding: 30px;
            max-width: none;
            position: relative;
            top: auto;
            transform: none;
            margin-top: 40px;
            background: rgba(255, 255, 255, 0.98);
          }

          .slider-content-box h3 {
            font-size: 28px;
            margin-bottom: 20px;
          }

          .slider-content-box p {
            font-size: 15px;
            margin-bottom: 25px;
          }

          .common-btn {
            padding: 15px 30px;
            font-size: 15px;
            width: 100%;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .slider-content-box {
            padding: 25px;
          }

          .slider-content-box h3 {
            font-size: 24px;
          }

          .common-btn {
            padding: 12px 25px;
            font-size: 14px;
          }
        }

        /* Performance optimizations */
        .slider-container * {
          transform: translateZ(0);
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .slider-image,
          .common-btn,
          .slider-content-box {
            transition: none;
            animation: none;
          }
        }
      `}</style>

      <div className="slider-container unique">
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

        {isSliderReady && (
          <Slider {...sliderSettings}>
            {sliderImages.map(({ id, image, alt }, index) => (
              <div key={id} className="slider-img-box">
                <OptimizedSliderImage
                  src={image}
                  alt={alt || `Slide ${id}`}
                  index={index}
                  isFirst={index === 0}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
});

export default HeroSlider;