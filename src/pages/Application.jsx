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


import WeOffer from "../components/dashboard/WeOffer";
import WhyChooseUs from "../components/productandservices/wallroofingsolutions/sandwichpanel/WhyChooseUs";
import OurServices from "../components/productandservices/diyprefabkits/OurServices";
import SeoHelmet from "../common/SeoHelmet";
import useSeoHelmet from "../hooks/ReactHelmet";

const Application = () => {

    const [openVideo, setOpenVideo] = useState(false);
    const handleOpenVideo = () => setOpenVideo(!openVideo);
    const seo = useSeoHelmet("applications"); // Fetch SEO by slug






    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner
                title={"Applications"}
                description={"Engineering Excellence, Industrial Solutions"}
            />

            <OurServices title={"Enhance Your Living and Working Experience with Smart Prefab Solutions"} />




            <Suspense fallback={<div>Loading...</div>}>
                <TrustSlider />
            </Suspense>
            <WeOffer />
            <CounterCard />

            <WhyChooseUs handleOpenVideo={handleOpenVideo} />

            <WaveWrapper />
            <Footer />
            {/* Video Modal */}
            <Suspense fallback={null}>
                <VideoModal open={openVideo} onClose={handleOpenVideo} />
            </Suspense>
        </div>
    )
}

export default Application