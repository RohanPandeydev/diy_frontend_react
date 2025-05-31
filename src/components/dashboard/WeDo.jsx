import React from 'react'
import { Button, Container } from 'reactstrap'
import { weDo } from '../../Constants'

const WeDo = () => {
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
                <Button className="common-btn">Learn More</Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
  )
}

export default WeDo