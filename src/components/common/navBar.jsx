import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  navItems = [
    { id: 0, label: "Movies", path: "/movies" },
    { id: 1, label: "Customers", path: "/customers" },
    { id: 2, label: "Rentals", path: "/rentals" },
  ];

  handleNavigation = () => {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg mb-3 navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          VidCity
        </Link>
        <div key={this.navItems.id} className="navbar-nav">
          {this.navItems.map((navItem) => {
            return (
              <Link className="nav-item nav-link" to={navItem.path}>
                {navItem.label}
              </Link>
            );
          })}
        </div>
      </nav>
    );
  }
}

export default NavBar;
