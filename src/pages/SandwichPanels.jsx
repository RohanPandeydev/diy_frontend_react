import React, { useState, lazy, Suspense } from "react";
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import WeOffer from "../components/productandservices/diyprefabkits/WeOffer";
import OurServices from "../components/productandservices/diyprefabkits/OurServices";

// Lazy-loaded components
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const CounterCard = lazy(() => import("../common/CounterCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));

import ComparisionSec2 from "../components/productandservices/wallroofingsolutions/sandwichpanel/ComparisionSec2";
import ComparisionSec1 from "../components/productandservices/wallroofingsolutions/sandwichpanel/ComparisionSec1";
import WhyChooseUs from "../components/productandservices/wallroofingsolutions/sandwichpanel/WhyChooseUs";
import Faq from "../components/productandservices/wallroofingsolutions/sandwichpanel/Faq";
import SeoHelmet from "../common/SeoHelmet";
import useSeoHelmet from "../hooks/ReactHelmet";

const SandwichPanels = () => {

  const [openVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => setOpenVideo(!openVideo);
  const seo = useSeoHelmet("sandwich-panels"); // Fetch SEO by slug




  return (
    <div>
      <SeoHelmet seo={seo} />

      <NavBar />
      <Banner
        title={"Sandwich Panels"}
        description={"Engineering Excellence, Industrial Solutions"}
      />

      <OurServices title={"What Are Sandwich Panels?​"} desc={"Sandwich panels are three-layer structural components:Outer Skin + Core Insulation + Inner Skin, bonded under pressure."} />
      <Suspense fallback={<div>Loading trust slider...</div>}>
        <TrustSlider />
      </Suspense>
      <WeOffer desc={"Key Benefits of DIY PreFab Sandwich Panels"} />




      <ComparisionSec2 />
      <ComparisionSec1 />


      <Suspense fallback={<div>Loading statistics...</div>}>
        <CounterCard />
      </Suspense>
      <WhyChooseUs handleOpenVideo={handleOpenVideo} />
      <Faq />


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

export default SandwichPanels
