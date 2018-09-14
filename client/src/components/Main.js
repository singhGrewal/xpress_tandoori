import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Carousal from "./Carousal";
import Menu from "./Menu";

class Website extends Component {
  render() {
    let data;
    if (!this.props.restaurant.loading) {
      data = this.props.restaurant.resData;
    }
    return (
      <div>
        <Menu data={data} />
        <Carousal />
        <Footer data={data} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default connect(mapStateToProps)(Website);
