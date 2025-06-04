import React, { useState, lazy, Suspense } from "react";

import { Col, Container, Row } from "reactstrap";

import { Link } from "react-router-dom";


import NavBar from "../common/NavBar";
import ImagePath from "../assets/ImagePath";
import WhyChooseUs from "../components/productandservices/diyprefabkits/WhyChooseUs";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";

// Lazy-loaded components
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const CounterCard = lazy(() => import("../common/CounterCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));


const ProjectGallery = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const handleOpenVideo = () => setOpenVideo(!openVideo);
    const seo = useSeoHelmet("project-gallery"); // Fetch SEO by slug




    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />

            <section className="project-banner-wrap">
                <div className="project-bnr-bg">
                    <img src={ImagePath.projectBnrBg} alt="" />
                </div>
                <Container>
                    <Row>
                        <Col md={6} lg={6} className="project-box">
                            <h3>
                                Industrial IoT <br /> Deployment
                            </h3>
                            <p>
                                Imperdiet congue dis tristique malesuada cursus tincidunt si.
                                Iaculis phasellus libero est sociosqu tellus primis maximus nunc
                                ultrices. Suspendisse sodales magnis dolor elit ridiculus sem
                                dignissim nunc eleifend pharetra.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="common-section project-top">
                <Container>
                    <Row>
                        <Col md={6} lg={4}>
                            <div className="project-gallery-left">
                                <div className="project-gallery-list">
                                    <h3>Another Project</h3>
                                    <ul>
                                        <li>
                                            <Link to="" className="project-gallery-link">
                                                Renewable Energy Integration
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="project-gallery-link">
                                                Robotics Integration
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="project-gallery-link">
                                                Industrial IoT Deployment
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="project-gallery-link">
                                                Water Management System
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="project-gallery-link">
                                                Advanced Materials Research
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={8}>
                            <div className="project-gallery-right">
                                <div className="project-main-img">
                                    <img src={ImagePath.projectgGalleryMainImg} alt="" />
                                </div>
                                <div className="project-main-content">
                                    <h3>Resulted in a 30% increase in production efficiency</h3>
                                    <p>
                                        At “DIY PreFab”, our innovative modular building solutions
                                        have resulted in a remarkable 30% increase in production
                                        efficiency. By streamlining the construction process and
                                        integrating smart design with precision engineering, we help
                                        our clients save time, reduce labor costs, and achieve
                                        faster project completion—without compromising on quality.
                                    </p>
                                </div>
                                <h3 className="overview-head">Overview</h3>
                                <Row>
                                    <Col md={6}>
                                        <div className="project-left">
                                            <p>
                                                Welcome to the “DIY PreFab” Project Gallery – a showcase
                                                of innovation, craftsmanship, and real-world
                                                applications of our modular building solutions. Explore
                                                a diverse range of completed projects, from modern
                                                backyard studios and compact living spaces to functional
                                                commercial units. Each build highlights the versatility,
                                                durability, and aesthetic appeal of our prefab kits, all
                                                customized to fit unique lifestyles and business needs.
                                                Get inspired by what’s possible when smart design meets
                                                DIY convenience.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="project-right">
                                            <img src={ImagePath.projectsmallimg} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="project-empower-wrap">
                <div className="project-empower-bg">
                    <img src={ImagePath.featureproject} alt="" />
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className="project-empower-box">
                                <h3>
                                    Empower Your Future with Industrial Excellence, Seize the
                                    Opportunity to Engineer Innovation
                                </h3>
                                <p>
                                    Empower your future with industrial excellence, driving
                                    progress through cutting-edge technology and smart solutions.
                                    Seize the opportunity to engineer innovation and shape a
                                    smarter, more efficient tomorrow.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <CounterCard />

            <WhyChooseUs desc={"World-class quality is our top priority, driving excellence in every detail we deliver."} title={"World class quality is our priority"} handleOpenVideo={handleOpenVideo} />


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

export default ProjectGallery;
