import React, { useState, lazy, Suspense } from "react";

import {
  Button,
  Col,
  Container,
  Progress,
  Row,
  Table,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import Info from "../components/productandservices/portablestructure/Info";
import TestimonialCard from "../common/TestimonialCard";
import OurVision from "../common/OurVision";

// Lazy-loaded components
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const CounterCard = lazy(() => import("../common/CounterCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));

import { FiSettings } from "react-icons/fi";
import { comparisonListProductandServices, weOfferListProductandServices } from "../Constants";
import OurServices from "../components/productandservices/diyprefabkits/OurServices";
import WhyChoose from "../components/dashboard/WhyChoose";
import ImagePath from "../assets/ImagePath";
import WhoWeAre from "../common/WhoWeAre";
import WhyChooseUs from "../components/productandservices/wallroofingsolutions/sandwichpanel/WhyChooseUs";

const ProductandServices = () => {

  const [openVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => setOpenVideo(!openVideo);





  return (
    <div>
      <NavBar />
      <Banner
        title={"Product & Services"}
        description={"Engineering Excellence, Industrial Solutions"}
      />
      <OurServices title={"Products & Services Scalable Prefab & Steel Solutions for Every Sector"} />

      <section className="common-section WhoWeAre-about">
        <Container>
          <div className="WhoWeAre-box">
            <h2>Pre Engineered Buildings (PEBs)</h2>
            <p>
              <strong>Smart Steel Buildings — Faster, Stronger, and More Efficient</strong>
            </p>
            <p>
              At “DIY PreFab”, our <strong>Pre Engineered Buildings (PEBs)</strong> are designed to break the traditional barriers of construction — slow timelines, high costs, and dependency on heavy labor. Instead, we offer <strong>engineered steel building kits</strong>  that are fabricated off-site, delivered to your location, and assembled in a fraction of the time.
            </p>
            <p>
              Whether you’re setting up a <strong>warehouse in Gujarat</strong>, a <strong>factory in Madhya Pradesh</strong>, or a <strong>production unit in Rajasthan</strong>, our PEB systems are fast, scalable, and built to last.
            </p>
          </div>
        </Container>
      </section>
      <section className="comparison-section">
        <Container>
          <div className="comparison-container">
            <h2>Where PEBs Are Used</h2>
            <div className="comparison-container-box">
              <Table responsive bordered hover>
                <thead className="common-table-thead">
                  <tr>
                    <th> Sector</th>
                    <th>Applications</th>
                  </tr>
                </thead>
                <tbody className="common-table-tbody">
                  {comparisonListProductandServices.map((compare, index) => (
                    <tr key={index.id}>
                      <td>
                        <p><strong>{compare.feature}</strong></p>
                      </td>
                      <td>
                        <p>{compare.prefab}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <p>
                <strong>Service Areas: </strong> Rajasthan, Gujarat, Madhya Pradesh — especially Udaipur, Jaipur, Ahmedabad, and Indore
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <TrustSlider />
      </Suspense>
      <section
        className="product we-offer"
        style={{
          backgroundImage: `url(${ImagePath.Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 0",
          backgroundColor: "#a8dadc",
        }}
      >
        <Container>
          <div className="we-offer-header">
            <p>What WE oFFER</p>
            <h4>Engineering solutions for all industries</h4>
          </div>
          <div className="we-offer-container">
            {weOfferListProductandServices.map((item, index) => (
              <div className="we-offer-box" key={index}>
                <div className="we-offer-inner">
                  <div className="we-offer-front">
                    <div className="we-offer-icon">{item.icon}</div>
                    <div className="we-offer-content">
                      <h4>{item.title}</h4>
                      <p>{item.description && item.description}</p>
                      <ul>
                        {item.listData && item.listData.map((listItem, listIndex) => (
                          <li key={listIndex}>{listItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="we-offer-hover-box">
                    <div className="we-offer-hover-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <ul>
                        {item.listData && item.listData.map((listItem, listIndex) => (
                          <li key={listIndex}>{listItem}</li>
                        ))}
                      </ul>
                      <Button className="common-btn">Learn More</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>



      <CounterCard />
      <section className="common-section WhoWeAre-about">
        <Container>
          <div className="WhoWeAre-box">
            <h2>Pre Engineered Buildings (PEBs)</h2>
            <p>
              <strong>Smart Steel Buildings — Faster, Stronger, and More Efficient</strong>
            </p>
            <p>
              At “DIY PreFab”, our <strong>Pre Engineered Buildings (PEBs)</strong> are designed to break the traditional barriers of construction — slow timelines, high costs, and dependency on heavy labor. Instead, we offer <strong>engineered steel building kits</strong>  that are fabricated off-site, delivered to your location, and assembled in a fraction of the time.
            </p>
            <p>
              Whether you’re setting up a <strong>warehouse in Gujarat</strong>, a <strong>factory in Madhya Pradesh</strong>, or a <strong>production unit in Rajasthan</strong>, our PEB systems are fast, scalable, and built to last.
            </p>
          </div>
        </Container>
      </section>

      <WhyChooseUs  handleOpenVideo={handleOpenVideo}   />



      <Suspense fallback={<div>Loading visual section...</div>}>
        <WaveWrapper />
      </Suspense>

      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>




      {/* Video Modal */}
      <Suspense fallback={null}>
        <VideoModal open={openVideo} onClose={handleOpenVideo} />
      </Suspense>
    </div>
  )
}

export default ProductandServices
