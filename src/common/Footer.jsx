import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ImagePath from '../assets/ImagePath';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>      
        <div className="footer-content-section">
          <Row>

            <Col md="4" sm="12">
              <Link to="/" className='logo-image'>
                <img src={ImagePath.Logo} alt="Logo" className='img-fluid' />
              </Link>
              <p className="footer-description">
                Diyprefab is your go-to destination for customizable, easy-to-assemble prefab building kits. Whether you're creating a backyard office, tiny home, or storage shed, we make construction simple and affordable.
              </p>
              <div className="contact-info-container">
                <Link href="" className="header-social-box" style={{ textDecoration: 'none' }}>
                  <FaLinkedinIn className='top-header-social-icon' />
                </Link>
                <Link href="" className="header-social-box" style={{ textDecoration: 'none' }}>
                  <FaYoutube className='top-header-social-icon' />
                </Link>
              </div>
            </Col>

            <Col md="2" sm="4" xs="6">
              <h6 className="footer-subtitle">Company</h6>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </Col>

            <Col md="2" sm="4" xs="12">
              <h6 className="footer-subtitle">Support</h6>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </Col>

            <Col md="4" sm="4" xs="6">
              <h6 className="footer-subtitle">Connect With Us</h6>
              <div className="contact-footer-info-container">
                <div className="footer-contact-info-box">
                  <p>Head Office :</p>
                  <h6>32_C Nakoda Nagar II,Udaipur 313001</h6>
                </div>
                <div className="footer-contact-info-box">
                  <p>Additional Sales Office:</p>
                  <h6>Ahmedabad, Noida</h6>
                </div>
                <div className="footer-contact-info-box">
                  <p>Email :</p>
                  <h6>info@diyprefab.com</h6>
                </div>
                <div className="footer-contact-info-box">
                  <p>Phone :</p>
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
            Copyright © {new Date().getFullYear()} DIY Prefeb, All rights reserved. Powered by IOBS
            <ul className="footer-bottom-links">
              <li><Link to="#">Term of use</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Cookie Policy</Link></li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer