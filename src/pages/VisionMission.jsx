import { lazy, Suspense } from "react";
import Banner from "../common/Banner";
import CounterCard from '../common/CounterCard';
import OurVision from '../common/OurVision';
import NavBar from '../common/NavBar';
import MainSection from "../components/about/MainSection";
import Information from "../components/about/Information";
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";

// ✅ Lazy-loaded components
const TrustSlider = lazy(() => import('../common/TrustSlider'));
const TestimonialCard = lazy(() => import('../common/TestimonialCard'));
const WaveWrapper = lazy(() => import('../common/WaveWrapper'));
const Footer = lazy(() => import('../common/Footer'));

const VisionMission = () => {
  const seo = useSeoHelmet("our-vision-mission"); // Fetch SEO by slug



  return (
    <div>
      <SeoHelmet seo={seo} />

      <NavBar />
      <Banner
        title={"Our Vision & Mission"}
        description={"Designing Tomorrow’s Structures, Today."}
      />

      {/* Main Section */}
      <MainSection />

      {/* Information Section */}
      <Information />


      <OurVision />
      <CounterCard />

      {/* ✅ Suspense for lazy-loaded components */}
      <Suspense fallback={<div className="lazy-loader">Loading...</div>}>
        <TrustSlider />
        <TestimonialCard />
        <WaveWrapper />
        <Footer />
      </Suspense>
    </div>
  );
};

export default VisionMission;
