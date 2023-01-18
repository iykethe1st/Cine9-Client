import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

// class NavBar extends Component {

//   render() {

//     );
//   }
// }

const NavBar = ({ user }) => {
  const navItems = [
    { id: 0, label: "Movies", path: "../movies" },
    { id: 1, label: "Customers", path: "../customers" },
    { id: 2, label: "Rentals", path: "../rentals" },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        VidCity
      </Link>

      <div className="navbar-nav">
        {navItems.map((navItem) => {
          return (
            <NavLink
              key={navItem.id}
              className={
                navItems.id === navItem.id
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
              to={navItem.path}
            >
              {navItem.label}
            </NavLink>
          );
        })}
        {!user && (
          <React.Fragment>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              Register
            </NavLink>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <NavLink className="nav-item nav-link" to="/profile">
              {user.name}
            </NavLink>
            <NavLink className="nav-item nav-link" to="/logout">
              Logout
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
