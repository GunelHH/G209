import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="logo">
                <a href="#">
                  <img
                    src="https://htmldemo.net/juta/p2/img/juta/logo-2.png"
                    alt="Juta logo"
                  />
                </a>
              </div>
              <div className="myButton">
                <a href="#">Buy Juta</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
