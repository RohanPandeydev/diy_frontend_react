import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TrustSliderLeft from './TrustSliderLeft';
import TrustSliderRight from './TrustSliderRight';

const TrustSlider = React.memo(() => {
  return (
    <section className="trust-slider">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrustSliderLeft />
          </Col>
          <Col md={6}>
            <TrustSliderRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default TrustSlider;
