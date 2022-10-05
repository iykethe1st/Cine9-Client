import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  navItems = [
    { id: 0, label: "Movies", path: "../movies" },
    { id: 1, label: "Customers", path: "../customers" },
    { id: 2, label: "Rentals", path: "../rentals" },
  ];

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          VidCity
        </Link>

        <div className="navbar-nav">
          {this.navItems.map((navItem) => {
            return (
              <NavLink
                key={navItem.id}
                className={
                  this.navItems.id === navItem.id
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                to={navItem.path}
              >
                {navItem.label}
              </NavLink>
            );
          })}
        </div>
      </nav>
    );
  }
}

export default NavBar;
