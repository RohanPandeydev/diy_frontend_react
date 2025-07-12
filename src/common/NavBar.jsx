"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
  IoMdCall,
} from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { Navbar, Nav, NavItem, Button, Container } from "reactstrap";
import { IoCloseSharp } from "react-icons/io5";
import { navItems } from "../Constants";
import { Link, NavLink } from "react-router-dom";
import ImagePath from "../assets/ImagePath";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHeaderTopOpen, setIsHeaderTopOpen] = useState(window.innerWidth >= 768);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);
  const [hoveredSubIndex, setHoveredSubIndex] = useState(null);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(prev => !prev);
  }, []);

  const toggleHeaderTop = () => {
    setIsHeaderTopOpen(prev => !prev);
  };

  const handleMouseEnter = useCallback((index) => {
    setOpenSubmenu(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpenSubmenu(null);
    setHoveredSubIndex(null);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsHeaderTopOpen(true);
      } else {
        setIsHeaderTopOpen(false);
      }
      if (window.innerWidth >= 768 && isDrawerOpen) {
        setIsDrawerOpen(false);
        setMobileOpenSubmenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDrawerOpen]);

  const renderSubsubmenu = (subItem, subIndex, index, isMobile = false) => {
    const isOpen = hoveredSubIndex === `${index}-${subIndex}`;
    const toggleSubsubmenu = () => {
      setHoveredSubIndex(isOpen ? null : `${index}-${subIndex}`);
    };

    return (
      subItem.subsubmenu && (
        <>
          <button
            onClick={toggleSubsubmenu}
            className="bg-transparent border-0 p-0 ms-2"
            aria-label="Toggle subsubmenu"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <IoIosArrowUp className="side-nav-bar-arrow-icon" />
            ) : (
              <IoIosArrowDown className="side-nav-bar-arrow-icon" />
            )}
          </button>
          {isOpen && (
            <div className={isMobile ? "mobile-subsubmenu ps-3" : "subsubmenu"}>
              {subItem.subsubmenu.map((child) => (
                <Link
                  key={child.link}
                  to={child.link}
                  className="submenu-link"
                  onClick={isMobile ? toggleDrawer : undefined}
                >
                  {child.title}
                </Link>
              ))}
            </div>
          )}
        </>
      )
    );
  };

  return (
    <header className="header">
      {/* Header Top with Toggle */}
      {/* <section className="header-top-toggle d-flex justify-content-between align-items-center px-3 py-2" style={{ backgroundColor: "#0d1b2a" }}>
  
</section> */}
  <section className="header-top py-2" style={{ backgroundColor: "#1b263b" }}>
    <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-3 mb-2 mb-md-0">
        <a href="mailto:info@diyprefab.com" className="d-flex align-items-center gap-2 text-white text-decoration-none">
          <MdOutlineMail size={20} />
          <span>info@diyprefab.com</span>
        </a>
        <a href="tel:+918619015622" className="d-flex align-items-center gap-2 text-white text-decoration-none">
          <IoMdCall size={20} />
          <span>(+91) 8619015622</span>
        </a>
      </div>
      <div className="d-flex align-items-center gap-3">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex justify-content-center align-items-center rounded-circle"
          style={{ width: "32px", height: "32px", backgroundColor: "#ffffff20" }}
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="text-white" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex justify-content-center align-items-center rounded-circle"
          style={{ width: "32px", height: "32px", backgroundColor: "#ffffff20" }}
          aria-label="YouTube"
        >
          <FaYoutube className="text-white" />
        </a>
      </div>
    </Container>
  </section>


      {/* Navbar */}
      <div className="navbar-container-unique">
        <Container>
          <Navbar expand="md" className="navbar-container">
            <NavLink to="/" className="logo-image">
              <img src={ImagePath.Logo} alt="DIY Prefab Logo" className="img-fluid" loading="lazy" />
            </NavLink>

            <div className="d-none d-lg-flex" onMouseLeave={handleMouseLeave}>
              <Nav className="ml-auto" navbar>
                {navItems.map((item, index) => (
                  <NavItem
                    key={item.link}
                    onMouseEnter={() => handleMouseEnter(index)}
                    className="position-relative mx-2 navitem-wrapper"
                  >
                    <Link
                      to={item.link || "#"}
                      className="navlink-custom d-flex align-items-center gap-1"
                    >
                      {item.title}
                      {item.submenu && (
                        <span className="arrow">
                          {openSubmenu === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                      )}
                    </Link>

                    {openSubmenu === index && item.submenu && (
                      <div className="submenu desktop-submenu">
                        <Nav vertical>
                          {item.submenu.map((subItem, subIndex) => (
                            <div
                              key={subItem.id}
                              className="submenu-item-wrapper"
                              onMouseEnter={() => setHoveredSubIndex(`${index}-${subIndex}`)}
                              onMouseLeave={() => setHoveredSubIndex(null)}
                            >
                              <Link to={subItem.link} className="submenu-link">
                                {subItem.title}
                                {subItem.subsubmenu && (
                                  <span className="submenu-arrow ms-2">
                                    {hoveredSubIndex === `${index}-${subIndex}` ? (
                                      <IoIosArrowUp />
                                    ) : (
                                      <IoIosArrowForward />
                                    )}
                                  </span>
                                )}
                              </Link>
                              {hoveredSubIndex === `${index}-${subIndex}` && subItem.subsubmenu && (
                                <div className="subsubmenu">
                                  {subItem.subsubmenu.map(child => (
                                    <Link key={child.link} to={child.link} className="submenu-link">
                                      {child.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </Nav>
                      </div>
                    )}
                  </NavItem>
                ))}
              </Nav>
            </div>
            <Button className="d-lg-none nav-bar-menu-open-button" onClick={toggleDrawer}>
              ☰
            </Button>
          </Navbar>
        </Container>
      </div>

      {/* Mobile Drawer */}
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="text-end">
          <Button onClick={toggleDrawer} className="close-btn" aria-label="Close menu">
            <IoCloseSharp className="side-bar-close-btn-icon" />
          </Button>
        </div>
        <Nav vertical className="p-4 gap-3">
          {navItems.map((item, index) => (
            <div key={item.slug || item.title} className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center side-nav-box">
                <Link
                  to={item.link || "#"}
                  className="flex-grow-1 text-decoration-none text-white"
                  onClick={toggleDrawer}
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <button
                    onClick={() =>
                      setMobileOpenSubmenu(mobileOpenSubmenu === index ? null : index)
                    }
                    className="bg-transparent border-0 p-0 ms-2"
                    aria-label="Toggle submenu"
                    aria-haspopup="true"
                    aria-expanded={mobileOpenSubmenu === index}
                  >
                    {mobileOpenSubmenu === index ? (
                      <IoIosArrowUp className="side-nav-bar-arrow-icon" />
                    ) : (
                      <IoIosArrowDown className="side-nav-bar-arrow-icon" />
                    )}
                  </button>
                )}
              </div>
              {item.submenu && mobileOpenSubmenu === index && (
                <div className="mobile-submenu open">
                  {item.submenu.map((subItem, subIndex) => (
                    <div key={subItem.id} className="submenu-link-wrapper">
                      <div className="d-flex justify-content-between align-items-center">
                        <Link
                          to={subItem.link}
                          className="submenu-link flex-grow-1"
                          onClick={toggleDrawer}
                        >
                          {subItem.title}
                        </Link>
                        {renderSubsubmenu(subItem, subIndex, index, true)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Nav>
      </div>
      {isDrawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}
    </header>
  );
};

export default Header;
