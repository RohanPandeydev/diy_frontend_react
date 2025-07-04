import React from 'react'
import ImagePath from '../../assets/ImagePath'
import { weOfferList } from '../../Constants'
import { Button, Container } from 'reactstrap'

const WeOffer = ({ handleComingSoon }) => {
  return (
    <section
        className="we-offer"
        style={{
          backgroundImage: `url(${ImagePath.Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 0",
          backgroundColor: "#a8dadc",
        }}
      >
        <Container>
          <div className="we-offer-header">
            <p>What WE OFFER</p>
            <h4>Engineering solutions for all industries</h4>
          </div>
          <div className="we-offer-container">
            {weOfferList.map((item, index) => (
              <div className="we-offer-box" key={index}>
                <div className="we-offer-inner">
                  <div className="we-offer-front">
                    <div className="we-offer-icon">{item.icon}</div>
                    <div className="we-offer-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="we-offer-hover-box">
                    <div className="we-offer-hover-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <Button 
                        className="common-btn"
                        onClick={() => handleComingSoon ? handleComingSoon(`${item.title} - Learn More`) : alert(`${item.title} - Learn More is coming soon!`)}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
  )
}

export default WeOffer