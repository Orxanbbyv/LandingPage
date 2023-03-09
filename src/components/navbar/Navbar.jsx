import React from "react";
import logo from "./logo.svg";
import down from "./down.svg";
import "./navbar.scss";


const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-info">
        <span>
          <h3>Why Landing</h3>
        <img src={down} alt="down" />
        </span>
        <span>
          <h3>Resources</h3>
         <img src={down} alt="down" />
        </span>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
