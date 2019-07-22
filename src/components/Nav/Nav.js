import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = ({ sites, reserve, handleClick }) => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        {sites.map(site => (
          <NavLink
            className="sidebar-link"
            activeClassName="selected"
            key={site.id}
            to={reserve ? `/reserve/${site.id}` : `/extraction/${site.id}`}
          >
            {site.name}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-nav--type">
        <button
          className={
            reserve ? "sidebar-nav--text selected-type" : "sidebar-nav--text"
          }
          onClick={e => handleClick(true)}
        >
          Reserve
        </button>
        <button
          className={
            reserve ? "sidebar-nav--text" : "sidebar-nav--text selected-type"
          }
          onClick={e => handleClick(false)}
        >
          Extractions
        </button>
      </div>
    </div>
  );
};

export default Nav;
