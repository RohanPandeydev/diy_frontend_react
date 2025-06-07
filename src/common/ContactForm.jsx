import React, { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';

const ContactForm = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        interest: '', // Add interest field
    });

    // State for error messages
    const [errors] = useState({
        name: '',
        email: '',
        message: '',
        interest: '', // Add interest error state
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

  

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // if (validateForm()) {
        //     // If form is valid, send email using EmailJS
        //     emailjs
        //         .sendForm(
        //             'service_kdfpnlo',   // Replace with your EmailJS service ID
        //             'template_c8aqmrp',   // Replace with your EmailJS template ID
        //             e.target,
        //             'Pcw8p3eXr0Idt7n7b'   // Replace with your EmailJS user ID
        //         )
        //         .then(
        //             (result) => {
        //                 alert('Message sent successfully!');
        //                 setFormData({ name: '', email: '', message: '', interest: '' }); // Clear the form
        //             },
        //             (error) => {
        //                 alert('Error sending message: ' + error.text);
        //             }
        //         );
        // } else {
        //     alert('Please fill out all fields correctly.');
        // }
    };

    return (
        <div className="contact-form">
            <h2>Send us a message</h2>
            <p>If you have any questions or would like to book a session please contact us.</p>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                    </Col>
                    <Col md={12}>
                        <div>
                            <label>Interest of Service</label>
                            <input
                                type="text"
                                name="interest" 
                                value={formData.interest}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.interest && <span className="error">{errors.interest}</span>}
                        </div>
                    </Col>
                    <Col md={12}>
                        <div>
                            <label>Message:</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                    </Col>
                </Row>

                <div>
                    <Button type="submit" className="btn common-btn">Send Message</Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
