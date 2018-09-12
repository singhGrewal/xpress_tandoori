import React, {Component} from 'react';

class footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {


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
                                                        <img src="img/logo-white.png" alt="logo"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="info-footer">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                        aliquam erat volutpat.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row footer-row-b">
                                                <div className="col-md-12">
                                                    <div className="line-footer"></div>
                                                </div>
                                            </div>
                                            <div className="row footer-row-c">
                                                <div className="col-md-4 col-sm-12 footer-address">
                                                    <div className="footer-info">
                                                        <div className="footer-info-left">
                                                            <div className="icon-location-pin"></div>
                                                        </div>
                                                        <div className="footer-info-right">
                                                            Karangwaru St <br/>
                                                            Yogyakarta City <br/>Java, Indonesia
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-12 footer-address">
                                                    <div className="footer-info">
                                                        <div className="footer-info-left">
                                                            <div className="icon-phone"></div>
                                                        </div>
                                                        <div className="footer-info-right">
                                                            (+62)-274-123456 <br/>(+62)-274-654321
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-12 footer-address">
                                                    <div className="footer-info">
                                                        <div className="footer-info-left">
                                                            <div className="icon-envelope"></div>
                                                        </div>
                                                        <div className="footer-info-right">
                                                            support@ramestr.com <br/>reservation@ramestr.com
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer-content-right">
                                            <div className="open-hours-wrap">
                                                <div className="oh-title">OPEN HOURS</div>
                                                <div className="oh-day">
                                                    <div className="ohd-day">Monday</div>
                                                    <div className="ohd-time">8AM - 9PM</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="oh-day">
                                                    <div className="ohd-day">Tuesday</div>
                                                    <div className="ohd-time">8AM - 9PM</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="oh-day">
                                                    <div className="ohd-day">Wednesday</div>
                                                    <div className="ohd-time">8AM - 9PM</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="oh-day">
                                                    <div className="ohd-day">Thursday</div>
                                                    <div className="ohd-time">8AM - 9PM</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="oh-day">
                                                    <div className="ohd-day">Friday</div>
                                                    <div className="ohd-time">8AM - 9PM</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="oh-day">
                                                    <div className="ohd-day">Saturday</div>
                                                    <div className="ohd-time">8AM - 9PM</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="oh-day">
                                                    <div className="ohd-day">Sunday</div>
                                                    <div className="ohd-time">Close</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="reserphone">
                                                    Reservations by phone<br/>
                                                    Call <span
                                                    className="text-theme">&nbsp;&nbsp;(+62)-274-654321</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}


export default footer;
