import React from "react";
import NavBarHead from "../../component/navbar/NavBarHead";
import WhoWeAre from "../../component/whoWeAre/WhoWeAre";
import { Col, Container, Row, Table } from "reactstrap";
import BannerSection from "../../component/bannerSection/BannerSection";
import { FaLocationArrow, FaWarehouse } from "react-icons/fa";
import OurVisionMission from "../../component/ourVisionMission/OurVisionMission";
import CounterSection from "../../component/counter/CounterSection";
import TrustSlider from "../../component/trustSlider/TrustSlider";
import TestimonialSection from "../../component/testimonialSection/TestimonialSection";
import WaveWrapper from "../../component/waveWrapper/WaveWrapper";
import Footer from "../../component/footer/Footer";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import ImagePath from "../../assets/ImagePath";

const FeaturedProducts = () => {
  const benefitsList = [
    {
      id: 1,
      title: "Super Fast Project Timelines",
      description: `With prefab, 80% of the work is done in the factory. On-site assembly takes a fraction of the time compared to laying bricks, curing concrete, or managing dozens of laborers`,
    },
    {
      id: 2,
      title: "Budget-Friendly & Transparent",
      description: `Get clear costs up front. No hidden labor charges, no escalating bills. You save on both materials and time — two major budget drivers.`,
    },
    {
      id: 3,
      title: "Site Cabins",
      description: `Prefab buildings are essential for site cabins, offering quick setup and easy relocation. They provide durable, weather-resistant spaces ideal for on-site offices and worker accommodations. With efficient construction and cost savings, prefab cabins enhance project mobility and productivity.`,
    },
    {
      id: 4,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
    {
      id: 5,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
    {
      id: 6,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
    {
      id: 7,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
    {
      id: 8,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
  ];

  const casesBoxList = [
    {
      id: 1,
      title: "WareHouse",
      description: `Prefab buildings offer a fast, cost-effective solution for modern warehouse construction. Their modular design ensures quicker installation, reduced labor, and minimal site disruption. With durability and scalability, prefab structures are ideal for dynamic warehouse needs.`,
    },
    {
      id: 2,
      title: "Offices Shops",
      description: `Prefab buildings offer a fast, cost-effective solution for modern office and shop spaces. They reduce construction time, minimize waste, and ensure consistent quality. Ideal for businesses seeking flexibility and scalability, prefab structures meet today's dynamic needs.`,
    },
    {
      id: 3,
      title: "Site Cabins",
      description: `Prefab buildings are essential for site cabins, offering quick setup and easy relocation. They provide durable, weather-resistant spaces ideal for on-site offices and worker accommodations. With efficient construction and cost savings, prefab cabins enhance project mobility and productivity.`,
    },
    {
      id: 4,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
    {
      id: 5,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
    {
      id: 6,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
    {
      id: 7,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
    {
      id: 8,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
    {
      id: 9,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
  ];

  return (
    <div>
      <NavBarHead />
      <BannerSection title={"Featured Projects"} description={"Turning Concepts into Reality"}/>

      <section className="our-project-wrap">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="our-project-left">
                <h6>Our Projects</h6>
                <h2>
                  Unleashing Potential Through Engineering Projects
                </h2>
                <p>
                  Pre Engineered Building Projects Across India and Beyond
                </p>
                <p>At “DIY PreFab”, every project is a story of innovation, speed, and transformation.</p>
                <p>From PEB warehouses in Rajasthan to exportable factories built for South Africa, our featured prefab building projects showcase what’s possible when engineering meets purpose.</p>
                <p>We’ve successfully delivered pre engineered buildings in cities like Udaipur, Jaipur, Ahmedabad, and Indore, and across regions such as Rajasthan, Gujarat, and Madhya Pradesh — making us one of India’s most agile prefab building solution providers.</p>
                {/* <div className="we-are-left-content-container">
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
                </div> */}
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="we-are-right">
                <div className=" our-project-right">
                  <img
                    src={ImagePath.featureProject}
                    alt="we-are-back"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="information-section">
        <Container>
          <div className="benefits-cases-container">
            {benefitsList.map((item, index) => (
              <div className="info-box" key={index}>
                <FaLocationArrow className="info-box-icons" />
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section> */}

      <section className="common-section latest-projects-wrap">
        <Container>
          <div className="latest-proj-head">
            <h6>Latest Project</h6>
            <h2>Discover Our Latest Engineering <br /> Masterpiece</h2>
          </div>
          <Row>
            <Col md={6}>
              <div className="latest-proj-box">
                <div className="latest-img">
                  <img src={ImagePath.Slider1} alt="" />
                </div>
                <div className="latest-proj-content">
                  <h3>Spinning Unit Rebuild – Rajasthan</h3>
                  <p>Location: Rajasthan</p>
                  <p>Structure: Factory (105 Tonnes)</p>
                  <p>Completion: 2 months </p>
                  <p>Highlight: Full demolition + prefab rebuild with covered walkways Challenge Solved: Complete rebuild from ground up after demolishing old civil setup</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="latest-proj-box">
                <div className="latest-img">
                  <img src={ImagePath.Slider1} alt="" />
                </div>
                <div className="latest-proj-content">
                  <h3>Multi-Storey Loomshed – Rajasthan</h3>
                  <p>Location: Rajasthan</p>
                  <p>Structure: Shed (210 Tonnes)</p>
                  <p>G+1</p>
                  <p>Completion: 2 months </p>
                  <p>Highlight: Full demolition + prefab rebuild with covered walkways Challenge Solved: Complete rebuild from ground up after demolishing old civil setup</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="latest-proj-box">
                <div className="latest-img">
                  <img src={ImagePath.Slider1} alt="" />
                </div>
                <div className="latest-proj-content">
                  <h3>Spinning Unit Rebuild – Rajasthan</h3>
                  <p>Location: Rajasthan</p>
                  <p>Structure: Factory (105 Tonnes)</p>
                  <p>Completion: 2 months </p>
                  <p>Highlight: Full demolition + prefab rebuild with covered walkways Challenge Solved: Complete rebuild from ground up after demolishing old civil setup</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="latest-proj-box">
                <div className="latest-img">
                  <img src={ImagePath.Slider1} alt="" />
                </div>
                <div className="latest-proj-content">
                  <h3>Multi-Storey Loomshed – Rajasthan</h3>
                  <p>Location: Rajasthan</p>
                  <p>Structure: Shed (210 Tonnes)</p>
                  <p>G+1</p>
                  <p>Completion: 2 months </p>
                  <p>Highlight: Full demolition + prefab rebuild with covered walkways Challenge Solved: Complete rebuild from ground up after demolishing old civil setup</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="common-section why-latest-project">
        <Container>
          <div className="why-latest-container">
            <Row>
              <Col md={12} lg={6}>
                <div className="why-latest-box">
                  <h3>Why These Projects  <br /> Matter</h3>
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
                    <li><strong>Zero-Cost Design & Estimate Consultation –</strong> Our experts guide you from concept to execution.</li>
                    <li><strong>Sustainable & Smart Designs –</strong> Reduce carbon footprint with eco-friendly prefabrication.</li>
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

      <TrustSlider />


      <WaveWrapper />
      <Footer />
    </div>
  );
};

export default FeaturedProducts;
