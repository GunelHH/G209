import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-12 mb-30">
        <div className="feature-item">
          <img
            src="https://htmldemo.net/juta/p2/img/juta/bootstrap.png"
            alt=""
          />
          <h4>Bootstrap</h4>
        </div>
      </div>
    );
  }
}

export default Card;
