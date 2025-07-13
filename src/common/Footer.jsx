import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ImagePath from '../assets/ImagePath';

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-content-section">
          <Row>
            <Col md="4" sm="12">
              <Link to="/" className="logo-image">
                <img
                  src={ImagePath.Logo}
                  alt="Company Logo"
                  className="img-fluid"
                  loading="lazy"
                />
              </Link>
              <p className="footer-description">
                Diyprefab is your go-to destination for customizable, easy-to-assemble prefab building kits. Whether you're creating a backyard office, tiny home, or storage shed, we make construction simple and affordable.
              </p>
              <div className="contact-info-container">
                <Link
                  to="#"
                  className="header-social-box"
                  style={{ textDecoration: 'none' }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="top-header-social-icon" />
                </Link>
                <Link
                  to="#"
                  className="header-social-box"
                  style={{ textDecoration: 'none' }}
                  aria-label="YouTube"
                >
                  <FaYoutube className="top-header-social-icon" />
                </Link>
              </div>
            </Col>

            <Col md="2" sm="4" xs="6">
              <h6 className="footer-subtitle">Company</h6>
              <ul className="footer-links">
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Careers</Link></li>
                <li><Link to="#">Press</Link></li>
                <li><Link to="#">Blog</Link></li>
              </ul>
            </Col>

            <Col md="2" sm="4" xs="12">
              <h6 className="footer-subtitle">Support</h6>
              <ul className="footer-links">
                <li><Link to="#">Help Center</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Terms of Service</Link></li>
                <li><Link to="#">Contact Us</Link></li>
              </ul>
            </Col>

            <Col md="4" sm="4" xs="6">
              <h6 className="footer-subtitle">Connect With Us</h6>
              <div className="contact-footer-info-container">
                <div className="footer-contact-info-box">
                  <p>Head Office:</p>
                  <h6>32_C Nakoda Nagar II, Udaipur 313001</h6>
                </div>
                <div className="footer-contact-info-box">
                  <p>Additional Sales Office:</p>
                  <h6>Ahmedabad, Noida</h6>
                </div>
                <div className="footer-contact-info-box">
                  <p>Email:</p>
                  <h6>info@diyprefab.com</h6>
                </div>
                <div className="footer-contact-info-box">
                  <p>Phone:</p>
                  <h6>+91 8619015622</h6>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="footer-bottom-container">
        <Container>
          <div className="footer-bottom">
            © {currentYear} DIY Prefab, All rights reserved. Powered by IOBS
            <ul className="footer-bottom-links">
              <li><Link to="#">Terms of Use</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Cookie Policy</Link></li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
});

export default Footer;
