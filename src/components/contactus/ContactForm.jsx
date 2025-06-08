import React from 'react'
import { Button, Col, Form, Input, Row } from 'reactstrap'

const ContactForm = () => {
  return (
    <>
      <Form>
                                        <h2 className='contact-us-form-heading'>Send us a Message</h2>
                                        <hr style={{ borderColor: "#001524", borderWidth: "1px" }} />
                                        <Row>
                                            <Col md={6}>
                                                <div className='contact-us-form-label-input-box'>
                                                    <label className='contact-us-form-label'>Name</label>
                                                    <Input
                                                        type="text"
                                                        name="name"
                                                        placeholder='Name'
                                                        className='contact-us-form-input-box'
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className='contact-us-form-label-input-box'>
                                                    <label className='contact-us-form-label'>Company</label>
                                                    <Input
                                                        type="text"
                                                        name="company"
                                                        placeholder='Company'
                                                        className='contact-us-form-input-box'
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className='contact-us-form-label-input-box'>
                                                    <label className='contact-us-form-label'>Phone</label>
                                                    <Input
                                                        type="tel"
                                                        name="phone"
                                                        placeholder='Phone'
                                                        className='contact-us-form-input-box'
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className='contact-us-form-label-input-box'>
                                                    <label className='contact-us-form-label'>Email</label>
                                                    <Input
                                                        type="email"
                                                        name="email"
                                                        placeholder='Email'
                                                        className='contact-us-form-input-box'
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className='contact-us-form-label-input-box'>
                                                    <label className='contact-us-form-label'>Subject</label>
                                                    <Input
                                                        type="text"
                                                        name="subject"
                                                        placeholder='Subject'
                                                        className='contact-us-form-input-box'
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className='contact-us-form-label-input-box'>
                                                    <label className='contact-us-form-label'>Message</label>
                                                    <Input
                                                        type="textarea"
                                                        name="Message"
                                                        placeholder='Message'
                                                        className='contact-us-form-input-box'
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Button className='common-btn'>Send Message</Button>
                                    </Form>
    </>
  )
}

export default ContactForm