import React, { useState, lazy, Suspense } from "react";
import { Col, Container, Row } from "reactstrap";

import NavBar from "../common/NavBar";
import OurVision from "../common/OurVision";
import CounterCard from "../common/CounterCard";
import WaveWrapper from "../common/WaveWrapper";
import Footer from "../common/Footer";

import Performance from "../components/dashboard/Performance";
import WeDo from "../components/dashboard/WeDo";
import WhyChoose from "../components/dashboard/WhyChoose";
import WeOffer from "../components/dashboard/WeOffer";
import TakeAction from "../components/dashboard/TakeAction";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";

const WhoWeAre = lazy(() => import("../common/WhoWeAre"));
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const ContactForm = lazy(() => import("../common/ContactForm"));
const VideoModal = lazy(() => import("../common/VideoModal"));
const HeroSlider = lazy(() => import("../components/dashboard/HeroSlider"));

const Dashboard = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const seo = useSeoHelmet("home"); // Fetch SEO by slug
  const toggleVideo = () => setOpenVideo(prev => !prev);

  return (
    <div className="dashboard-box">
      <SeoHelmet seo={seo} />

      <NavBar />

      {/* Hero Section */}
      <Suspense fallback={null}>

        <HeroSlider />
      </Suspense>

      {/* Performance Section */}
      <Performance openVideo={openVideo} setOpenVideo={setOpenVideo} toggleVideo={toggleVideo} />

      <Suspense fallback={<div>Loading...</div>}>
        <WhoWeAre />
      </Suspense>

      <WeDo />
      <OurVision />
      <CounterCard />

      <WhyChoose toggleVideo={toggleVideo} />

      <WeOffer />
      <TakeAction />

      <Suspense fallback={<div>Loading...</div>}>
        <TrustSlider />
      </Suspense>

      {/* Contact Section */}
      <section className="send-message">
        <Container>
          <Row className="align-items-center">
            <Col md={12} lg={8}>
              <Suspense fallback={<div>Loading...</div>}>
                <ContactForm />
              </Suspense>
            </Col>
          </Row>
        </Container>
      </section>

      <WaveWrapper />
      <Footer />

      {/* Video Modal */}
      <Suspense fallback={null}>
        <VideoModal open={openVideo} onClose={toggleVideo} />
      </Suspense>
    </div>
  );
};

export default Dashboard;
