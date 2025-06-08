import React, { useState, lazy, Suspense } from "react";
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import Banner from "../common/Banner";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";
import NavBar from "../common/NavBar";
import ImagePath from "../assets/ImagePath";


const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));




const Career = () => {
    const seo = useSeoHelmet("careers"); // Fetch SEO by slug

    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner
                title={"Careers"}
                description={"Crafting Engineering Excellence"}
            />

            <section className="we-are-section">
                <Container>
                    <Row>
                        <Col md={12} lg={6}>
                            <div className="we-are-left">
                                <h2>
                                    Grow your career with DIY PreFab
                                </h2>
                                <p>
                                    Prefab buildings empower professional experts with faster
                                    deployment, design flexibility, and cost-effective
                                    construction solutions.
                                </p>
                                <p>Develop your career at a place that respects your time and personal wellbeing. Whether you’re a junior, intermediate, or senior, if you have the right skills and knowledge, we want you!</p>
                                <p>
                                    Welcome to “DIY PreFab”— India’s emerging name in pre
                                    engineered building solutions and modular prefab construction.
                                </p>
                                <p>
                                    Our people make us a great company.For any company, its obligation to its employees is as strong as it is to its clients. We stay true to our values and commitment to our employees in all aspects, which is reflected in the industry-leading services we provide.
                                </p>
                                <p>
                                    Creating a place for talent to grow.At DIY PreFab, we have a variety of initiatives, internships, and programs for young professionals ready to gain experience with real projects. We’ve partnered with Brainwave University and NAPS India to bring students valuable work experience and opportunities in the IT/software industry.
                                </p>
                                <p>
                                    Whether you’re setting up a PEB warehouse in Rajasthan, a
                                    factory in Madhya Pradesh, or a modular shed in Gujarat, “DIY
                                    PreFab”delivers solutions tailored to your space, budget, and
                                    timeline.
                                </p>
                                <Link to="/careers/job" className="common-btn">Apply Now</Link>

                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="we-are-right">
                                <div className="we-are-back-image-section">
                                    <img
                                        src={ImagePath.WRB}
                                        alt="we-are-back"
                                        className="img-fluid"
                                    ></img>
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
            <Suspense fallback={<div>Loading visual section...</div>}>
                <WaveWrapper />
            </Suspense>

            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>

        </div>
    )
}

export default Career