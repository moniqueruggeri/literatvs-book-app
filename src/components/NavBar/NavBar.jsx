import { useState } from "react";
import "./NavBar.sass";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const icons = [
    { text: "home", link: "/" },
    { text: "search", link: "/search" },
    { text: "collections_bookmark", link: "/bookshelf" },
    { text: "menu", link: "/menu" },
  ];

  return (
    <div className="nav-bar">
      <ul className="nav-bar-list">
        {icons.map((icon) => (
          <li
            key={icon.text}
            className={`nav-bar-item material-symbols-outlined ${
              activeIcon === icon.text ? "activeIcon" : ""
            }`}
            onClick={() => setActiveIcon(icon.text)}
          >
            <Link to={icon.link}>{icon.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
