import React, { useState, lazy, Suspense } from "react";
import WhoWeAre from "../components/productandservices/portablestructure/WhoWeAre";
import Info from "../components/productandservices/portablestructure/Info";

import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";

const CounterCard = lazy(() => import("../common/CounterCard"));
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const TestimonialCard = lazy(() => import("../common/TestimonialCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const OurVision = lazy(() => import('../common/OurVision'));
const VideoModal = lazy(() => import("../common/VideoModal"));

const DoorsandWindow = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const handleOpenVideo = () => setOpenVideo(!openVideo);
    const seo = useSeoHelmet("doors-windows"); // Fetch SEO by slug






    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner
                title={"Doors & Windows"}
                description={"Crafting Engineering Excellence"}
            />
            <WhoWeAre />

            <Info />
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

export default DoorsandWindow