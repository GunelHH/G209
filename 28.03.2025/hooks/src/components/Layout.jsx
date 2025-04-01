import React from "react";
import { Outlet, Link } from "react-router-dom";
import Card from "./Card";

const Layout = () => {
  return (
    <div>
      <header className=" bg-secondary ">
        <nav className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <img
                width={100}
                src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
                alt=""
              />
            </div>
            <div className="nav-links">
              <ul className="d-flex text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Outlet />
      </header>
      <Card />
    </div>
  );
};

export default Layout;
