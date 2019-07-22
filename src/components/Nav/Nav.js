import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
const Nav = ({ sites }) => {
  return (
    <div className="sidebar">
      <div className="header">Oil And Gas</div>
      <nav>
        {sites.map(site => (
          <Link key={site.id} to={`/reserve/${site.id}`}>
            {site.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
