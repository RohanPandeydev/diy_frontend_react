// Header.jsx
"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import ImagePath from "../assets/ImagePath";
import { navItems } from "../Constants";
import HeaderTop from "./HeaderTop";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);
  const [hoveredSubIndex, setHoveredSubIndex] = useState(null);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(prev => !prev);
  }, []);

  const handleMouseEnter = useCallback((index) => {
    setOpenSubmenu(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpenSubmenu(null);
    setHoveredSubIndex(null);
  }, []);

  const setMobileOpenSubmenuCallback = useCallback((index) => {
    setMobileOpenSubmenu(prev => prev === index ? null : index);
  }, []);

  const setHoveredSubIndexCallback = useCallback((index) => {
    setHoveredSubIndex(index);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isDrawerOpen) {
        setIsDrawerOpen(false);
        setMobileOpenSubmenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDrawerOpen]);

  const memoizedNavItems = useMemo(() => navItems, []);

  return (
    <header className="header">
      <HeaderTop />
      
      <div className="navbar-container-unique">
        <Container>
          <Navbar expand="md" className="navbar-container">
            <NavLink to="/" className="logo-image">
              <img src={ImagePath.Logo} alt="DIY Prefab Logo" className="img-fluid" loading="lazy" />
            </NavLink>

            <DesktopNav
              navItems={memoizedNavItems}
              openSubmenu={openSubmenu}
              hoveredSubIndex={hoveredSubIndex}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              setHoveredSubIndex={setHoveredSubIndexCallback}
            />

            <div></div>
            
            <button className="d-lg-none nav-bar-menu-open-button" onClick={toggleDrawer}>
              ☰
            </button>
          </Navbar>
        </Container>
      </div>

      <MobileDrawer
        isOpen={isDrawerOpen}
        navItems={memoizedNavItems}
        mobileOpenSubmenu={mobileOpenSubmenu}
        hoveredSubIndex={hoveredSubIndex}
        toggleDrawer={toggleDrawer}
        setMobileOpenSubmenu={setMobileOpenSubmenuCallback}
        setHoveredSubIndex={setHoveredSubIndexCallback}
      />
    </header>
  );
};

export default Header;


