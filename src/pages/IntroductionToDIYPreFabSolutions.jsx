import React, { lazy, Suspense } from 'react';
import { Container } from 'reactstrap';
import { FaWarehouse } from 'react-icons/fa';

import { infoBoxList } from '../Constants';

// Eagerly load critical components (above-the-fold)
import NavBar from '../common/NavBar';
import Banner from '../common/Banner';
import WhoWeAre from '../common/WhoWeAre';
import useSeoHelmet from '../hooks/ReactHelmet';
import SeoHelmet from '../common/SeoHelmet';

// Lazy load components used below the fold
const OurVision = lazy(() => import('../common/OurVision'));
const CounterCard = lazy(() => import('../common/CounterCard'));
const TrustSlider = lazy(() => import('../common/TrustSlider'));
const TestimonialCard = lazy(() => import('../common/TestimonialCard'));
const WaveWrapper = lazy(() => import('../common/WaveWrapper'));
const Footer = lazy(() => import('../common/Footer'));

const IntroductionToDIYPreFabSolutions = () => {
  const seo = useSeoHelmet("introduction-to-diy-prefab-solutions"); // Fetch SEO by slug
  return (
    <>
      <SeoHelmet seo={seo} />

      <NavBar />
      <Banner
        title="Introduction To DIY PreFab Solutions"
        description="Crafting Engineering Excellence"
      />

      <WhoWeAre />

      <section
        className="information-section"
        aria-label="Key Advantages of DIY PreFab"
      >
        <Container>
          <div className="information-container">
            {infoBoxList.map((item) => (
              <article className="info-box" key={item.id}>
                <FaWarehouse className="info-box-icons" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Suspense fallback={<div className="lazy-loader">Loading...</div>}>
        <OurVision />
        <CounterCard />
        <TrustSlider />
        <TestimonialCard />
        <WaveWrapper />
        <Footer />
      </Suspense>
    </>
  );
};

export default IntroductionToDIYPreFabSolutions;
