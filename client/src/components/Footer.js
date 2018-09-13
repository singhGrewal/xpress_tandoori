import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <section class="footer">
        <div class="footer-wrap">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="footer-wrap-b">
                  <div class="footer-content-left">
                    <div class="row footer-row-a">
                      <div class="col-md-3">
                        <div class="logo-footer">
                          <img
                            src="http://resptheme.com/tf/ramesdm/img/logo-white.png"
                            alt="logo"
                          />
                        </div>
                      </div>
                      <div class="col-md-9">
                        <div class="info-footer">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat.
                        </div>
                      </div>
                    </div>
                    <div class="row footer-row-b">
                      <div class="col-md-12">
                        <div class="line-footer" />
                      </div>
                    </div>
                    <div class="row footer-row-c">
                      <div class="col-md-4 col-sm-12 footer-address">
                        <div class="footer-info">
                          <div class="footer-info-left">
                            <div class="icon-location-pin" />
                          </div>
                          <div class="footer-info-right">
                            Karangwaru St <br />
                            Yogyakarta City <br />
                            Java, Indonesia
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-12 footer-address">
                        <div class="footer-info">
                          <div class="footer-info-left">
                            <div class="icon-phone" />
                          </div>
                          <div class="footer-info-right">
                            (+62)-274-123456 <br />
                            (+62)-274-654321
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-12 footer-address">
                        <div class="footer-info">
                          <div class="footer-info-left">
                            <div class="icon-envelope" />
                          </div>
                          <div class="footer-info-right">
                            support@ramestr.com <br />
                            reservation@ramestr.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="footer-content-right">
                    <div class="open-hours-wrap">
                      <div class="oh-title">OPEN HOURS</div>
                      <div class="oh-day">
                        <div class="ohd-day">Monday</div>
                        <div class="ohd-time">8AM - 9PM</div>
                        <div class="clear" />
                      </div>
                      <div class="oh-day">
                        <div class="ohd-day">Tuesday</div>
                        <div class="ohd-time">8AM - 9PM</div>
                        <div class="clear" />
                      </div>
                      <div class="oh-day">
                        <div class="ohd-day">Wednesday</div>
                        <div class="ohd-time">8AM - 9PM</div>
                        <div class="clear" />
                      </div>
                      <div class="oh-day">
                        <div class="ohd-day">Thursday</div>
                        <div class="ohd-time">8AM - 9PM</div>
                        <div class="clear" />
                      </div>
                      <div class="oh-day">
                        <div class="ohd-day">Friday</div>
                        <div class="ohd-time">8AM - 9PM</div>
                        <div class="clear" />
                      </div>
                      <div class="oh-day">
                        <div class="ohd-day">Saturday</div>
                        <div class="ohd-time">8AM - 9PM</div>
                        <div class="clear" />
                      </div>
                      <div class="oh-day">
                        <div class="ohd-day">Sunday</div>
                        <div class="ohd-time">Close</div>
                        <div class="clear" />
                      </div>
                      <div class="reserphone">
                        Reservations by phone
                        <br />
                        Call{" "}
                        <span class="text-theme">
                          &nbsp;&nbsp;(+62)-274-654321
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="clear" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
