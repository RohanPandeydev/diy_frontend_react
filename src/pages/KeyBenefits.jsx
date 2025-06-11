import React, { lazy, Suspense } from 'react';
import { Container, Table } from 'reactstrap';
import { FaLocationArrow, FaWarehouse } from 'react-icons/fa';

import { benefitsList, casesBoxList, comparisonList } from '../Constants';
import CounterCard from '../common/CounterCard';
import OurVision from '../common/OurVision';
import Banner from '../common/Banner';
import WhoWeAre from '../common/WhoWeAre';
import NavBar from '../common/NavBar';
import SeoHelmet from '../common/SeoHelmet';
import useSeoHelmet from '../hooks/ReactHelmet';

// Lazy-loaded components
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
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
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

// Memoized InfoBox component
const InfoBox = React.memo(({ icon, title, description }) => (
  <div className="info-box">
    {icon}
    <h6>{title}</h6>
    <p>{description}</p>
  </div>
));

const KeyBenefits = () => {
  const seo = useSeoHelmet("key-benefits-of-prefab-construction");

  return (
    <div>
      <SeoHelmet seo={seo} />
      <NavBar />
      <Banner title={"Key Benefits OF Prefab Construction"} />
      <WhoWeAre />

      <section className="comparison-section">
        <Container>
          <div className="comparison-container">
            <h2>Prefab vs Conventional: A Side-by-Side Comparison</h2>
            <div className='comparison-container-box'>
              <Table responsive bordered hover>
                <thead className='common-table-thead'>
                  <tr>
                    <th>Feature</th>
                    <th>Prefab / PEB Construction</th>
                    <th>Conventional Construction</th>
                  </tr>
                </thead>
                <tbody className='common-table-tbody'>
                  {comparisonList.map((compare, index) => (
                    <tr key={index}>
                      <td>{compare.feature}</td>
                      <td>{compare.prefab}</td>
                      <td>{compare.conventional}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </section>

      <section className="information-section">
        <Container>
          <div className='benefits-cases-container'>
            {benefitsList.map((item, index) => (
              <InfoBox
                key={index}
                icon={<FaLocationArrow className="info-box-icons" />}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <OurVision />
      <CounterCard />

      <section className="information-section">
        <h2 className='benefit-page-h2'>Real-World Use Cases</h2>
        <Container>
          <div className='real-world-cases-container'>
            {casesBoxList.map((item, index) => (
              <InfoBox
                key={index}
                icon={<FaWarehouse className="info-box-icons" />}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <Suspense fallback={<SectionLoader height="200px" />}>
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
    </div>
  );
};

export default React.memo(KeyBenefits);
