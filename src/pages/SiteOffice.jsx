import React, { useState, lazy, Suspense } from "react";
import WhoWeAre from "../components/productandservices/portablestructure/WhoWeAre";
import Info from "../components/productandservices/portablestructure/Info";

import Banner from "../common/Banner";
import NavBar from "../common/NavBar";

const CounterCard = lazy(() => import("../common/CounterCard"));
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const TestimonialCard = lazy(() => import("../common/TestimonialCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const OurVision = lazy(() => import('../common/OurVision'));
const VideoModal = lazy(() => import("../common/VideoModal"));

const SiteOffice = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const handleOpenVideo = () => setOpenVideo(!openVideo);





    return (
        <div>
            <NavBar />
            <Banner
                title={"Site Office"}
                description={"Crafting Engineering Excellence"}
            />
            <WhoWeAre />
            
           <Info/>
      <OurVision />



  <Suspense fallback={<div>Loading...</div>}>
        <CounterCard />
        <TrustSlider />
        <TestimonialCard />
        <WaveWrapper />
        <Footer />
      </Suspense>
                {/* Video Modal */}
                  <Suspense fallback={null}>
                    <VideoModal open={openVideo} onClose={handleOpenVideo} />
                  </Suspense>
        </div>
    )
}

export default SiteOffice