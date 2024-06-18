import React, { Component } from "react";

export default class Tab extends Component {
  render() {
    return (
      <>
        <div className={`col-lg-6 ${this.props.color}`}>{this.props.content}</div>
      </>
    );
  }
}
