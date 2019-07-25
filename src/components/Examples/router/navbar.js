import React, { Component, Fragment } from "react";
import { Button, ButtonToolbar } from "reactstrap";
import { Link, NavLink, withRouter } from "react-router-dom";


const navbar = props => {
  var style = {
    color: "white",
    fontSize: 200
  };

  console.log("khanh test source map");
  
  return (
    <Fragment>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={{ pathname: "/home", state: { pass: "some data" } }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/post/123">
              Post
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default withRouter(navbar);

