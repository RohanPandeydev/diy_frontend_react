import React, { lazy, Suspense } from "react";
import ImagePath from "../assets/ImagePath";
import { FaWarehouse } from "react-icons/fa";
import {  FaHelmetSafety } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { Col, Container, Row, Table } from "reactstrap";
import { comparisonListSus } from "../Constants";

// Lazy-loaded components
const NavBar = lazy(() => import("../common/NavBar"));
const Banner = lazy(() => import("../common/Banner"));
const OurVision = lazy(() => import("../common/OurVision"));
const CounterCard = lazy(() => import("../common/CounterCard"));
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const TestimonialCard = lazy(() => import("../common/TestimonialCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));

const InfoBox = ({ icon: Icon, title, content, list }) => (
  <div className="info-box">
    <Icon className="info-box-icons" />
    <h6>{title}</h6>
    {content && <p>{content}</p>}
    {list && <ul>{list.map((item, idx) => <li key={idx}>{item}</li>)}</ul>}
  </div>
);

const Sustainability = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading header...</div>}>
        <NavBar />
      </Suspense>

      <Suspense fallback={<div>Loading banner...</div>}>
        <Banner
          title="Leading the Green Building Revolution"
          description="Building Begins with Smart Engineering"
        />
      </Suspense>

      <section className="we-are-section">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="we-are-left">
                <h6>Who We Are</h6>
                <h2>
                  Sustainability & Eco-Friendly Initiatives Building Greener,
                  Smarter, and More Responsible Infrastructure
                </h2>
                <p>
                  At “DIY PreFab”, sustainability is not just a feature — it’s a
                  foundation. Every prefab building we deliver is designed to
                  minimize environmental impact, reduce construction waste, and
                  support India’s transition to a low-carbon future.
                </p>
                <p>
                  We’re proud to be part of a new generation of eco-conscious
                  construction companies in India, offering scalable, efficient,
                  and sustainable solutions for a better tomorrow.
                </p>
                <div className="we-are-left-content-container">
                  <div className="we-are-left-content-box">
                    <FaHelmetSafety className="performance-icons" />
                    <h4>Professional Expert</h4>
                    <p>
                      Prefab buildings empower professional experts with faster
                      deployment, design flexibility, and cost-effective
                      construction solutions.
                    </p>
                  </div>
                  <div className="we-are-left-content-box">
                    <MdSupportAgent className="performance-icons" />
                    <h4>24/7 Premium Support</h4>
                    <p>
                      Experience uninterrupted service and peace of mind with
                      24/7 premium support tailored for your prefab building
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={12} lg={6}>
              <div className="we-are-right">
                <div className="we-are-back-image-section">
                  <img
                    src={ImagePath.WRB}
                    alt="we-are-back"
                    className="img-fluid"
                  />
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

            <Col md={12}>
              <div className="wsustain-box">
                <h2>Why Sustainability Matters in Construction</h2>
                <p>
                  The construction sector contributes significantly to carbon
                  emissions, energy use, and landfill waste. Traditional
                  brick-and-mortar methods rely heavily on concrete, water, and
                  time — all of which carry environmental costs.
                </p>
                <p>
                  Our <strong>pre engineered building systems</strong> offer a
                  cleaner, smarter alternative for industries, farms, NGOs, and
                  institutions across India.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="comparison-section">
        <Container>
          <div className="comparison-container">
            <h2>Our Core Eco-Friendly Practices</h2>
            <div className="comparison-container-box">
              <Table responsive bordered hover>
                <thead className="common-table-thead">
                  <tr>
                    <th>Sustainable Feature</th>
                    <th>How It Helps</th>
                  </tr>
                </thead>
                <tbody className="common-table-tbody">
                  {comparisonListSus.map((compare, index) => (
                    <tr key={index}>
                      <td>{compare.feature}</td>
                      <td>{compare.prefab}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </section>

      <section className="information-section">
        <Container>
          <div className="information-container">
            <InfoBox
              icon={FaWarehouse}
              title="Sustainable Benefits for You"
              list={[
                "Lower Lifecycle Costs – less maintenance, more savings",
                "Faster Occupancy – start operations quicker = lower carbon impact",
                "Minimal Land Disruption – smaller foundations, no heavy excavation",
                "Low Embodied Energy – reduced energy use in material manufacturing",
                "Long-Term Recyclability – no material is wasted after use"
              ]}
            />
            <InfoBox
              icon={FaWarehouse}
              title="Carbon tracking metrics for future net-zero projects"
              content="We’re not just eco-friendly — we’re eco-determined."
            />
            <InfoBox
              icon={FaWarehouse}
              title="Join Our Green Building Movement"
              content="When you build with DIY PreFab, you're not just saving time and money — you're contributing to a healthier planet. Build responsibly. Reduce construction waste. Lower your carbon footprint."
            />
            <InfoBox
              icon={FaWarehouse}
              title="Supporting Sustainable Growth in India"
              content={`Whether you're a farmer, a business, a school, or a government agency, DIY PreFab delivers prefab solutions with sustainability at the core. Target Regions: Rajasthan, Gujarat, Madhya Pradesh, Udaipur, Indore, Ahmedabad.`}
            />
            <InfoBox
              icon={FaWarehouse}
              title="Innovations We're Working On"
              list={[
                "Solar-integrated roofing solutions.",
                "Use of fly ash bricks and green wall panels.",
                "Low-emission logistics for remote installations."
              ]}
            />
            <InfoBox
              icon={FaWarehouse}
              title="Global Responsibility, Local Action"
              content="We align with the UN Sustainable Development Goals (SDGs), especially:"
              list={[
                "Goal 9: Industry, Innovation & Infrastructure",
                "Goal 11: Sustainable Cities & Communities",
                "Goal 13: Climate Action. Our project in South Africa demonstrates our ability to deliver low-carbon PEB buildings internationally — and we aim to bring these standards to every corner of India."
              ]}
            />
          </div>
        </Container>
      </section>

      <Suspense fallback={<div>Loading vision...</div>}>
        <OurVision />
      </Suspense>

      <Suspense fallback={<div>Loading counters...</div>}>
        <CounterCard />
      </Suspense>

      <Suspense fallback={<div>Loading trust slider...</div>}>
        <TrustSlider />
      </Suspense>

      <Suspense fallback={<div>Loading testimonials...</div>}>
        <TestimonialCard />
      </Suspense>

      <Suspense fallback={<div>Loading footer visuals...</div>}>
        <WaveWrapper />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Sustainability;
