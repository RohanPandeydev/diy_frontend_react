// DesktopNav.jsx
import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import SubMenu from "./SubMenu";

const DesktopNav = React.memo(({
  navItems,
  openSubmenu,
  hoveredSubIndex,
  handleMouseEnter,
  handleMouseLeave,
  setHoveredSubIndex
}) => {
  return (
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
              <SubMenu
                submenu={item.submenu}
                hoveredSubIndex={hoveredSubIndex}
                setHoveredSubIndex={setHoveredSubIndex}
                parentIndex={index}
              />
            )}
          </NavItem>
        ))}
      </Nav>
    </div>
  );
});

DesktopNav.displayName = "DesktopNav";

export default DesktopNav;
