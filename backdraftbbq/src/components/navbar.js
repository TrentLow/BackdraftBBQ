import React from "react";

const Navbar = props => (
  <header id="header">
    <nav id="nav-bar">
      <a href="#home" className="nav-link">
        Home
      </a>
      <a href="#about" className="nav-link">
        About
      </a>
      <div className="menu">
        <button className="dropbtn">
          Menu<i className="fa fa-caret-down" />
        </button>
        <div className="dropdown-content">
          <a href="#appetizers" className="nav-link">
            Appetizers
          </a>
          <br />
          <a href="#sideorders" className="nav-link">
            Side Orders
          </a>
          <br />
          <a href="#breakfast" className="nav-link">
            Breakfast
          </a>
          <br />
          <a href="#kidsmenu" className="nav-link">
            Kids Menu
          </a>
          <br />
          <a href="#sandwichbaskets" className="nav-link">
            Sandwiches & Baskets
          </a>
          <br />
          <a href="#bfs" className="nav-link">
            Beef, Chicken, & Shrimp
          </a>
          <br />
          <a href="#beverages" className="nav-link">
            Beverages
          </a>
          <br />
        </div>
      </div>
      <a href="#gallery" className="nav-link">
        Gallery
      </a>
      <a href="#contact" className="nav-link">
        Contact
      </a>
    </nav>
  </header>
);

export default Navbar;
