import React, { useState, lazy, Suspense, useCallback } from "react";
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import WhoWeAre from "../components/productandservices/portablestructure/WhoWeAre";
import Info from "../components/productandservices/portablestructure/Info";
import TestimonialCard from "../common/TestimonialCard";
import OurVision from "../common/OurVision";
import WeOffer from "../components/dashboard/WeOffer";
import WhyChooseUs from "../components/productandservices/wallroofingsolutions/sandwichpanel/WhyChooseUs";
import OurServices from "../components/productandservices/diyprefabkits/OurServices";
import SeoHelmet from "../common/SeoHelmet";
import useSeoHelmet from "../hooks/ReactHelmet";
import Footer from "../common/Footer";

// Lazy-loaded components with error handling
const TrustSlider = lazy(() => 
  import("../common/TrustSlider").catch(() => ({ default: () => <div>Failed to load content</div> }))
);
const CounterCard = lazy(() => 
  import("../common/CounterCard").catch(() => ({ default: () => <div>Failed to load content</div> }))
);
const WaveWrapper = lazy(() => 
  import("../common/WaveWrapper").catch(() => ({ default: () => <div>Failed to load content</div> }))
);

const VideoModal = lazy(() => 
  import("../common/VideoModal").catch(() => ({ default: () => <div>Failed to load content</div> }))
);

// Reusable loading component
const LoadingSpinner = ({ message = "Loading..." }) => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
    <span className="text-gray-600">{message}</span>
  </div>
);

const Application = () => {
  const [openVideo, setOpenVideo] = useState(false);
  
  // Memoized callbacks to prevent unnecessary re-renders
  const handleOpenVideo = useCallback(() => {
    setOpenVideo(prev => !prev);
  }, []);

  const handleCloseVideo = useCallback(() => {
    setOpenVideo(false);
  }, []);

  const seo = useSeoHelmet("applications");

  return (
    <>
      {/* SEO Meta Tags */}
      <SeoHelmet seo={seo} />
      
      {/* Navigation */}
      <NavBar />
      
      {/* Hero Section */}
      <Banner
        title="Applications"
        description="Engineering Excellence, Industrial Solutions"
      />

      {/* Main Content */}
      <main>
        <OurServices 
          title="Enhance Your Living and Working Experience with Smart Prefab Solutions" 
        />
        
        {/* Trust indicators section */}
        <Suspense fallback={<LoadingSpinner message="Loading trust indicators..." />}>
          <TrustSlider />
        </Suspense>
        
        <WeOffer />
        
        {/* Statistics section */}
        <Suspense fallback={<LoadingSpinner message="Loading statistics..." />}>
          <CounterCard />
        </Suspense>
        
        <WhyChooseUs handleOpenVideo={handleOpenVideo} />
        
        {/* Visual elements section */}
        <Suspense fallback={<LoadingSpinner message="Loading visual elements..." />}>
          <WaveWrapper />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<LoadingSpinner message="Loading footer..." />}>
        <Footer />
      </Suspense>

      {/* Video Modal - Only load when needed */}
      {openVideo && (
        <Suspense fallback={<LoadingSpinner message="Loading video player..." />}>
          <VideoModal 
            open={openVideo} 
            onClose={handleCloseVideo}
          />
        </Suspense>
      )}
    </>
  );
};

export default Application;