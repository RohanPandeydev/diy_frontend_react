

// MobileSubMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MobileSubMenu = React.memo(({
  submenu,
  parentIndex,
  hoveredSubIndex,
  toggleDrawer,
  setHoveredSubIndex
}) => {
  const renderSubsubmenu = (subItem, subIndex) => {
    const isOpen = hoveredSubIndex === `${parentIndex}-${subIndex}`;
    const toggleSubsubmenu = () => {
      setHoveredSubIndex(isOpen ? null : `${parentIndex}-${subIndex}`);
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
            <div className="mobile-subsubmenu ps-3">
              {subItem.subsubmenu.map((child) => (
                <Link
                  key={child.link}
                  to={child.link}
                  className="submenu-link"
                  onClick={toggleDrawer}
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
    <div className="mobile-submenu open">
      {submenu.map((subItem, subIndex) => (
        <div key={subItem.id} className="submenu-link-wrapper">
          <div className="d-flex justify-content-between align-items-center">
            <Link
              to={subItem.link}
              className="submenu-link flex-grow-1"
              onClick={toggleDrawer}
            >
              {subItem.title}
            </Link>
            {renderSubsubmenu(subItem, subIndex)}
          </div>
        </div>
      ))}
    </div>
  );
});

MobileSubMenu.displayName = "MobileSubMenu";

export default MobileSubMenu;