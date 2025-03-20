import React, { Component } from "react";
import Card from "./Card";

export class Content extends Component {
  render() {
    return (
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Content;
