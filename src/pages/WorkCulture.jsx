import React, { useState, lazy, Suspense } from "react";
import NavBar from "../common/NavBar";
import Banner from "../common/Banner";
import { Col, Container, Row } from 'reactstrap';
import { FaHelmetSafety } from 'react-icons/fa6';
import { MdSupportAgent } from 'react-icons/md';
import ImagePath from "../assets/ImagePath";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";

// Lazy-loaded components
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));
const OurVision = lazy(() => import("../common/OurVision"));

// Loading Spinner Component
const LoadingSpinner = React.memo(() => (
  <div
    className="loading-spinner-container"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 0",
      minHeight: "100px",
    }}
    role="status"
    aria-label="Loading content"
  >
    <div
      className="spinner"
      style={{
        width: "24px",
        height: "24px",
        border: "3px solid #f3f3f3",
        borderTop: "3px solid #007bff",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
));

// Section Loader Component
const SectionLoader = React.memo(({ height = "150px" }) => (
  <div
    style={{
      minHeight: height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.7,
    }}
    role="status"
    aria-label="Loading section"
  >
    <LoadingSpinner />
  </div>
));

// Correct Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>
          <p>Something went wrong loading this section.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: "8px 16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              background: "#f8f9fa",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const WorkCulture = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => setOpenVideo(!openVideo);
  const seo = useSeoHelmet("work-culture");

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
                    <div className="divider" />
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

      <ErrorBoundary>
        <Suspense fallback={<SectionLoader height="200px" />}>
          <OurVision />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoader height="200px" />}>
          <WaveWrapper />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoader height="200px" />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>

      {openVideo && (
        <ErrorBoundary>
          <Suspense fallback={null}>
            <VideoModal open={openVideo} onClose={handleOpenVideo} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default WorkCulture;
