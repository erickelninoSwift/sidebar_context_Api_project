import React from "react";
import { useAppContext } from "./Context";
import { social, links } from "./data";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";

export const Sidebar = () => {
  console.log(links);
  const { openSidebar, closeSidebar, stateStatus } = useAppContext();
  const { isSidebarOpen } = stateStatus;
  console.log(isSidebarOpen);
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="code addict" className="logo" />
        <button type="button" className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {" "}
                {link.icon} {link.text}{" "}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((mysocial) => {
          return (
            <li key={mysocial.id}>
              <a href={mysocial.url}>{mysocial.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

// id: 1,
//     url: '/',
//     text: 'home',
//     icon: <FaHome />,
