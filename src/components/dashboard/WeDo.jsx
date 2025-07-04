import React from 'react'
import { Button, Container } from 'reactstrap'
import { weDo } from '../../Constants'

const WeDo = ({ handleComingSoon }) => {
  return (
      <section className="we-do-section">
        <Container>
          <div className="we-do-container">
            {weDo.map(({ icon, title, desc }, i) => (
              <div className="we-do-box" key={i}>
                {icon}
                <hr />
                <h3>{title}</h3>
                <p>{desc}</p>
                <Button 
                  className="common-btn"
                  onClick={() => handleComingSoon ? handleComingSoon(`${title} - Learn More`) : alert(`${title} - Learn More is coming soon!`)}
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
  )
}

export default WeDo