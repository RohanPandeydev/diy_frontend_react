import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { FaPlay, FaPlayCircle } from 'react-icons/fa'
import ImagePath from '../assets/ImagePath'

const OurVision = () => {
    const [OpenVideo, setOpenVideo] = useState(false)
    const handleOpenVideo = () => {
        setOpenVideo(!OpenVideo)
    }
    return (
        <section className="our-vision-mission-section" style={{ backgroundImage: `url(${ImagePath.Bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Container>
                <div className='our-vision-video-section'>
                    <img src={ImagePath.VideoBg} alt="" />
                    <div className='play-button'>
                        <div className="play-button-box" onClick={handleOpenVideo}>
                            <FaPlay className='play-button-icon' />
                        </div>
                        <p>Play Intro</p>
                    </div>
                </div>
                <Row>
                    <Col md={6} className='mb-md-0 mb-1'>
                        <div className="our-vision-container">
                            <h6>Our Vision</h6>
                            <hr />
                            <p>We envision a future where every person, regardless of income or location, has access to strong, sustainable, and customizable buildings.</p>
                            <p>No middlemen. No delays. Just transparent pricing, modular design, and unmatched speed.</p>
                            <p>DIY PreFab is building the future — one kit at a time.</p>
                            {/* <Button className='common-btn'>Learn More</Button> */}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="our-mission-container our-vision-container">
                            <h6>Our Mission</h6>
                            <hr />
                            <p>To simplify and accelerate construction by offering high-quality, customizable, and affordable pre engineered building kits that empower individuals, businesses, and communities to build with confidence.</p>
                            {/* <Button className='common-btn'>Learn More</Button> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            {OpenVideo ? (
                <div className='play-video-container' onClick={handleOpenVideo}>
                    <button className="close-video-btn">✖</button>
                    <div className="video-wrapper">
                        <iframe
                            width="800"
                            height="450"
                            src="../src/assets/video\videoplayback.webm"
                            title="Intro Video"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            ) : null}
        </section>
    )
}

export default OurVision