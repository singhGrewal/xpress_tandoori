import React, { Component } from "react";
import $ from "jquery";

class Carousal extends Component {
  render() {
    const pStyle = {
      transform: "translate3d(-2628px, 0px, 0px)",
      transition: "all 0.25s ease 0s",
      width: "4088px"
    };

    const wStyle = {
      width: "292px"
    };

    return (
      <div className="container">
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm">
                  <img
                    className="d-block w-100"
                    src="//placehold.it/1200x600/444"
                    alt="1 slide"
                  />
                </div>
                <div className="col-sm">
                  <img
                    className="d-block w-100"
                    src="//placehold.it/1200x600/ccff00"
                    alt="2 slide"
                  />
                </div>
                <div className="col-sm">
                  <img
                    className="d-block w-100"
                    src="//placehold.it/1200x600"
                    alt="3 slide"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm">
                  <img
                    className="d-block w-100"
                    src="//placehold.it/1200x600/ccff00"
                    alt="4 slide"
                  />
                </div>
                <div className="col-sm">
                  <img
                    className="d-block w-100"
                    src="//placehold.it/1200x600/444"
                    alt="5 slide"
                  />
                </div>
                <div className="col-sm">
                  <img
                    className="d-block w-100"
                    src="//placehold.it/1200x600/ddd"
                    alt="6 slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousal;
