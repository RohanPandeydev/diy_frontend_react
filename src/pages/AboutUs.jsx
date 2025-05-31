import React, { useState, lazy, Suspense } from "react";

import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import WhoWeAre from "../components/productandservices/portablestructure/WhoWeAre";
import Info from "../components/productandservices/portablestructure/Info";
import TestimonialCard from "../common/TestimonialCard";
import OurVision from "../common/OurVision";

// Lazy-loaded components
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const CounterCard = lazy(() => import("../common/CounterCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));

const AboutUs = () => {

  const [openVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => setOpenVideo(!openVideo);


  return (
    <div>
      <NavBar />
      <Banner
        title={"About Us"}
        description={"Crafting Engineering Excellence"}
      />
      <WhoWeAre />

      <Info />
      <OurVision />


      <CounterCard />


      <Suspense fallback={<div>Loading...</div>}>
        <TrustSlider />
      </Suspense>
      <TestimonialCard />


      <Suspense fallback={<div>Loading visual section...</div>}>
        <WaveWrapper />
      </Suspense>

      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>

      {/* Video Modal */}
      <Suspense fallback={null}>
        <VideoModal open={openVideo} onClose={handleOpenVideo} />
      </Suspense>
    </div>
  )
}

export default AboutUs