import React, { useState, lazy, Suspense } from "react";
import NavBar from "../common/NavBar";
import Banner from "../common/Banner";
import { Col, Container, Row } from 'reactstrap';
import { FaHelmetSafety } from 'react-icons/fa6';
import { MdSupportAgent } from 'react-icons/md';
import ImagePath from "../assets/ImagePath";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";

// Images


// Lazy-loaded components

const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));
const OurVision = lazy(() => import("../common/OurVision"));


const WorkCulture = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const handleOpenVideo = () => setOpenVideo(!openVideo);
    const seo = useSeoHelmet("work-culture"); // Fetch SEO by slug

    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner title="Work Culture" description="Crafting Engineering Excellence" />

            <section className="we-are-section">
                <Container>
                    <Row>
                        <Col md={12} lg={6}>
                            <div className="we-are-left">
                                <h2>Your Trusted and Visionary Partner in Engineering Excellence</h2>
                                <p>Prefab buildings empower professional experts with faster deployment, design flexibility, and cost-effective construction solutions.</p>
                                <p>Welcome to “DIY PreFab”— India’s emerging name in pre-engineered building solutions and modular prefab construction.</p>
                                <p>From remote villages to fast-paced industrial hubs, our mission is simple:</p>
                                <p>Make high-quality prefab structures accessible, fast, and affordable for all.</p>
                                <p>Whether you’re setting up a PEB warehouse in Rajasthan, a factory in Madhya Pradesh, or a modular shed in Gujarat, “DIY PreFab” delivers solutions tailored to your space, budget, and timeline.</p>
                                <div className="we-are-left-content-container">
                                    <div className="we-are-left-content-box">
                                        <FaHelmetSafety className="performance-icons" />
                                        <h4>Professional Expert</h4>
                                        <p>Prefab buildings empower professional experts with faster deployment, design flexibility, and cost-effective construction solutions.</p>
                                    </div>
                                    <div className="we-are-left-content-box">
                                        <MdSupportAgent className="performance-icons" />
                                        <h4>24/7 Premium Support</h4>
                                        <p>Experience uninterrupted service and peace of mind with 24/7 premium support tailored for your prefab building needs.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="we-are-right">
                                <div className="we-are-back-image-section">
                                    <img src={ImagePath.WRB} alt="we-are-back" className="img-fluid" />
                                    <div className="we-are-back-right-content-box">
                                        <div className="we-are-back-right-content">
                                            <h4>7+</h4>
                                            <p>Years of Experience</p>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="we-are-back-right-content jcs">
                                            <p>Cutting-Edge Expertise</p>
                                            <p>Holistic Solutions Approach</p>
                                            <p>Client-Centric Collaboration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="common-section WhoWeAre-about">
                <Container>
                    <div className="WhoWeAre-box">
                        <h2>Who We Are</h2>
                        <p>Backed by strong engineering, modern fabrication, and on-ground project execution experience, we specialize in:</p>
                        <ul>
                            <li>Pre Engineered Buildings (PEBs)</li>
                            <li>Customizable Prefab Kits for Warehouses, Sheds, & Units</li>
                            <li>Modular Buildings for Housing, Offices & Commercial Use</li>
                            <li>Eco-Friendly & Low-Carbon Construction Systems</li>
                            <li>Projects Across Rural, Urban & International Markets</li>
                        </ul>
                        <p>We proudly operate our in-house manufacturing facility in Banswara, Rajasthan, covering over 10,000+ sqm of area.</p>
                        <p>Strategically located near the borders of Rajasthan, Gujarat, and Madhya Pradesh, our plant ensures efficient material delivery and fast execution across these three major states.</p>
                        <p>With active operations in Udaipur, Jaipur, Ahmedabad, Indore, and growing export success in South Africa, DIY PreFab is on a mission to redefine how India builds — faster, smarter, and greener.</p>
                        <p>Each building is designed using pre-engineered steel frames, precision-cut panels, and simplified assembly workflows — ensuring strength, safety, and speed.</p>
                    </div>
                </Container>
            </section>

            <section className="common-section work-culture">
                <Container>
                    <Row>
                        <Col md="12" lg="8">
                            <div className="work-culture-right">
                                <h2 className='work-culture-head'>Work Culture</h2>
                                <p className='work-culture-subhead'>
                                    At DIY PreFab, we believe that great work stems from a great work environment. Our culture is not just something we talk about — it's something we live every day.
                                </p>
                                <Row>
                                    <Col md="12" lg="6">
                                        <div className="work-culture-right-box">
                                            <h4>Core Values</h4>
                                            <p>We are guided by a strong set of values that shape every decision and action:</p>
                                            <ul>
                                                <li>We do the right thing, even when no one is watching.</li>
                                                <li>Our users and clients are at the heart of everything we build.</li>
                                                <li>We grow together by lifting each other up.</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md="12" lg="6">
                                        <div className="work-culture-right-box">
                                            <h4>Team Environment</h4>
                                            <p>We foster a respectful, inclusive, and energetic team spirit where:</p>
                                            <ul>
                                                <li>Every voice is heard.</li>
                                                <li>Diversity of thought is encouraged.</li>
                                                <li>Feedback is frequent, constructive, and mutual.</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md="12" lg="6">
                                        <div className="work-culture-right-box">
                                            <h4>Work & Growth</h4>
                                            <p>We invest in your potential with:</p>
                                            <ul>
                                                <li>Ongoing learning and upskilling programs.</li>
                                                <li>Internal mobility and leadership opportunities.</li>
                                                <li>Mentorship from experienced professionals.</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md="12" lg="6">
                                        <div className="work-culture-right-box">
                                            <h4>Hybrid Flexibility & Work-Life Balance</h4>
                                            <p>We understand the importance of flexibility and trust:</p>
                                            <ul>
                                                <li>Hybrid/remote work options.</li>
                                                <li>Flexible hours tailored to productivity.</li>
                                                <li>Mental health days and wellness initiatives.</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md="12" lg="4">
                            <div className="work-culture-left">
                                <img src={ImagePath.ourService} alt="work Culture" className="img-fluid" />
                                <img src={ImagePath.ChooseUsImg} alt="work Culture" className="img-fluid mt-3" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Suspense fallback={<div>Loading Vision & Mission...</div>}>
                <OurVision />
            </Suspense>

            <Suspense fallback={<div>Loading Wave...</div>}>
                <WaveWrapper />
            </Suspense>

            <Suspense fallback={<div>Loading Footer...</div>}>
                <Footer />
            </Suspense>
            {/* Video Modal */}
            <Suspense fallback={null}>
                <VideoModal open={openVideo} onClose={handleOpenVideo} />
            </Suspense>
        </div>
    );
};

export default WorkCulture;
