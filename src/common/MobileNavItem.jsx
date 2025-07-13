// MobileNavItem.jsx
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MobileSubMenu from "./MobileSubMenu";

const MobileNavItem = React.memo(({
  item,
  index,
  mobileOpenSubmenu,
  hoveredSubIndex,
  toggleDrawer,
  setMobileOpenSubmenu,
  setHoveredSubIndex
}) => {
  return (
    <div className="d-flex flex-column">
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
            onClick={() => setMobileOpenSubmenu(index)}
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
        <MobileSubMenu
          submenu={item.submenu}
          parentIndex={index}
          hoveredSubIndex={hoveredSubIndex}
          toggleDrawer={toggleDrawer}
          setHoveredSubIndex={setHoveredSubIndex}
        />
      )}
    </div>
  );
});

MobileNavItem.displayName = "MobileNavItem";

export default MobileNavItem;
