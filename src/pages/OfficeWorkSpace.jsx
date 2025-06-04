import React, { useState, lazy, Suspense } from "react";


import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import WhyChooseUs from "../components/productandservices/diyprefabkits/WhyChooseUs";
import WeOffer from "../components/productandservices/diyprefabkits/WeOffer";
import OurServices from "../components/productandservices/diyprefabkits/OurServices";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";

// Lazy-loaded components
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const CounterCard = lazy(() => import("../common/CounterCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));




const OfficeWorkSpace = () => {

    const [openVideo, setOpenVideo] = useState(false);
    const handleOpenVideo = () => setOpenVideo(!openVideo);
    const seo = useSeoHelmet("office-workspaces"); // Fetch SEO by slug





    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner
                title={"Office & Workspaces"}
                description={"Engineering Excellence, Industrial Solutions"}
            />

            <OurServices />



            <Suspense fallback={<div>Loading trust slider...</div>}>
                <TrustSlider />
            </Suspense>
            <WeOffer />

            <CounterCard />

            <WhyChooseUs handleOpenVideo={handleOpenVideo} />

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

export default OfficeWorkSpace