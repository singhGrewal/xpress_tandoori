import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer.js";

class Website extends Component {
  render() {
    let data;
    if (!this.props.restaurant.loading) {
      data = this.props.restaurant.resData;
    }
    return (
      <div>
        <Footer data={data} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default connect(mapStateToProps)(Website);
