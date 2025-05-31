import React, { useState, lazy, Suspense } from "react";


import { FiSettings } from "react-icons/fi";

import Banner from "../common/Banner";
import ImagePath from "../assets/ImagePath";
import NavBar from "../common/NavBar";
import WhyChooseUs from "../components/productandservices/diyprefabkits/WhyChooseUs";
import Comparison from "../components/productandservices/diyprefabkits/Comparison";
import WeOffer from "../components/productandservices/diyprefabkits/WeOffer";
import Faq from "../components/productandservices/diyprefabkits/Faq";
import OurServices from "../components/productandservices/diyprefabkits/OurServices";

// Lazy-loaded components
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const CounterCard = lazy(() => import("../common/CounterCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));

const DiyPreFabKits = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const handleOpenVideo = () => setOpenVideo(!openVideo);


    return (
        <div>
            <NavBar />
            <Banner
                title={"DIY PreFab Kits"}
                description={"Engineering Excellence, Industrial Solutions"}
            />

            <OurServices title={"Precision-Built Wall & Roofing Systems That Last"} desc={"At “DIY PreFab”, we specialize in delivering high-performance wall and roofing solutions that offer superior durability, energy efficiency, and design flexibility. Every product is engineered for seamless integration and long-term reliability."} />
            <Suspense fallback={<div>Loading trust slider...</div>}>
                <TrustSlider />
            </Suspense>

            <WeOffer />

            <Comparison />

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
    );
};

export default DiyPreFabKits;
