import React from 'react'
import { Button, Container } from 'reactstrap'
import ImagePath from '../../assets/ImagePath'

const TakeAction = ({ handleComingSoon }) => {
  return (
     <section className="take-action">
        <img src={ImagePath.TakeAction} alt="Take Action" className="img-fluid" />
        <Container>
          <div className="take-action-container">
            <div className="take-action-box">
              <h3>
                Empower Your Future with Industrial Excellence, Seize the Opportunity to Engineer Innovation
              </h3>
              <p>
                We assist with structural planning, smart material choices, and seamless integration of building systems.
              </p>
              <Button 
                className="btn common-btn"
                onClick={() => handleComingSoon ? handleComingSoon("Take Action Now") : alert("Take Action Now is coming soon!")}
              >
                TAKE ACTION NOW
              </Button>
            </div>
          </div>
        </Container>
      </section>
  )
}

export default TakeAction