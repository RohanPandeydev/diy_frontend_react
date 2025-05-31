import React from 'react'

import { Container } from 'reactstrap'

const Banner = ({ title, description }) => {
    return (
        <div className="banner-pattern-wrapper">
            <Container>
                <div className="banner-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </Container>
        </div>
    )
}

export default Banner