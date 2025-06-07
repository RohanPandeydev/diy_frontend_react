import React from 'react'
import { Container } from 'reactstrap'
import ImagePath from '../../assets/ImagePath'
import { FaPlay } from 'react-icons/fa'
import { performanceList } from '../../Constants'

const Performance = ({toggleVideo}) => {


  return (
       <section className="performance-section">
            <Container>
              <div className="video-section-container">
                <div className="video-section">
                  <img src={ImagePath.Performance} alt="Video" className="img-fluid" />
                  <div className="play-button" onClick={toggleVideo}>
                    <div className="play-button-box">
                      <FaPlay className="play-button-icon" />
                    </div>
                  </div>
                </div>
                {performanceList.map(({ icon, title, desc }, i) => (
                  <div className="performance-content-box" key={i}>
                    {icon}
                    <h6>{title}</h6>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
  )
}

export default Performance