import React, { useState, lazy, Suspense } from "react";
import WhoWeAre from "../components/productandservices/portablestructure/WhoWeAre";
import Info from "../components/productandservices/portablestructure/Info";
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import SeoHelmet from "../common/SeoHelmet";
import useSeoHelmet from "../hooks/ReactHelmet";

// Constants
const BANNER_TITLE = "Insulation Materials";
const BANNER_DESCRIPTION = "Crafting Engineering Excellence";
const LOADING_TEXT = "Loading...";

// Lazy-loaded components with error handling
const CounterCard = lazy(() =>
  import("../common/CounterCard").catch(() => ({ default: () => <div>Failed to load CounterCard</div> }))
);

const TrustSlider = lazy(() =>
  import("../common/TrustSlider").catch(() => ({ default: () => <div>Failed to load TrustSlider</div> }))
);

const TestimonialCard = lazy(() =>
  import("../common/TestimonialCard").catch(() => ({ default: () => <div>Failed to load TestimonialCard</div> }))
);

const WaveWrapper = lazy(() =>
  import("../common/WaveWrapper").catch(() => ({ default: () => <div>Failed to load WaveWrapper</div> }))
);

const Footer = lazy(() =>
  import("../common/Footer").catch(() => ({ default: () => <div>Failed to load Footer</div> }))
);

const OurVision = lazy(() =>
  import("../common/OurVision").catch(() => ({ default: () => <div>Failed to load OurVision</div> }))
);

const VideoModal = lazy(() =>
  import("../common/VideoModal").catch(() => ({ default: () => <div>Failed to load VideoModal</div> }))
);

// Loading component
const LoadingSpinner = ({ message = LOADING_TEXT }) => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
    <span className="text-gray-600">{message}</span>
  </div>
);

const InsulationMaterials = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => setOpenVideo(!openVideo);
  const seo = useSeoHelmet("insulation-materials");

  return (
    <div>
      <SeoHelmet seo={seo} />
      <NavBar />
      <Banner title={BANNER_TITLE} description={BANNER_DESCRIPTION} />
      <WhoWeAre />
      <Info />
      <Suspense fallback={<LoadingSpinner message="Loading Our Vision..." />}>
        <OurVision />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CounterCard />
        <TrustSlider />
        <TestimonialCard />
        <WaveWrapper />
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <VideoModal open={openVideo} onClose={handleOpenVideo} />
      </Suspense>
    </div>
  );
};

export default InsulationMaterials;
