import React, { useState, useCallback } from 'react';
import { Button, Col, Form, Input, Row } from 'reactstrap';

const ContactForm = React.memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  }, [formData]);

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="contact-us-form-heading">Send us a Message</h2>
      <hr style={{ borderColor: "#001524", borderWidth: "1px" }} />
      <Row>
        <Col md={6}>
          <div className="contact-us-form-label-input-box">
            <label className="contact-us-form-label" htmlFor="name">Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="contact-us-form-input-box"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="contact-us-form-label-input-box">
            <label className="contact-us-form-label" htmlFor="company">Company</label>
            <Input
              type="text"
              id="company"
              name="company"
              placeholder="Company"
              className="contact-us-form-input-box"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="contact-us-form-label-input-box">
            <label className="contact-us-form-label" htmlFor="phone">Phone</label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="contact-us-form-input-box"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="contact-us-form-label-input-box">
            <label className="contact-us-form-label" htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="contact-us-form-input-box"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </Col>
        <Col md={12}>
          <div className="contact-us-form-label-input-box">
            <label className="contact-us-form-label" htmlFor="subject">Subject</label>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="contact-us-form-input-box"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </Col>
        <Col md={12}>
          <div className="contact-us-form-label-input-box">
            <label className="contact-us-form-label" htmlFor="message">Message</label>
            <Input
              type="textarea"
              id="message"
              name="message"
              placeholder="Message"
              className="contact-us-form-input-box"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </Col>
      </Row>
      <Button type="submit" className="common-btn">Send Message</Button>
    </Form>
  );
});

export default ContactForm;
