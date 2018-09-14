import React, { Component } from "react";
import shortid from "shortid";
import classNames from "classnames";

class Menu extends Component {
  render() {
    console.log("data", this.props.data);

    const foodItems = () => {
      return this.props.data.appetizers.map(el => {
        let key = shortid.generate();

        const imageStyle = {
          backgroundImage: `url(${el.image})`
        };

        return (
          <div className="col-md-6 col-sm-12" key={key}>
            <div className="menu-item">
              <div className="menu-item-wrap">
                <div className="miw-left">
                  <div className="menu-item-img" style={imageStyle} />
                </div>
                <div className="miw-right">
                  <div className="miw-info">
                    <div className="menu-title">
                      <h3>{el.name}</h3>
                    </div>
                    <div className="menu-rate">${el.price}</div>
                  </div>
                  <p>{el.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    };

    return (
      <section className="inner-page-content food-menu-page">
        <div className="container">
          <div className="row-menu">
            <div className="row">
              <div className="col-md-12">
                <div className="heading-menu">
                  <h1 className="page-title">Indian Food</h1>
                  <div>Best quality Indian Food</div>
                </div>
              </div>
            </div>
            <div className="row">{foodItems()}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
