import React, {  lazy, Suspense } from "react";
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import { Button, Col, Container, Form, Input, Row } from 'reactstrap'
import { ImOffice } from 'react-icons/im'
import { MdOutlineEmail } from 'react-icons/md'
import { IoCallOutline } from 'react-icons/io5'
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";
import ContactForm from "../components/contactus/ContactForm";
const Footer = lazy(() => import("../common/Footer"));


const contactList = [
    {
        id: 1,
        icon: <ImOffice className='choose-us-icons' />,
        title: "Head Office",
        description: "32_C Nakoda Nagar II, Udaipur 313001"
    },
    {
        id: 2,
        icon: <MdOutlineEmail className='choose-us-icons' />,
        title: "Email Us",
        description: "info@diyprefeb.com"
    },
    {
        id: 3,
        icon: <IoCallOutline className='choose-us-icons' />,
        title: "Let's Talk",
        description: "Phone : +91 8619015622"
    },
]

const ContactUs = () => {
    const seo = useSeoHelmet("contact-us"); // Fetch SEO by slug

    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner title={"Contact Us"} description={"Reach Out for Innovation and Industrial Solutions"} />
            <section className='contact-us-form'>
                <Container>
                    <div className='contact-us-form-container'>
                        <Row>
                            <Col md={6} className='mb-sm-3 mb-md-0'>
                                <div className="contact-us-form-left">
                                    <h6>Get in Touch</h6>
                                    <h2>Connect with Engineering Excellence</h2>
                                    <p>Connect with engineering excellence that delivers smart, sustainable, and precision-driven prefab solutions tailored to your vision.</p>
                                    <div className="choose-us-container">
                                        {contactList.map((item) => (
                                            <div className="why-choose-us-boxes">
                                                <div className="box-icon">{item.icon}</div>
                                                <div className="box-content">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="contact-us-form-right">
                                  <ContactForm/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>
        </div>
    )
}

export default ContactUs