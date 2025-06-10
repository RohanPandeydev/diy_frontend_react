import React, { useState, lazy, Suspense } from "react";
import { Button, Container, Table } from "reactstrap";
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import { comparisonListProductandServices, weOfferListProductandServices } from "../Constants";
import OurServices from "../components/productandservices/diyprefabkits/OurServices";
import ImagePath from "../assets/ImagePath";
import WhyChooseUs from "../components/productandservices/wallroofingsolutions/sandwichpanel/WhyChooseUs";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";

// Lazy-loaded components
const TrustSlider = lazy(() => import("../common/TrustSlider"));
const CounterCard = lazy(() => import("../common/CounterCard"));
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
const VideoModal = lazy(() => import("../common/VideoModal"));

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

// Error Boundary Component
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>
        <p>Something went wrong loading this section.</p>
        <button
          onClick={() => setHasError(false)}
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

  return (
    <React.ErrorBoundary
      onError={() => setHasError(true)}
      fallbackRender={() => null}
    >
      {children}
    </React.ErrorBoundary>
  );
};

const ProductandServices = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => setOpenVideo(!openVideo);
  const seo = useSeoHelmet("product-services");

  return (
    <div>
      <SeoHelmet seo={seo} />
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
            <p><strong>Smart Steel Buildings — Faster, Stronger, and More Efficient</strong></p>
            <p>
              At “DIY PreFab”, our <strong>Pre Engineered Buildings (PEBs)</strong> are designed to break the traditional barriers of construction — slow timelines, high costs, and dependency on heavy labor. Instead, we offer <strong>engineered steel building kits</strong> that are fabricated off-site, delivered to your location, and assembled in a fraction of the time.
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
                    <th>Sector</th>
                    <th>Applications</th>
                  </tr>
                </thead>
                <tbody className="common-table-tbody">
                  {comparisonListProductandServices.map((compare, index) => (
                    <tr key={index}>
                      <td><p><strong>{compare.feature}</strong></p></td>
                      <td><p>{compare.prefab}</p></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <p><strong>Service Areas: </strong> Rajasthan, Gujarat, Madhya Pradesh — especially Udaipur, Jaipur, Ahmedabad, and Indore</p>
            </div>
          </div>
        </Container>
      </section>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoader height="200px" />}>
          <TrustSlider />
        </Suspense>
      </ErrorBoundary>

      <section className="product we-offer" style={{ backgroundImage: `url(${ImagePath.Bg})`, backgroundSize: "cover", backgroundPosition: "center", padding: "60px 0", backgroundColor: "#a8dadc" }}>
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

      <ErrorBoundary>
        <Suspense fallback={<SectionLoader height="200px" />}>
          <CounterCard />
        </Suspense>
      </ErrorBoundary>

      <section className="common-section WhoWeAre-about">
        <Container>
          <div className="WhoWeAre-box">
            <h2>Pre Engineered Buildings (PEBs)</h2>
            <p><strong>Smart Steel Buildings — Faster, Stronger, and More Efficient</strong></p>
            <p>
              At “DIY PreFab”, our <strong>Pre Engineered Buildings (PEBs)</strong> are designed to break the traditional barriers of construction — slow timelines, high costs, and dependency on heavy labor. Instead, we offer <strong>engineered steel building kits</strong> that are fabricated off-site, delivered to your location, and assembled in a fraction of the time.
            </p>
            <p>
              Whether you’re setting up a <strong>warehouse in Gujarat</strong>, a <strong>factory in Madhya Pradesh</strong>, or a <strong>production unit in Rajasthan</strong>, our PEB systems are fast, scalable, and built to last.
            </p>
          </div>
        </Container>
      </section>

      <WhyChooseUs handleOpenVideo={handleOpenVideo} />

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

export default ProductandServices;
