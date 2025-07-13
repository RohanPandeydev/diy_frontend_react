// MobileDrawer.jsx
import React from "react";
import { Nav, Button } from "reactstrap";
import { IoCloseSharp } from "react-icons/io5";
import MobileNavItem from "./MobileNavItem";

const MobileDrawer = React.memo(({
  isOpen,
  navItems,
  mobileOpenSubmenu,
  hoveredSubIndex,
  toggleDrawer,
  setMobileOpenSubmenu,
  setHoveredSubIndex
}) => {
  return (
    <>
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="text-end">
          <Button onClick={toggleDrawer} className="close-btn" aria-label="Close menu">
            <IoCloseSharp className="side-bar-close-btn-icon" />
          </Button>
        </div>
        <Nav vertical className="p-4 gap-3">
          {navItems.map((item, index) => (
            <MobileNavItem
              key={item.slug || item.title}
              item={item}
              index={index}
              mobileOpenSubmenu={mobileOpenSubmenu}
              hoveredSubIndex={hoveredSubIndex}
              toggleDrawer={toggleDrawer}
              setMobileOpenSubmenu={setMobileOpenSubmenu}
              setHoveredSubIndex={setHoveredSubIndex}
            />
          ))}
        </Nav>
      </div>
      {isOpen && <div className="overlay" onClick={toggleDrawer}></div>}
    </>
  );
});

MobileDrawer.displayName = "MobileDrawer";

export default MobileDrawer;
