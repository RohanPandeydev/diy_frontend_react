import React, { lazy, Suspense, useEffect } from 'react';
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
const OurVision = lazy(() =>
  import('../common/OurVision').then((module) => ({
    default: module.default,
  }))
);

const CounterCard = lazy(() =>
  import('../common/CounterCard').then((module) => ({
    default: module.default,
  }))
);

const TrustSlider = lazy(() =>
  import('../common/TrustSlider').then((module) => ({
    default: module.default,
  }))
);

const TestimonialCard = lazy(() =>
  import('../common/TestimonialCard').then((module) => ({
    default: module.default,
  }))
);

const WaveWrapper = lazy(() =>
  import('../common/WaveWrapper').then((module) => ({
    default: module.default,
  }))
);

const Footer = lazy(() =>
  import('../common/Footer').then((module) => ({
    default: module.default,
  }))
);

// Custom loading spinner component
const LoadingSpinner = React.memo(() => (
  <div
    className="loading-spinner-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 0',
      minHeight: '100px',
    }}
    role="status"
    aria-label="Loading content"
  >
    <div
      className="spinner"
      style={{
        width: '24px',
        height: '24px',
        border: '3px solid #f3f3f3',
        borderTop: '3px solid #007bff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }}
    />
    <style jsx>{`
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
));

// Section loader component
const SectionLoader = React.memo(({ height = '150px' }) => (
  <div
    style={{
      minHeight: height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.7,
    }}
    role="status"
    aria-label="Loading section"
  >
    <LoadingSpinner />
  </div>
));

// Error boundary for lazy components
class LazyComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lazy component loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
          <p>Something went wrong loading this section.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: '8px 16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              background: '#f8f9fa',
              cursor: 'pointer',
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

// Preload components after initial render
const useComponentPreloading = () => {
  useEffect(() => {
    const preloadComponents = () => {
      import('../common/OurVision');
      import('../common/CounterCard');
      import('../common/TrustSlider');
      import('../common/TestimonialCard');
      import('../common/WaveWrapper');
      import('../common/Footer');
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadComponents, { timeout: 2000 });
    } else {
      setTimeout(preloadComponents, 100);
    }
  }, []);
};

const IntroductionToDIYPreFabSolutions = () => {
  const seo = useSeoHelmet('introduction-to-diy-prefab-solutions');
  useComponentPreloading();

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

      <Suspense fallback={<SectionLoader height="400px" />}>
        <LazyComponentErrorBoundary>
          <OurVision />
        </LazyComponentErrorBoundary>
        <LazyComponentErrorBoundary>
          <CounterCard />
        </LazyComponentErrorBoundary>
        <LazyComponentErrorBoundary>
          <TrustSlider />
        </LazyComponentErrorBoundary>
        <LazyComponentErrorBoundary>
          <TestimonialCard />
        </LazyComponentErrorBoundary>
        <LazyComponentErrorBoundary>
          <WaveWrapper />
        </LazyComponentErrorBoundary>
        <LazyComponentErrorBoundary>
          <Footer />
        </LazyComponentErrorBoundary>
      </Suspense>
    </>
  );
};

export default React.memo(IntroductionToDIYPreFabSolutions);
