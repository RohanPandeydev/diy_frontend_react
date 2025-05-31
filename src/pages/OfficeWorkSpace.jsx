import React, { useState, lazy, Suspense } from "react";


import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import WhyChooseUs from "../components/productandservices/diyprefabkits/WhyChooseUs";
import WeOffer from "../components/productandservices/diyprefabkits/WeOffer";
import OurServices from "../components/productandservices/diyprefabkits/OurServices";

// Lazy-loaded components
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const CounterCard = lazy(() => import("../common/CounterCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));


import {
    Button,
    Col,
    Container,
    Progress,
    Row,
    Table,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "reactstrap";
import { TbSettingsUp } from "react-icons/tb";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaLayerGroup, FaLeaf, FaPlay, FaSortAmountUp } from "react-icons/fa";
import { MdEngineering, MdFactory } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiCargoCrane } from "react-icons/gi";
import { VscFileSubmodule } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";

const OfficeWorkSpace = () => {

    const [openVideo, setOpenVideo] = useState(false);
    const handleOpenVideo = () => setOpenVideo(!openVideo);




    return (
        <div>
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