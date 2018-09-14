import React, { Component } from "react";
import shortid from "shortid";

class Footer extends Component {
  render() {
    const restaurantHours = () => {
      return this.props.data.restaurant_time_info.map(el => {
        let key = shortid.generate();
        return (
          <div className="oh-day" key={key}>
            <div className="ohd-day">{el.date}</div>
            <div className="ohd-time">
              {el.closed ? "Closed" : `${el.open} - ${el.close}`}
            </div>
            <div className="clear" />
          </div>
        );
      });
    };
    return (
      <section className="footer">
        <div className="footer-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-wrap-b">
                  <div className="footer-content-left">
                    <div className="row footer-row-a">
                      <div className="col-md-3">
                        <div className="logo-footer">
                          <img
                            src="http://resptheme.com/tf/ramesdm/img/logo-white.png"
                            alt="logo"
                          />
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="info-footer">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat.
                        </div>
                      </div>
                    </div>
                    <div className="row footer-row-b">
                      <div className="col-md-12">
                        <div className="line-footer" />
                      </div>
                    </div>
                    <div className="row footer-row-c">
                      <div className="col-md-4 col-sm-12 footer-address">
                        <div className="footer-info">
                          <div className="footer-info-left">
                            <div className="icon-location-pin" />
                          </div>
                          <div className="footer-info-right">
                            Karangwaru St <br />
                            Yogyakarta City <br />
                            Java, Indonesia
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 footer-address">
                        <div className="footer-info">
                          <div className="footer-info-left">
                            <div className="icon-phone" />
                          </div>
                          <div className="footer-info-right">
                            (+62)-274-123456 <br />
                            (+62)-274-654321
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 footer-address">
                        <div className="footer-info">
                          <div className="footer-info-left">
                            <div className="icon-envelope" />
                          </div>
                          <div className="footer-info-right">
                            support@ramestr.com <br />
                            reservation@ramestr.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-content-right">
                    <div className="open-hours-wrap">
                      <div className="oh-title">OPEN HOURS</div>
                      {restaurantHours()}
                      <div className="reserphone">
                        Reservations by phone
                        <br />
                        Call{" "}
                        <span className="text-theme">
                          &nbsp;&nbsp;(+62)-274-654321
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="clear" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
