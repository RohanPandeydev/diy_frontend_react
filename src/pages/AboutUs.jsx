import React, { useState, lazy, Suspense, useCallback, useMemo } from "react";

// Critical above-the-fold components - load immediately
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import WhoWeAre from "../components/productandservices/portablestructure/WhoWeAre";
import Info from "../components/productandservices/portablestructure/Info";
import TestimonialCard from "../common/TestimonialCard";
import OurVision from "../common/OurVision";
import SeoHelmet from "../common/SeoHelmet";
import useSeoHelmet from "../hooks/ReactHelmet";
import Footer from "../common/Footer";

// Strategic lazy loading - group by priority and usage
const CounterCard = lazy(() => 
  import("../common/CounterCard").then(module => ({
    default: module.default
  }))
);

const TrustSlider = lazy(() => 
  import("../common/TrustSlider").then(module => ({
    default: module.default
  }))
);

// Footer components - lowest priority (bottom of page)
const WaveWrapper = lazy(() => 
  import("../common/WaveWrapper").then(module => ({
    default: module.default
  }))
);



// Modal - only load when needed
const VideoModal = lazy(() => 
  import("../common/VideoModal").then(module => ({
    default: module.default
  }))
);

// Optimized loading components
const LoadingSpinner = React.memo(() => (
  <div 
    className="loading-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      minHeight: '80px'
    }}
    role="status"
    aria-label="Loading content"
  >
    <div 
      className="spinner"
      style={{
        width: '20px',
        height: '20px',
        border: '2px solid #f3f3f3',
        borderTop: '2px solid #007bff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}
    />
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
));

const SectionLoader = React.memo(({ message = "Loading...", height = '120px' }) => (
  <div 
    style={{ 
      minHeight: height, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      opacity: 0.8,
      backgroundColor: '#f8f9fa'
    }}
    role="status"
    aria-label={message}
  >
    <LoadingSpinner />
    <span style={{ marginLeft: '10px', color: '#666', fontSize: '14px' }}>
      {message}
    </span>
  </div>
));

// Component preloading hook
const useComponentPreloading = () => {
  React.useEffect(() => {
    const preloadCriticalComponents = () => {
      // Preload components user will likely interact with
      import("../common/CounterCard");
      import("../common/TrustSlider");
    };

    const preloadFooterComponents = () => {
      // Preload footer components when user scrolls down
      import("../common/WaveWrapper");
      import("../common/Footer");
    };

    // Preload critical components after initial render
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadCriticalComponents, { timeout: 1000 });
    } else {
      setTimeout(preloadCriticalComponents, 100);
    }

    // Preload footer when user scrolls to 50% of page
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      if (scrolled > (docHeight - viewHeight) * 0.5) {
        preloadFooterComponents();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Preload video modal on user interaction
    const preloadVideoModal = () => {
      import("../common/VideoModal");
    };

    const interactionEvents = ['mousedown', 'touchstart', 'keydown'];
    const handleInteraction = () => {
      preloadVideoModal();
      interactionEvents.forEach(event => 
        document.removeEventListener(event, handleInteraction)
      );
    };

    interactionEvents.forEach(event => 
      document.addEventListener(event, handleInteraction, { 
        passive: true, 
        once: true 
      })
    );

    return () => {
      window.removeEventListener('scroll', handleScroll);
      interactionEvents.forEach(event => 
        document.removeEventListener(event, handleInteraction)
      );
    };
  }, []);
};

// Error boundary for lazy components
class LazyComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lazy component loading error:', error, errorInfo);
    
    // Report to analytics if available
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: `Lazy load error: ${error.message}`,
        fatal: false
      });
    }
  }

  handleRetry = () => {
    this.setState(prevState => ({ 
      hasError: false, 
      retryCount: prevState.retryCount + 1 
    }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center', 
          color: '#666',
          border: '1px solid #ddd',
          borderRadius: '4px',
          margin: '10px 0',
          backgroundColor: '#f8f9fa'
        }}>
          <p>Unable to load this section.</p>
          {this.state.retryCount < 3 && (
            <button 
              onClick={this.handleRetry}
              style={{
                padding: '8px 16px',
                border: '1px solid #007bff',
                borderRadius: '4px',
                background: '#007bff',
                color: 'white',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Try Again
            </button>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

// Intersection Observer for lazy loading sections
const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
};

const AboutUs = () => {
  const [openVideo, setOpenVideo] = useState(false);
  
  // Memoize SEO data
  const seo = useSeoHelmet("about-us");
  
  // Optimize video toggle with useCallback
  const handleOpenVideo = useCallback(() => {
    setOpenVideo(prev => !prev);
  }, []);

  // Memoize banner props
  const bannerProps = useMemo(() => ({
    title: "About Us",
    description: "Crafting Engineering Excellence"
  }), []);

  // Use component preloading
  useComponentPreloading();

  // Refs for intersection observer
  const counterRef = React.useRef();
  const trustRef = React.useRef();
  const footerRef = React.useRef();

  // Check if sections are in view
  const isCounterInView = useIntersectionObserver(counterRef);
  const isTrustInView = useIntersectionObserver(trustRef);
  const isFooterInView = useIntersectionObserver(footerRef);

  return (
    <div className="about-us-page">
      <SeoHelmet seo={seo} />

      <NavBar />
      
      <Banner {...bannerProps} />
      
      {/* Critical above-the-fold content */}
      <WhoWeAre />
      <Info />
      <OurVision />

      {/* Counter section - load when in view */}
      <div ref={counterRef}>
        {isCounterInView ? (
          <LazyComponentErrorBoundary>
            <Suspense fallback={<SectionLoader message="Loading statistics..." height="200px" />}>
              <CounterCard />
            </Suspense>
          </LazyComponentErrorBoundary>
        ) : (
          <SectionLoader message="Loading statistics..." height="200px" />
        )}
      </div>

      {/* Trust section - load when in view */}
      <div ref={trustRef}>
        {isTrustInView ? (
          <LazyComponentErrorBoundary>
            <Suspense fallback={<SectionLoader message="Loading trust indicators..." height="180px" />}>
              <TrustSlider />
            </Suspense>
          </LazyComponentErrorBoundary>
        ) : (
          <SectionLoader message="Loading trust indicators..." height="180px" />
        )}
      </div>

      <TestimonialCard />

      {/* Footer section - load when in view */}
      <div ref={footerRef}>
        {isFooterInView ? (
          <>
            <LazyComponentErrorBoundary>
              <Suspense fallback={<SectionLoader message="Loading visual elements..." height="100px" />}>
                <WaveWrapper />
              </Suspense>
            </LazyComponentErrorBoundary>

            <LazyComponentErrorBoundary>
              <Suspense fallback={<SectionLoader message="Loading footer..." height="300px" />}>
                <Footer />
              </Suspense>
            </LazyComponentErrorBoundary>
          </>
        ) : (
          <>
            <SectionLoader message="Loading visual elements..." height="100px" />
            <SectionLoader message="Loading footer..." height="300px" />
          </>
        )}
      </div>

      {/* Video Modal - only render when needed */}
      {openVideo && (
        <LazyComponentErrorBoundary>
          <Suspense fallback={null}>
            <VideoModal open={openVideo} onClose={handleOpenVideo} />
          </Suspense>
        </LazyComponentErrorBoundary>
      )}
    </div>
  );
};

export default React.memo(AboutUs);