import React from "react";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { Col, Container, Row } from "reactstrap";
import ImagePath from "../assets/ImagePath";

const WhoWeAre = React.memo(() => {
  return (
    <section className="we-are-section">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="we-are-left">
              <h6>Who We Are</h6>
              <h2>Your Trusted and Visionary Partner in Engineering Excellence</h2>
              <p>
                Welcome to <span>DIY PreFab</span>, where innovation meets efficiency in the prefabrication industry. We provide cutting-edge,{" "}
                <span>high-quality PEB and modular structures</span>, ensuring faster construction, reduced costs, and unmatched durability.
                Our <span>expert engineers</span> are ready to guide you with a{" "}
                <span>free design & estimate consultation</span> to find the best solution for your needs. Plus, we offer a{" "}
                <span>free-of-cost quality verification check</span> to guarantee the highest industry standards. <br />
                <span>Explore our 3D Smart Building Planner</span>, an intuitive digital tool that allows you to{" "}
                <span>visualize, customize, and refine</span> your prefabricated structure in real time. This immersive platform empowers you to{" "}
                <span>experiment with layouts, optimize material usage, and perfect your design before execution</span>
                — ensuring efficiency, cost-effectiveness, and sustainability from day one.
              </p>
              <div className="we-are-left-content-container">
                <div className="we-are-left-content-box">
                  <FaHelmetSafety className="performance-icons" aria-label="Professional Expert" />
                  <h4>Professional Expert</h4>
                  <p>
                    Prefab buildings empower professional experts with faster deployment, design flexibility, and cost-effective construction solutions.
                  </p>
                </div>
                <div className="we-are-left-content-box">
                  <MdSupportAgent className="performance-icons" aria-label="24/7 Premium Support" />
                  <h4>24/7 Premium Support</h4>
                  <p>
                    Experience uninterrupted service and peace of mind with 24/7 premium support tailored for your prefab building needs.
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
                  alt="Background of engineering excellence"
                  className="img-fluid"
                  loading="lazy"
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
        </Row>
      </Container>
    </section>
  );
});

export default WhoWeAre;
