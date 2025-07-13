

// SubMenu.jsx
import React from "react";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";

const SubMenu = React.memo(({ submenu, hoveredSubIndex, setHoveredSubIndex, parentIndex }) => {
  return (
    <div className="submenu desktop-submenu">
      <Nav vertical>
        {submenu.map((subItem, subIndex) => (
          <div
            key={subItem.id}
            className="submenu-item-wrapper"
            onMouseEnter={() => setHoveredSubIndex(`${parentIndex}-${subIndex}`)}
            onMouseLeave={() => setHoveredSubIndex(null)}
          >
            <Link to={subItem.link} className="submenu-link">
              {subItem.title}
              {subItem.subsubmenu && (
                <span className="submenu-arrow ms-2">
                  {hoveredSubIndex === `${parentIndex}-${subIndex}` ? <IoIosArrowUp /> : <IoIosArrowForward />}
                </span>
              )}
            </Link>
            {hoveredSubIndex === `${parentIndex}-${subIndex}` && subItem.subsubmenu && (
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
  );
});

SubMenu.displayName = "SubMenu";

export default SubMenu;
