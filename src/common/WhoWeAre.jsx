import React from "react";
import { Col, Container, Row } from "reactstrap";
import ImagePath from "../assets/ImagePath";
import WhoWeAreLeft from "./WhoWeAreLeft";
import WhoWeAreRight from "./WhoWeAreRight";

const WhoWeAre = React.memo(() => {
  return (
    <section className="we-are-section">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <WhoWeAreLeft />
          </Col>
          <Col md={12} lg={6}>
            <WhoWeAreRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default WhoWeAre;
