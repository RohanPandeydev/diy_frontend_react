import React, { useState, lazy, Suspense } from "react";


import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import WhyChooseUs from "../components/productandservices/diyprefabkits/WhyChooseUs";
import WeOffer from "../components/productandservices/diyprefabkits/WeOffer";
import OurServices from "../components/productandservices/diyprefabkits/OurServices";
import Comparison from "../components/productandservices/diyprefabkits/homekit/Comparison";
import Faq from "../components/productandservices/diyprefabkits/homekit/Faq";
// Lazy-loaded components
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const CounterCard = lazy(() => import("../common/CounterCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));


const EducationalInstitution = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const handleOpenVideo = () => setOpenVideo(!openVideo);


    return (
        <div>
            <NavBar />
            <Banner
                title={"Educational Institutions"}
                description={"Engineering Excellence, Industrial Solutions"}
            />

            <OurServices title={"Smart, Stylish, and Sustainable Prefab Solutions for Modern Residential Living"} desc={"We specialize in delivering high-quality prefabricated building services tailored for residential needs, combining comfort, efficiency, and modern design"} />


            <Suspense fallback={<div>Loading trust slider...</div>}>
                <TrustSlider />
            </Suspense>
            <WeOffer />


            <CounterCard />
            <WhyChooseUs title={"Excellence in Fabricated Infrastructure for Educational Institutions"} desc={"At DIY PreFab, we prioritize world-class quality, combining innovation, comfort, and sustainability in every residential structure we build."} handleOpenVideo={handleOpenVideo} />


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

export default EducationalInstitution;
