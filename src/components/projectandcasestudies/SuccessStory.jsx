import React from 'react'
import { Col, Row } from 'reactstrap'
import { successStories } from '../../Constants'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const SuccessStory = () => {
    return (
        <Row>
            {successStories.map((story, index) => (
                <Col md={6} lg={3} key={index}>
                    <div className="sucess-box">
                        <div className="sucess-img">
                            <img src={story.image} alt={story.name} />
                        </div>
                        <div className="sucess-stories-lower">
                            <h3>{story.name}</h3>
                            <p>{story.role}</p>
                            <ul>
                                <li>
                                    <Link>
                                        <FaFacebookF fontSize={16} className="sucess-social-icon" />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <FaInstagram fontSize={16} className="sucess-social-icon" />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <FaXTwitter fontSize={16} className="sucess-social-icon" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}

export default SuccessStory