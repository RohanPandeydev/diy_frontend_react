import React, { useState, lazy, Suspense } from "react";

import { Link } from "react-router-dom";

import { Button, Col, Container, Row } from "reactstrap";
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import ImagePath from "../assets/ImagePath";
import SuccessStory from "../components/projectandcasestudies/SuccessStory";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));


const ClientTestimonial = () => {
    const seo = useSeoHelmet("client-testimonials"); // Fetch SEO by slug


    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner
                title={"Client Testimonials"}
                description={"Empowered Minds, Innovative Solutions"}
            />

            <section className="common-section sucess-stories-wrap">
                <Container>
                    <div className="sucess-head">
                        <h6>Our Expert Team</h6>
                        <h2>Meet the Team Driving Engineering</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <div className="sucess-main">
                        <SuccessStory />
                    </div>
                </Container>
            </section>

            <section className="common-section join-wrap">
                <div className="join-img-right">
                    <img src={ImagePath.sucessBg} alt="" />
                </div>
                <Container>
                    <Row>
                        <Col md={6} lg={6}>
                            <div className="join-box">
                                <h6>Join us</h6>
                                <h2>How will you engineer a better world?</h2>
                                <p>
                                    Elit consectetuer blandit diam quam cubilia. Dis sagittis
                                    parturient odio finibus tempus ornare feugiat porttitor.
                                </p>
                                {/* <div className="join-line"></div> */}

                                <Button className="common-btn">Contact Us</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="common-section insight-article-erap">
                <Container>
                    <div className="insight-head">
                        <h3>Insight & Article</h3>
                        <Link to="#" className="common-btn">All Article</Link>
                    </div>
                    <div className="insight-lwr">
                        <Row>
                            <Col md="3">
                                <div className="insight-box">
                                    <h3>Hello world!</h3>
                                    <ul>
                                        <li>February 9, 2025</li>
                                        <li>1 Comment</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <Suspense fallback={<div>Loading...</div>}>

                <WaveWrapper />
                <Footer />
            </Suspense>

        </div>
    );
};

export default ClientTestimonial;
