import React, { useState, useCallback } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { FaPlay } from 'react-icons/fa';
import ImagePath from '../assets/ImagePath';
import video from '../assets/video/dummyvideo.mp4'; // Corrected import

const OurVision = () => {
  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = useCallback(() => {
    setOpenVideo((prev) => !prev);
  }, []);

  const handleContainerClick = (e) => {
    if (e.target.classList.contains('play-video-container')) {
      setOpenVideo(false);
    }
  };

  return (
    <section
      className="our-vision-mission-section"
      style={{
        backgroundImage: `url(${ImagePath.Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <div className="our-vision-video-section">
          <img src={ImagePath.VideoBg} alt="Background" loading="lazy" />
          <div className="play-button">
            <div
              className="play-button-box"
              onClick={handleOpenVideo}
              aria-label="Play Intro Video"
            >
              <FaPlay className="play-button-icon" />
            </div>
            <p>Play Intro</p>
          </div>
        </div>
        <Row>
          <Col md={6} className="mb-md-0 mb-4">
            <div className="our-vision-container">
              <h6>Our Vision</h6>
              <hr />
              <p>
                We envision a future where every person, regardless of income or
                location, has access to strong, sustainable, and customizable
                buildings.
              </p>
              <p>
                No middlemen. No delays. Just transparent pricing, modular
                design, and unmatched speed.
              </p>
              <p>DIY PreFab is building the future — one kit at a time.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="our-mission-container our-vision-container">
              <h6>Our Mission</h6>
              <hr />
              <p>
                To simplify and accelerate construction by offering high-quality,
                customizable, and affordable pre-engineered building kits that
                empower individuals, businesses, and communities to build with
                confidence.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {openVideo && (
        <div className="play-video-container" onClick={handleContainerClick}>
          <button
            className="close-video-btn"
            aria-label="Close Video"
            onClick={() => setOpenVideo(false)}
          >
            ✖
          </button>
          <div className="video-wrapper">
            <video
              width="800"
              height="450"
              preload="none"
              controls
              autoPlay
              poster={ImagePath.Logo}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(OurVision);
