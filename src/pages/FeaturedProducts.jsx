import React, { lazy, Suspense } from "react";
import { Col, Container, Row } from "reactstrap";
import NavBar from '../common/NavBar';
import Banner from '../common/Banner';
import ImagePath from "../assets/ImagePath";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";

// Constants
const BANNER_TITLE = "Featured Projects";
const BANNER_DESCRIPTION = "Turning Concepts into Reality";
const OUR_PROJECTS_TITLE = "Our Projects";
const OUR_PROJECTS_SUBTITLE = "Unleashing Potential Through Engineering Projects";
const OUR_PROJECTS_DESCRIPTION = "At DIY PreFab, every project is a story of innovation, speed, and transformation.";
const LATEST_PROJECTS_TITLE = "Latest Project";
const LATEST_PROJECTS_SUBTITLE = "Discover Our Latest Engineering Masterpiece";
const WHY_PROJECTS_MATTER_TITLE = "Why These Projects Matter";
const WHY_CHOOSE_US_TITLE = "Why Choose Us?";
const LOADING_TEXT = "Loading...";

// Lazy-loaded components with error handling
const TrustSlider = lazy(() =>
  import("../common/TrustSlider").catch(() => ({ default: () => <div>Failed to load TrustSlider</div> }))
);

const WaveWrapper = lazy(() =>
  import("../common/WaveWrapper").catch(() => ({ default: () => <div>Failed to load WaveWrapper</div> }))
);

const Footer = lazy(() =>
  import("../common/Footer").catch(() => ({ default: () => <div>Failed to load Footer</div> }))
);

// Loading component
const LoadingSpinner = ({ message = LOADING_TEXT }) => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
    <span className="text-gray-600">{message}</span>
  </div>
);

const projectDetails = [
  {
    title: "Spinning Unit Rebuild – Rajasthan",
    location: "Rajasthan",
    structure: "Factory (105 Tonnes)",
    completion: "2 months",
    highlight: "Full demolition + prefab rebuild with covered walkways. Challenge Solved: Complete rebuild from ground up after demolishing old civil setup."
  },
  {
    title: "Multi-Storey Loomshed – Rajasthan",
    location: "Rajasthan",
    structure: "Shed (210 Tonnes)",
    additionalInfo: "G+1",
    completion: "2 months",
    highlight: "Full demolition + prefab rebuild with covered walkways. Challenge Solved: Complete rebuild from ground up after demolishing old civil setup."
  }
];

const FeaturedProducts = () => {
  const seo = useSeoHelmet("featured-projects");

  return (
    <div>
      <SeoHelmet seo={seo} />
      <NavBar />
      <Banner title={BANNER_TITLE} description={BANNER_DESCRIPTION} />

      <section className="our-project-wrap">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="our-project-left">
                <h6>{OUR_PROJECTS_TITLE}</h6>
                <h2>{OUR_PROJECTS_SUBTITLE}</h2>
                <p>{OUR_PROJECTS_DESCRIPTION}</p>
                <p>From PEB warehouses in Rajasthan to exportable factories built for South Africa, our featured prefab building projects showcase what’s possible when engineering meets purpose.</p>
                <p>We’ve successfully delivered pre-engineered buildings in cities like Udaipur, Jaipur, Ahmedabad, and Indore, and across regions such as Rajasthan, Gujarat, and Madhya Pradesh — making us one of India’s most agile prefab building solution providers.</p>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="we-are-right">
                <div className="our-project-right">
                  <img src={ImagePath.featureProject} alt="Featured Project" className="img-fluid" loading="lazy" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="common-section latest-projects-wrap">
        <Container>
          <div className="latest-proj-head">
            <h6>{LATEST_PROJECTS_TITLE}</h6>
            <h2>{LATEST_PROJECTS_SUBTITLE}</h2>
          </div>
          <Row>
            {projectDetails.map((project, idx) => (
              <Col md={6} key={idx}>
                <div className="latest-proj-box">
                  <div className="latest-img">
                    <img src={ImagePath.Slider1} alt={project.title} loading="lazy" />
                  </div>
                  <div className="latest-proj-content">
                    <h3>{project.title}</h3>
                    <p>Location: {project.location}</p>
                    <p>Structure: {project.structure}</p>
                    {project.additionalInfo && <p>{project.additionalInfo}</p>}
                    <p>Completion: {project.completion}</p>
                    <p>Highlight: {project.highlight}</p>
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
                  <h3>{WHY_PROJECTS_MATTER_TITLE}</h3>
                  <ul>
                    <li>Every project featured here represents</li>
                    <li>Rapid construction with minimal downtime</li>
                    <li>Affordable alternatives to conventional buildings</li>
                    <li>Innovation through pre-engineered building systems</li>
                    <li>Growing demand for prefab in Udaipur, Ahmedabad, Indore, and beyond</li>
                  </ul>
                  <p>We’re helping India (and the world) build smarter, faster, and greener.</p>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className="why-latest-box">
                  <h3>{WHY_CHOOSE_US_TITLE}</h3>
                  <ul>
                    <li><strong>Zero-Cost Design & Estimate Consultation</strong> – Our experts guide you from concept to execution.</li>
                    <li><strong>Sustainable & Smart Designs</strong> – Reduce carbon footprint with eco-friendly prefabrication.</li>
                    <li><strong>Speed & Affordability</strong> – Faster construction with minimized costs.</li>
                    <li><strong>3D Smart Building Planner</strong> – Your blueprint to perfection! Visualize, modify, and optimize your design with precision.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <Suspense fallback={<LoadingSpinner />}>
        <TrustSlider />
        <WaveWrapper />
        <Footer />
      </Suspense>
    </div>
  );
};

export default FeaturedProducts;
