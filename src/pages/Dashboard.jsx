import React, { useState, lazy, Suspense, useCallback, useMemo, useEffect } from "react";
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

// Above-the-fold component - highest priority
const HeroSlider = lazy(() => 
  import("../components/dashboard/HeroSlider").then(module => ({
    default: module.default
  }))
);

// Below-the-fold components - lower priority
const WhoWeAre = lazy(() => 
  import("../common/WhoWeAre").then(module => ({
    default: module.default
  }))
);

const TrustSlider = lazy(() => 
  import("../common/TrustSlider").then(module => ({
    default: module.default
  }))
);

const ContactForm = lazy(() => 
  import("../common/ContactForm").then(module => ({
    default: module.default
  }))
);

// Modal component - only load when needed
const VideoModal = lazy(() => 
  import("../common/VideoModal").then(module => ({
    default: module.default
  }))
);

// Optimized loading components using functional components
const LoadingSpinner = React.memo(() => (
  <div 
    className="loading-spinner-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 0',
      minHeight: '100px'
    }}
    role="status"
    aria-label="Loading content"
  >
    <div 
      className="spinner"
      style={{
        width: '24px',
        height: '24px',
        border: '3px solid #f3f3f3',
        borderTop: '3px solid #007bff',
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

const SectionLoader = React.memo(({ height = '150px' }) => (
  <div 
    style={{ 
      minHeight: height, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      opacity: 0.7
    }}
    role="status"
    aria-label="Loading section"
  >
    <LoadingSpinner />
  </div>
));

// Error boundary as functional component using react-error-boundary pattern
const LazyComponentErrorBoundary = ({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      console.error('Lazy component loading error:', error, errorInfo);
      setHasError(true);
    };

    // Reset error state when children change
    setHasError(false);
  }, [children]);

  if (hasError) {
    return fallback || (
      <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
        <p>Something went wrong loading this section.</p>
        <button 
          onClick={() => setHasError(false)}
          style={{
            padding: '8px 16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            background: '#f8f9fa',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return children;
};

// Custom hook for component preloading
const useComponentPreloading = () => {
  useEffect(() => {
    const preloadComponents = () => {
      // Preload components that user is likely to interact with
      import("../common/WhoWeAre");
      import("../common/ContactForm");
    };

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadComponents, { timeout: 2000 });
    } else {
      setTimeout(preloadComponents, 100);
    }

    // Preload video modal on user interaction intent
    const preloadVideoModal = () => {
      import("../common/VideoModal");
    };

    const interactionEvents = ['mousedown', 'touchstart'];
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
      interactionEvents.forEach(event => 
        document.removeEventListener(event, handleInteraction)
      );
    };
  }, []);
};

// Custom hook for video modal state management
const useVideoModal = () => {
  const [openVideo, setOpenVideo] = useState(false);
  
  const toggleVideo = useCallback(() => {
    setOpenVideo(prev => !prev);
  }, []);

  const closeVideo = useCallback(() => {
    setOpenVideo(false);
  }, []);

  const openVideoModal = useCallback(() => {
    setOpenVideo(true);
  }, []);

  return {
    openVideo,
    toggleVideo,
    closeVideo,
    openVideoModal
  };
};

// Main Dashboard functional component
const Dashboard = () => {
  // Custom hooks
  const { openVideo, toggleVideo, closeVideo } = useVideoModal();
  useComponentPreloading();
  
  // Memoize SEO data to prevent unnecessary re-renders
  const seo = useSeoHelmet("home");
  
  // Memoize video props to prevent unnecessary re-renders
  const videoProps = useMemo(() => ({
    openVideo,
    toggleVideo
  }), [openVideo, toggleVideo]);

  // Memoize static props that don't change
  const whyChooseProps = useMemo(() => ({
    toggleVideo
  }), [toggleVideo]);

  return (
    <div className="dashboard-box">
      <SeoHelmet seo={seo} />

      <NavBar />

      {/* Hero Section - Critical, load first */}
      <LazyComponentErrorBoundary>
        <Suspense fallback={<SectionLoader height="60vh" />}>
          <HeroSlider />
        </Suspense>
      </LazyComponentErrorBoundary>

      {/* Performance Section - Critical above-the-fold content */}
      <Performance {...videoProps} />

      {/* Who We Are - Below the fold, can be lazy loaded */}
      <LazyComponentErrorBoundary>
        <Suspense fallback={<SectionLoader height="400px" />}>
          <WhoWeAre />
        </Suspense>
      </LazyComponentErrorBoundary>

      {/* Static sections - no lazy loading needed for better UX */}
      <WeDo />
      <OurVision />
      <CounterCard />

      <WhyChoose {...whyChooseProps} />

      <WeOffer />
      <TakeAction />

      {/* Trust Section - Lower priority */}
      <LazyComponentErrorBoundary>
        <Suspense fallback={<SectionLoader height="200px" />}>
          <TrustSlider />
        </Suspense>
      </LazyComponentErrorBoundary>

      {/* Contact Section - Important but below fold */}
      <section className="send-message">
        <Container>
          <Row className="align-items-center">
            <Col md={12} lg={8}>
              <LazyComponentErrorBoundary>
                <Suspense fallback={<SectionLoader height="300px" />}>
                  <ContactForm />
                </Suspense>
              </LazyComponentErrorBoundary>
            </Col>
          </Row>
        </Container>
      </section>

      <WaveWrapper />
      <Footer />

      {/* Video Modal - Only load when needed */}
      {openVideo && (
        <LazyComponentErrorBoundary>
          <Suspense fallback={null}>
            <VideoModal open={openVideo} onClose={closeVideo} />
          </Suspense>
        </LazyComponentErrorBoundary>
      )}
    </div>
  );
};

export default React.memo(Dashboard);