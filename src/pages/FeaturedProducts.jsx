import React, { lazy, Suspense } from "react";
import { Col, Container, Row } from "reactstrap";
import NavBar from '../common/NavBar';
import Banner from '../common/Banner';
import ImagePath from "../assets/ImagePath";

// Lazy load components below the fold
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));

const FeaturedProducts = () => {
  return (
    <div>
      <NavBar />
      <Banner
        title={"Featured Projects"}
        description={"Turning Concepts into Reality"}
      />

      <section className="our-project-wrap">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="our-project-left">
                <h6>Our Projects</h6>
                <h2>Unleashing Potential Through Engineering Projects</h2>
                <p>
                  Pre Engineered Building Projects Across India and Beyond
                </p>
                <p>
                  At “DIY PreFab”, every project is a story of innovation, speed, and transformation.
                </p>
                <p>
                  From PEB warehouses in Rajasthan to exportable factories built for South Africa, our featured prefab building projects showcase what’s possible when engineering meets purpose.
                </p>
                <p>
                  We’ve successfully delivered pre engineered buildings in cities like Udaipur, Jaipur, Ahmedabad, and Indore, and across regions such as Rajasthan, Gujarat, and Madhya Pradesh — making us one of India’s most agile prefab building solution providers.
                </p>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="we-are-right">
                <div className="our-project-right">
                  <img
                    src={ImagePath.featureProject}
                    alt="we-are-back"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="common-section latest-projects-wrap">
        <Container>
          <div className="latest-proj-head">
            <h6>Latest Project</h6>
            <h2>Discover Our Latest Engineering <br /> Masterpiece</h2>
          </div>
          <Row>
            {[1, 2, 3, 4].map((item, idx) => (
              <Col md={6} key={idx}>
                <div className="latest-proj-box">
                  <div className="latest-img">
                    <img src={ImagePath.Slider1} alt="" loading="lazy" />
                  </div>
                  <div className="latest-proj-content">
                    <h3>{idx % 2 === 0 ? "Spinning Unit Rebuild – Rajasthan" : "Multi-Storey Loomshed – Rajasthan"}</h3>
                    <p>Location: Rajasthan</p>
                    <p>Structure: {idx % 2 === 0 ? "Factory (105 Tonnes)" : "Shed (210 Tonnes)"}</p>
                    {idx % 2 !== 0 && <p>G+1</p>}
                    <p>Completion: 2 months </p>
                    <p>
                      Highlight: Full demolition + prefab rebuild with covered walkways
                      Challenge Solved: Complete rebuild from ground up after demolishing old civil setup
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="common-section why-latest-project">
        <Container>
          <div className="why-latest-container">
            <Row>
              <Col md={12} lg={6}>
                <div className="why-latest-box">
                  <h3>Why These Projects <br /> Matter</h3>
                  <ul>
                    <li>Every project featured here represents</li>
                    <li>Rapid construction with minimal downtime</li>
                    <li>Affordable alternatives to conventional buildings</li>
                    <li>Innovation through pre engineered building systems</li>
                    <li>Growing demand for prefab in Udaipur, Ahmedabad, Indore, and beyond</li>
                  </ul>
                  <p>We’re helping India (and the world) build smarter, faster, and greener.</p>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className="why-latest-box">
                  <h3>Why Choose Us?</h3>
                  <ul>
                    <li><strong>Zero-Cost Design & Estimate Consultation –</strong> Our experts guide you from concept to execution.</li>
                    <li><strong>Sustainable & Smart Designs –</strong> Reduce carbon footprint with eco-friendly prefabrication.</li>
                    <li><strong>Speed & Affordability –</strong> Faster construction with minimized costs.</li>
                    <li><strong>3D Smart Building Planner –</strong> Your blueprint to perfection! Visualize, modify, and optimize your design with precision.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Lazy loaded section */}
      <Suspense fallback={<div className="lazy-loader">Loading...</div>}>
        <TrustSlider />
        <WaveWrapper />
        <Footer />
      </Suspense>
    </div>
  );
};

export default FeaturedProducts;
