import React from "react";
import { Link } from "react-router-dom";
import "../../src/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>I</span>nventory
            <span>M</span>anagement
            <span>S</span>ystem
          </h2>
        </div>

        <div className="menu-link ">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            {/* <li>
              <Link to="/home/customers">Customers</Link>
            </li>
            <li>
              <Link to="/home/shopkeeper">Shopkeeper</Link>
            </li> */}
            {/* <li>
              <Link to="/home/admin">Admin</Link>
            </li> */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>

          <div className="hamburger-menu">
            <button>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* hero-section */}

      <section className="hero-section ">
        <p>The StoreHouse</p>
        <h2>Welcomes You</h2>
      </section>
    </div>
  );
}

export default NavBar;
