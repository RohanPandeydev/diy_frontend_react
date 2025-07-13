// HeaderTop.jsx
import React from "react";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { Container } from "reactstrap";

const HeaderTop = React.memo(() => {
  return (
    <div className="header-top-container">
      <Container>
        <section className="header-top">
          <div className="contact-info-container">
            <a href="mailto:info@diyprefab.com" className="contact-info-box">
              <MdOutlineMail className="top-header-icon" />
              <p>info@diyprefab.com</p>
            </a>
            <a href="tel:+918619015622" className="contact-info-box">
              <IoMdCall className="top-header-icon" />
              <p>(+91) 8619015622</p>
            </a>
          </div>
          <div className="contact-info-container">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="header-social-box"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="top-header-social-icon" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="header-social-box"
              aria-label="YouTube"
            >
              <FaYoutube className="top-header-social-icon" />
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
});

HeaderTop.displayName = "HeaderTop";

export default HeaderTop;
