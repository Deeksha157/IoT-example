import React, { Component } from "react";
import "./Subheader.css";
class Subheader extends Component {
  render() {
    const { title } = this.props;
    // console.log("data", crumbs);
    return (
      <div>
        <div className="row main">
          <div className="col ">
            <p className="title1">{title && title}</p>
          </div>
          <div className="col title2">
          </div>
        </div>
      </div>
    );
  }
}

export default Subheader;
