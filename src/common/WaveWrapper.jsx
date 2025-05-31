import React from 'react'
import { Container } from 'reactstrap'

const WaveWrapper = () => {
    return (
        <div className="wave-wrapper" >
            {/* <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div> */}
            <Container>
                <div className="sign-up-content">
                    <h5 style={{ position: "relative", zIndex: 2 }}>
                        Stay updated with our latest news, <br /> promotions, and tech insights.
                    </h5>
                    <div className="input-button-wrapper">
                        <input type="text" placeholder="Email" className="styled-input" />
                        <button className="styled-button">Submit</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WaveWrapper