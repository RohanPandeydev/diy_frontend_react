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

// Import optimized image component
import { OptimizedImage } from "../utils/PerformanceConfig";

// Performance monitoring hook
const usePerformanceMonitor = () => {
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // Monitor LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor CLS
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);
};

// Optimized lazy loading with priority hints
const HeroSlider = lazy(() => import("../components/dashboard/HeroSlider"));
const WhoWeAre = lazy(() => import("../common/WhoWeAre"));
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const ContactForm = lazy(() => import("../common/ContactForm"));
const VideoModal = lazy(() => import("../common/VideoModal"));

// Enhanced Intersection Observer
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '200px',
        ...options
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [options]);

  return [ref, isVisible];
};

// Main Dashboard Component
const Dashboard = () => {
  const [openVideo, setOpenVideo] = useState(false);
  
  // Performance monitoring
  usePerformanceMonitor();
  
  const toggleVideo = useCallback(() => {
    setOpenVideo(prev => !prev);
  }, []);

  const closeVideo = useCallback(() => {
    setOpenVideo(false);
  }, []);
  
  const seo = useSeoHelmet("home");
  
  const handleComingSoon = useCallback((feature = "This feature") => {
    alert(`${feature} is coming soon!`);
  }, []);

  return (
    <div className="dashboard-box">
      <SeoHelmet seo={seo} />
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <HeroSlider />
      </Suspense>

      {/* <Performance openVideo={openVideo} toggleVideo={toggleVideo} /> */}

      <Suspense fallback={<div>Loading...</div>}>
        <WhoWeAre />
      </Suspense>

      <WeDo handleComingSoon={handleComingSoon} />
      <OurVision />
      <CounterCard />
      <WhyChoose toggleVideo={toggleVideo} />
      <WeOffer handleComingSoon={handleComingSoon} />
      <TakeAction handleComingSoon={handleComingSoon} />

      <Suspense fallback={<div>Loading...</div>}>
        <TrustSlider />
      </Suspense>

      <section className="send-message">
        <Container>
          <Row className="align-items-center">
            <Col md={12} lg={8}>
              <Suspense fallback={<div>Loading...</div>}>
                <ContactForm />
              </Suspense>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <WaveWrapper /> */}
      <Footer />

      {openVideo && (
        <Suspense fallback={<div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999 }} />}>
          <VideoModal open={openVideo} onClose={closeVideo} />
        </Suspense>
      )}
    </div>
  );
};

export default React.memo(Dashboard);