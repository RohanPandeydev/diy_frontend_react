import React from 'react';
import ImagePath from '../../assets/ImagePath';
import { FaPlay } from 'react-icons/fa';
import { Button, Col, Container, Row } from 'reactstrap';
import { chooseUs } from '../../Constants';

const WhyChoose = React.memo(({ toggleVideo }) => {
  return (
    <section className="why-choose-us">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="why-choose-left-content-container">
              <h6>Why Choose Us</h6>
              <h4>Precision Fabrication for High-Performance Office & Workspace Solutions</h4>
              <p>
                At DIY PreFab, we focus on delivering top-tier prefab buildings that are expertly fabricated for functionality, speed, and style—enhancing productivity and professionalism.
              </p>
              <hr />
              <div className="choose-us-container">
                {chooseUs.map((item) => (
                  <div className="why-choose-us-boxes" key={item.id}>
                    <div className="box-icon">{item.icon}</div>
                    <div className="box-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Row>
              {[ImagePath.ChooseUsVideo, ImagePath.ChooseUsImg].map((img, index) => (
                <Col md={6} key={index}>
                  <div className="why-choose-right-content-container">
                    <img src={img} alt="Choose Us Visual" className="img-fluid" loading="lazy" />
                    {index === 0 && (
                      <div className="play-button" onClick={toggleVideo} aria-label="Play Video">
                        <div className="play-button-box">
                          <FaPlay className="play-button-icon" />
                        </div>
                      </div>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default WhyChoose;
