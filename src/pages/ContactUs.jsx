import React, { lazy, Suspense } from "react";
import { ImOffice } from 'react-icons/im';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { Button, Col, Container, Row } from 'reactstrap';
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";
import ContactForm from "../components/contactus/ContactForm";

// Constants
const BANNER_TITLE = "Contact Us";
const BANNER_DESCRIPTION = "Reach Out for Innovation and Industrial Solutions";
const SECTION_TITLE = "Get in Touch";
const SECTION_SUBTITLE = "Connect with Engineering Excellence";
const SECTION_DESCRIPTION = "Connect with engineering excellence that delivers smart, sustainable, and precision-driven prefab solutions tailored to your vision.";
const LOADING_TEXT = "Loading...";

// Lazy-loaded components with error handling
const Footer = lazy(() =>
  import("../common/Footer").catch(() => ({ default: () => <div>Failed to load footer</div> }))
);

// Loading component
const LoadingSpinner = ({ message = LOADING_TEXT }) => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
    <span className="text-gray-600">{message}</span>
  </div>
);

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
];

const ContactUs = () => {
  const seo = useSeoHelmet("contact-us");

  return (
    <div>
      <SeoHelmet seo={seo} />
      <NavBar />
      <Banner title={BANNER_TITLE} description={BANNER_DESCRIPTION} />

      <section className='contact-us-form'>
        <Container>
          <div className='contact-us-form-container'>
            <Row>
              <Col md={6} className='mb-sm-3 mb-md-0'>
                <div className="contact-us-form-left">
                  <h6>{SECTION_TITLE}</h6>
                  <h2>{SECTION_SUBTITLE}</h2>
                  <p>{SECTION_DESCRIPTION}</p>
                  <div className="choose-us-container">
                    {contactList.map((item) => (
                      <div className="why-choose-us-boxes" key={item.id}>
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
                  <ContactForm />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <Suspense fallback={<LoadingSpinner message="Loading footer..." />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ContactUs;
