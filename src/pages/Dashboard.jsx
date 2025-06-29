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

// LCP Image Preloader Hook - Critical for performance
const useLCPImagePreloader = () => {
  useEffect(() => {
    // Preload the LCP image immediately
    const preloadLCPImage = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = '/images/performance-banner.webp';
      link.fetchPriority = 'high';
      // Add fallback for browsers that don't support WebP
      link.imagesrcset = '/images/performance-banner.webp 1x, /images/performance-banner@2x.webp 2x';
      link.media = '(min-width: 768px)';
      document.head.appendChild(link);

      // Preload mobile version if needed
      const mobileLinkWebP = document.createElement('link');
      mobileLinkWebP.rel = 'preload';
      mobileLinkWebP.as = 'image';
      mobileLinkWebP.href = '/images/performance-banner-mobile.webp';
      mobileLinkWebP.fetchPriority = 'high';
      mobileLinkWebP.media = '(max-width: 767px)';
      document.head.appendChild(mobileLinkWebP);

      // Fallback for non-WebP browsers
      const linkJPG = document.createElement('link');
      linkJPG.rel = 'preload';
      linkJPG.as = 'image';
      linkJPG.href = '/images/performance-banner.jpg';
      linkJPG.fetchPriority = 'high';
      linkJPG.media = '(min-width: 768px)';
      document.head.appendChild(linkJPG);
    };

    // Execute immediately for LCP optimization
    preloadLCPImage();

    // Also add DNS prefetch for external resources if any
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = '//fonts.googleapis.com';
    document.head.appendChild(dnsPrefetch);

  }, []);
};

// Critical above-the-fold component with enhanced prefetch hints
const HeroSlider = lazy(() => {
  // Add prefetch hints for hero resources
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = '/hero-images';
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

// Enhanced Loading Spinner with reduced layout shift
const LoadingSpinner = React.memo(() => (
  <div 
    className="loading-spinner"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0',
      minHeight: '60px',
      contain: 'layout style paint'
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

// Enhanced section placeholder with better aspect ratio handling
const SectionPlaceholder = React.memo(({ height = '100px', className = '', aspectRatio }) => {
  const style = useMemo(() => ({
    minHeight: height,
    aspectRatio: aspectRatio || 'auto',
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '4px',
    margin: '10px 0',
    contain: 'layout style paint'
  }), [height, aspectRatio]);

  return (
    <div 
      className={`section-placeholder ${className}`}
      style={style}
      role="status"
      aria-label="Loading content"
    />
  );
});

// Optimized Error Boundary with better error reporting
const ErrorBoundary = React.memo(({ children, fallback, componentName = 'Component' }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setHasError(false);
    setError(null);
  }, [children]);

  useEffect(() => {
    const handleError = (event) => {
      if (event.error) {
        setHasError(true);
        setError(event.error);
        console.error(`Error in ${componentName}:`, event.error);
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [componentName]);

  const handleRetry = useCallback(() => {
    setHasError(false);
    setError(null);
  }, []);

  if (hasError) {
    return fallback || (
      <div style={{ 
        padding: '15px', 
        textAlign: 'center', 
        fontSize: '14px',
        border: '1px solid #f0f0f0',
        borderRadius: '4px',
        backgroundColor: '#fafafa'
      }}>
        <p style={{ margin: '0 0 10px 0', color: '#666' }}>
          Failed to load {componentName}
        </p>
        <button 
          onClick={handleRetry}
          style={{
            padding: '6px 12px',
            fontSize: '12px',
            border: '1px solid #ddd',
            borderRadius: '3px',
            background: '#fff',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
        >
          Retry
        </button>
      </div>
    );
  }

  return children;
});

// Enhanced Intersection Observer hook with better performance
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      setIsVisible(true);
      setHasTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsVisible(true);
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px', // Increased for better UX
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

// Enhanced preloading hook with connection awareness and resource hints
const useAdvancedPreloading = () => {
  useEffect(() => {
    let timeoutId;
    
    const addResourceHints = () => {
      // Add resource hints for critical third-party resources
      const hints = [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        Object.assign(link, hint);
        if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
        document.head.appendChild(link);
      });
    };

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

    // Add resource hints immediately
    addResourceHints();

    // Connection-aware preloading
    if ('connection' in navigator) {
      const connection = navigator.connection;
      const effectiveType = connection.effectiveType;
      const saveData = connection.saveData;

      if (effectiveType === '4g' && !saveData) {
        timeoutId = setTimeout(preloadCriticalComponents, 100);
      } else if (effectiveType === '3g' && !saveData) {
        timeoutId = setTimeout(preloadCriticalComponents, 500);
      }
      // For 2g or save-data: don't preload
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
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    // Multiple interaction types for better coverage
    ['touchstart', 'mousedown', 'keydown'].forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { 
        passive: true, 
        once: true 
      });
    });

    return () => {
      clearTimeout(timeoutId);
      ['touchstart', 'mousedown', 'keydown'].forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, []);
};

// Optimized video modal hook with better state management
const useVideoModal = () => {
  const [openVideo, setOpenVideo] = useState(false);
  
  const toggleVideo = useCallback(() => {
    setOpenVideo(prev => !prev);
  }, []);

  const closeVideo = useCallback(() => {
    setOpenVideo(false);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && openVideo) {
        closeVideo();
      }
    };

    if (openVideo) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [openVideo, closeVideo]);

  return useMemo(() => ({
    openVideo,
    toggleVideo,
    closeVideo
  }), [openVideo, toggleVideo, closeVideo]);
};

// Enhanced lazy component wrapper
const LazySection = React.memo(({ 
  component: Component, 
  fallback, 
  height = '150px',
  rootMargin = '100px',
  componentName = 'LazyComponent',
  aspectRatio,
  ...props 
}) => {
  const [ref, isVisible] = useIntersectionObserver({ rootMargin });

  return (
    <div ref={ref}>
      {isVisible ? (
        <ErrorBoundary componentName={componentName}>
          <Suspense fallback={fallback || <SectionPlaceholder height={height} aspectRatio={aspectRatio} />}>
            <Component {...props} />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <SectionPlaceholder height={height} aspectRatio={aspectRatio} />
      )}
    </div>
  );
});

// Main Dashboard Component with enhanced performance optimizations
const Dashboard = () => {
  const { openVideo, toggleVideo, closeVideo } = useVideoModal();
  
  // Critical: Preload LCP image immediately
  useLCPImagePreloader();
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

  // Add critical CSS for animations and performance
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
      /* Critical CSS for LCP image */
      .performance-banner-img {
        width: 100%;
        height: auto;
        object-fit: cover;
        will-change: transform;
        transition: transform 0.3s ease;
      }
      .performance-banner-img:hover {
        transform: scale(1.02);
      }
      /* Optimize font loading */
      @font-display: swap;
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="dashboard-box">
      <SeoHelmet seo={seo} />

      <NavBar />

      {/* Hero Section - Critical, load immediately with high priority */}
      <ErrorBoundary componentName="HeroSlider">
        <Suspense fallback={<SectionPlaceholder height="60vh" aspectRatio="16/9" />}>
          <HeroSlider />
        </Suspense>
      </ErrorBoundary>

      {/* Performance Section - CRITICAL FOR LCP - Load immediately */}
      {/* <Performance {...performanceProps} /> */}

      {/* Who We Are - Lazy load with intersection observer */}
      <LazySection 
        component={WhoWeAre} 
        height="400px"
        rootMargin="150px"
        componentName="WhoWeAre"
        aspectRatio="3/2"
      />

      {/* Static sections - Keep loaded for better UX */}
      <WeDo />
      <OurVision />
      <CounterCard />
      <WhyChoose {...whyChooseProps} />
      <WeOffer />
      <TakeAction />

      {/* Trust Section - Lazy load with optimized loading */}
      <LazySection 
        component={TrustSlider} 
        height="200px"
        rootMargin="100px"
        componentName="TrustSlider"
      />

      {/* Contact Section - Lazy load with form-specific optimizations */}
      <section className="send-message">
        <Container>
          <Row className="align-items-center">
            <Col md={12} lg={8}>
              <LazySection 
                component={ContactForm} 
                height="300px"
                rootMargin="50px"
                componentName="ContactForm"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <WaveWrapper />
      <Footer />

      {/* Video Modal - Only render when open with portal for better performance */}
      {openVideo && (
        <ErrorBoundary componentName="VideoModal">
          <Suspense fallback={null}>
            <VideoModal open={openVideo} onClose={closeVideo} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default React.memo(Dashboard);