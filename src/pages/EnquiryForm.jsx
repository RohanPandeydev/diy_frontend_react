import React, { useState, lazy, Suspense } from "react";
import NavBar from "../common/NavBar";
import Banner from "../common/Banner";
const Footer = lazy(() => import("../common/Footer"));
import { Col, Container, Row } from 'reactstrap'
import ContactForm from "../common/ContactForm";
import SeoHelmet from "../common/SeoHelmet";
import useSeoHelmet from "../hooks/ReactHelmet";

const EnquiryForm = () => {
    const seo = useSeoHelmet("inquiry-form"); // Fetch SEO by slug

    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner title={"Inquiry Form"}
                description={"Reach Out for Innovation and Industrial Solutions"}

            />
            <section className="send-message">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col md={12} lg={8}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>        </div>
    )
}

export default EnquiryForm