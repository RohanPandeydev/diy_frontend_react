import React, { lazy, Suspense,useMemo  } from "react";
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import { Button, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import { PiSuitcaseSimpleBold, PiSuitcaseSimpleThin } from 'react-icons/pi';
import { FaLocationDot } from 'react-icons/fa6';
import useSeoHelmet from "../hooks/ReactHelmet";
import SeoHelmet from "../common/SeoHelmet";

// Lazy load components used below the fold
const WaveWrapper = lazy(() =>
  import("../common/WaveWrapper").then((module) => ({
    default: module.default,
  }))
);

const Footer = lazy(() =>
  import("../common/Footer").then((module) => ({
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

// Job Listing Component
const JobListing = React.memo(({ title, company, location, postedOn, vacancies }) => (
  <div className='job-listing-box'>
    <div className='job-listing-title'>
      <h4 className='job-title'>{title}</h4>
      <ul className='job-listing-icons'>
        <li><PiSuitcaseSimpleThin /> {company}</li>
        <li><FaLocationDot />{location}</li>
      </ul>
    </div>
    <div className='job-date'>
      <p>Posted on: {postedOn}</p>
      <p><strong>No of vacancies: </strong>{vacancies}</p>
    </div>
    <Button className='common-btn'>Apply Now</Button>
  </div>
));

const JobOpening = () => {
  const seo = useSeoHelmet("job-openings");

  return (
    <div>
      <SeoHelmet seo={seo} />
      <NavBar />
      <Banner
        title={"Job Openings"}
        description={"Crafting Engineering Excellence"}
      />

      <section className="common-section job-openings">
        <Container>
          <div className='job-opening-content'>
            <span><PiSuitcaseSimpleBold /></span>
            <h3>Open Job Positions</h3>
          </div>
          <div className='Job-filter'>
            <Row>
              <Col md={3} lg={4}>
                <FormGroup>
                  <Label for="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    placeholder="Enter Job Title"
                  />
                </FormGroup>
              </Col>
              <Col md={3} lg={4}>
                <FormGroup>
                  <Label for="jobCategory">Select Category</Label>
                  <Input id="jobCategory" name="select" type="select">
                    <option>Accountant</option>
                    <option>Engineer</option>
                    <option>3D Designer</option>
                    <option>HR</option>
                    <option>Sales Officer</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3} lg={4}>
                <FormGroup>
                  <Label for="jobLocation">Select Location</Label>
                  <Input id="jobLocation" name="select" type="select">
                    <option>Kolkata</option>
                    <option>Surat</option>
                    <option>Udaipur</option>
                    <option>Jaipur</option>
                    <option>Delhi</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <JobListing
            title="Accountant"
            company="Company"
            location="Jaipur, India"
            postedOn="01/01/2024"
            vacancies="2"
          />
          <JobListing
            title="Accountant"
            company="Company"
            location="Jaipur, India"
            postedOn="01/01/2024"
            vacancies="2"
          />
          <JobListing
            title="Accountant"
            company="Company"
            location="Jaipur, India"
            postedOn="01/01/2024"
            vacancies="2"
          />
        </Container>
      </section>

      <Suspense fallback={<SectionLoader height="200px" />}>
        <LazyComponentErrorBoundary>
          <WaveWrapper />
        </LazyComponentErrorBoundary>
      </Suspense>

      <Suspense fallback={<SectionLoader height="200px" />}>
        <LazyComponentErrorBoundary>
          <Footer />
        </LazyComponentErrorBoundary>
      </Suspense>
    </div>
  );
};

export default React.memo(JobOpening);
