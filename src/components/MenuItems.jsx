import React, { useState } from 'react';

const MenuItems = ({ items }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const handleMouseEnter = () => setSubmenuOpen(true);
  const handleMouseLeave = () => {
    setSubmenuOpen(false);
    setActiveSubIndex(null);
  }; 

  return (
    <li
      className="nav-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={items.link || '#'} className="nav-link">
        {items.title} {items.submenu && <span className="arrow"></span>}
      </a>

      {items.submenu && submenuOpen && (
        <ul className="dropdown">
          {items.submenu.map((sub, index) => (
            <li
              key={index}
              className="dropdown-item"
              onMouseEnter={() => setActiveSubIndex(index)}
            >
              <a href={sub.link || '#'} className="nav-link">
                {sub.title} 
              </a>

              {/* Only show sub-submenu for active hovered submenu */}
              {sub.submenu && activeSubIndex === index && (
                <ul className="dropdown right">
                  {sub.submenu.map((subSub, i) => (
                    <li key={i}>
                      <a href={subSub.link} className="nav-link">
                        {subSub.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItems;
