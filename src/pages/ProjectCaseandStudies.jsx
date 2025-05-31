import React, { useState, lazy, Suspense } from "react";

import { Button, Col, Container, Progress, Row } from "reactstrap";
import { TbSettingsUp } from "react-icons/tb";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaLayerGroup, FaLeaf, FaPlay, FaSortAmountUp } from "react-icons/fa";
import { MdEngineering, MdFactory } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiCargoCrane } from "react-icons/gi";
import { VscFileSubmodule } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import Info from "../components/productandservices/portablestructure/Info";
import TestimonialCard from "../common/TestimonialCard";
import OurVision from "../common/OurVision";
import OurServices from "../components/productandservices/diyprefabkits/OurServices";
import ImagePath from "../assets/ImagePath";
import { weOfferList } from "../Constants";
import WhyChooseUs from "../components/productandservices/wallroofingsolutions/sandwichpanel/WhyChooseUs";


// Lazy-loaded components
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const CounterCard = lazy(() => import("../common/CounterCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));


const ProjectCaseStudies = () => {


    const [openVideo, setOpenVideo] = useState(false);
    const handleOpenVideo = () => setOpenVideo(!openVideo);


    return (
        <div>
            <NavBar />
            <Banner
                title={"Project & Case Studies"}
                description={"Engineering Excellence, Industrial Solutions"}
            />

            <OurServices title={"Products & Services Scalable Prefab & Steel Solutions for Every Sector"} />


            <Suspense fallback={<div>Loading...</div>}>
                <TrustSlider />
            </Suspense>
            <section
                className="we-offer"
                style={{
                    backgroundImage: `url(${ImagePath.Bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "60px 0",
                    backgroundColor: "#a8dadc",
                }}
            >
                <Container>
                    <div className="we-offer-header">
                        <p>What WE oFFER</p>
                        <h4>Engineering solutions for all industries</h4>
                    </div>
                    <div className="we-offer-container">
                        {weOfferList.map((item, index) => (
                            <div className="we-offer-box" key={index}>
                                <div className="we-offer-inner">
                                    <div className="we-offer-front">
                                        <div className="we-offer-icon">{item.icon}</div>
                                        <div className="we-offer-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="we-offer-hover-box">
                                        <div className="we-offer-hover-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                            <Button className="common-btn">Learn More</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

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

export default ProjectCaseStudies