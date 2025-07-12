import React, { useState, lazy, Suspense, useCallback, useMemo, useEffect, useRef } from "react";
import { Col, Container, Row } from "reactstrap";

// Critical components - loaded immediately
import NavBar from "../common/NavBar";
import OurVision from "../common/OurVision";
import CounterCard from "../common/CounterCard";
import WaveWrapper from "../common/WaveWrapper";
import Footer from "../common/Footer";
import Performance from "../components/dashboard/Performance";
import WeDo from "../components/dashboard/WeDo";
import WhyChoose from "../components/dashboard/WhyChoose";
import WeOffer from "../components/dashboard/WeOffer";
import TakeAction from "../components/dashboard/TakeAction";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";

// Critical above-the-fold component with prefetch hints
const HeroSlider = lazy(() => {
  // Add prefetch hints for hero resources
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = '/hero-images'; // Adjust path as needed
  document.head.appendChild(link);
  
  return import(/* webpackChunkName: "hero-slider" */ "../components/dashboard/HeroSlider").then(module => ({
    default: module.default
  }));
});

// Intersection Observer based lazy loading for below-the-fold components
const WhoWeAre = lazy(() => 
  import(/* webpackChunkName: "who-we-are" */ "../common/WhoWeAre").then(module => ({
    default: module.default
  }))
);

const TrustSlider = lazy(() => 
  import(/* webpackChunkName: "trust-slider" */ "../common/TrustSlider").then(module => ({
    default: module.default
  }))
);

const ContactForm = lazy(() => 
  import(/* webpackChunkName: "contact-form" */ "../common/ContactForm").then(module => ({
    default: module.default
  }))
);

const VideoModal = lazy(() => 
  import(/* webpackChunkName: "video-modal" */ "../common/VideoModal").then(module => ({
    default: module.default
  }))
);

// Highly optimized loading components with minimal DOM footprint
const LoadingSpinner = React.memo(() => (
  <div 
    className="loading-spinner"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0',
      minHeight: '60px'
    }}
    role="status"
    aria-label="Loading"
  >
    <div 
      style={{
        width: '20px',
        height: '20px',
        border: '2px solid #e3e3e3',
        borderTop: '2px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        willChange: 'transform'
      }}
    />
  </div>
));

// Lightweight section placeholder
const SectionPlaceholder = React.memo(({ height = '100px', className = '' }) => (
  <div 
    className={`section-placeholder ${className}`}
    style={{ 
      minHeight: height,
      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s infinite',
      borderRadius: '4px',
      margin: '10px 0'
    }}
    role="status"
    aria-label="Loading content"
  />
));

// Optimized Error Boundary
const ErrorBoundary = React.memo(({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [children]);

  const handleRetry = useCallback(() => {
    setHasError(false);
  }, []);

  if (hasError) {
    return fallback || (
      <div style={{ padding: '15px', textAlign: 'center', fontSize: '14px' }}>
        <p>Failed to load content</p>
        <button 
          onClick={handleRetry}
          style={{
            padding: '6px 12px',
            fontSize: '12px',
            border: '1px solid #ddd',
            borderRadius: '3px',
            background: '#fff',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return children;
});

// Intersection Observer hook for lazy loading
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsVisible(true);
          setHasTriggered(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [hasTriggered, options]);

  return [ref, isVisible];
};

// Advanced preloading hook with priorities
const useAdvancedPreloading = () => {
  useEffect(() => {
    let timeoutId;
    
    const preloadCriticalComponents = () => {
      // Priority 1: User likely to see soon
      import("../common/WhoWeAre");
      
      // Priority 2: Interactive elements
      setTimeout(() => {
        import("../common/ContactForm");
      }, 500);
      
      // Priority 3: Less critical
      setTimeout(() => {
        import("../common/TrustSlider");
      }, 1000);
    };

    // Use different strategies based on connection
    if ('connection' in navigator) {
      const connection = navigator.connection;
      if (connection.effectiveType === '4g' && !connection.saveData) {
        // Fast connection, preload aggressively
        timeoutId = setTimeout(preloadCriticalComponents, 100);
      } else if (connection.effectiveType === '3g') {
        // Slower connection, more conservative
        timeoutId = setTimeout(preloadCriticalComponents, 500);
      }
      // 2g or save-data: don't preload
    } else {
      // Unknown connection, be conservative
      timeoutId = setTimeout(preloadCriticalComponents, 300);
    }

    // Preload video modal on first user interaction
    const preloadVideoModal = () => {
      import("../common/VideoModal");
    };

    const handleFirstInteraction = () => {
      preloadVideoModal();
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('mousedown', handleFirstInteraction);
    };

    document.addEventListener('touchstart', handleFirstInteraction, { 
      passive: true, 
      once: true 
    });
    document.addEventListener('mousedown', handleFirstInteraction, { 
      passive: true, 
      once: true 
    });

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('mousedown', handleFirstInteraction);
    };
  }, []);
};

// Optimized video modal hook
const useVideoModal = () => {
  const [openVideo, setOpenVideo] = useState(false);
  
  const toggleVideo = useCallback(() => {
    setOpenVideo(prev => !prev);
  }, []);

  const closeVideo = useCallback(() => {
    setOpenVideo(false);
  }, []);

  return useMemo(() => ({
    openVideo,
    toggleVideo,
    closeVideo
  }), [openVideo, toggleVideo, closeVideo]);
};

// Lazy component wrapper with intersection observer
const LazySection = React.memo(({ 
  component: Component, 
  fallback, 
  height = '150px',
  rootMargin = '100px',
  ...props 
}) => {
  const [ref, isVisible] = useIntersectionObserver({ rootMargin });

  return (
    <div ref={ref}>
      {isVisible ? (
        <ErrorBoundary>
          <Suspense fallback={fallback || <SectionPlaceholder height={height} />}>
            <Component {...props} />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <SectionPlaceholder height={height} />
      )}
    </div>
  );
});

// Main Dashboard Component
const Dashboard = () => {
  const { openVideo, toggleVideo, closeVideo } = useVideoModal();
  useAdvancedPreloading();
  
  // Memoize SEO data
  const seo = useSeoHelmet("home");
  
  // Memoize props to prevent unnecessary re-renders
  const performanceProps = useMemo(() => ({
    openVideo,
    toggleVideo
  }), [openVideo, toggleVideo]);

  const whyChooseProps = useMemo(() => ({
    toggleVideo
  }), [toggleVideo]);

  // Add CSS for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      .loading-spinner, .section-placeholder {
        contain: layout style paint;
      }
     
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="dashboard-box">
      <SeoHelmet seo={seo} />

      <NavBar />

      {/* Hero Section - Critical, load immediately */}
      <ErrorBoundary>
        <Suspense fallback={<SectionPlaceholder height="60vh" />}>
          <HeroSlider />
        </Suspense>
      </ErrorBoundary>

      {/* Performance Section - Above fold, load immediately */}
      {/* <Performance {...performanceProps} /> */}

      {/* Who We Are - Lazy load with intersection observer */}
      <LazySection 
        component={WhoWeAre} 
        height="400px"
        rootMargin="150px"
      />

      {/* Static sections - Keep loaded for better UX */}
      <WeDo />
      <OurVision />
      <CounterCard />
      <WhyChoose {...whyChooseProps} />
      <WeOffer />
      <TakeAction />

      {/* Trust Section - Lazy load */}
      <LazySection 
        component={TrustSlider} 
        height="200px"
        rootMargin="100px"
      />

      {/* Contact Section - Lazy load */}
      <section className="send-message">
        <Container>
          <Row className="align-items-center">
            <Col md={12} lg={8}>
              <LazySection 
                component={ContactForm} 
                height="300px"
                rootMargin="50px"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <WaveWrapper />
      <Footer />

      {/* Video Modal - Only render when open */}
      {openVideo && (
        <ErrorBoundary>
          <Suspense fallback={null}>
            <VideoModal open={openVideo} onClose={closeVideo} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default React.memo(Dashboard);