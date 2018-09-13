import React, {Component} from 'react';

class footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="flex flex-wrap px-4 md:px-20 md:py-10 bg-black-light">
                    <div className="md:w-2/3 flex flex-wrap">
                        <div className="w-24 md:w-1/3 pt-4 m-auto block">
                            <img className="w-2/3 pt-4" src="http://resptheme.com/tf/ramesdm/img/logo-white.png"
                                 alt="logo"/>
                        </div>
                        <div className="pt-4 md:w-2/3 text-center md:text-left">Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </div>
                        <div className="w-full border border-1 border-grey-darker my-10"/>
                        <div className="md:w-3/4 flex flex-wrap m-auto">
                            <div className="md:w-1/2 flex">
                                <div className="w-12 pt-3">
                                    <i className="material-icons text-orange_cus">
                                        phone
                                    </i>
                                </div>
                                <div className="md:w-1/2">
                                    <p>111-222-1111</p>
                                    <p>111-222-333-44</p>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex pt-4">
                                <div className="w-12 pt-3">
                                    <i className="material-icons text-orange_cus">
                                        email
                                    </i>
                                </div>
                                <div className="md:w-1/2">
                                    <p> support@ramestr.com</p>
                                    <p>reservation@ramestr.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 md:relative mt-4">
                        <div
                            className="md:w-3/4 m-auto pin-t-2 md:absolute bg-dark-one border-solid border-dark-one border-2">
                            <div className="border-2 border-solid border-orange_cus m-4">
                                <div className="text-3xl text-center mt-4">OPEN HOURS</div>
                                <div className="w-3/4 flex flex-wrap py-2 m-auto">
                                    <div className="w-1/2 ">Monday</div>
                                    <div className="w-1/2 text-right">8AM - 9PM</div>
                                </div>
                                <div className="w-full flex flex-wrap py-2">
                                    <div className="w-1/2 ">Monday</div>
                                    <div className="w-1/2">8AM - 9PM</div>
                                </div>
                                <div className="w-full flex flex-wrap py-2">
                                    <div className="w-1/2 ">Monday</div>
                                    <div className="w-1/2">8AM - 9PM</div>
                                </div>
                                <div className="w-full flex flex-wrap py-2">
                                    <div className="w-1/2 ">Monday</div>
                                    <div className="w-1/2">8AM - 9PM</div>
                                </div>
                                <div className="w-full flex flex-wrap py-2">
                                    <div className="w-1/2 ">Monday</div>
                                    <div className="w-1/2">8AM - 9PM</div>
                                </div>
                                <div className="w-full flex flex-wrap py-2">
                                    <div className="w-1/2 ">Monday</div>
                                    <div className="w-1/2">8AM - 9PM</div>
                                </div>
                                <div className="w-full flex flex-wrap py-2">
                                    <div className="w-1/2 ">Monday</div>
                                    <div className="w-1/2">8AM - 9PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="w-full px-10 py-10">
                    <p className="float-right"> 2017 Indian Xpress All rights reserved.</p>
                </section>
            </footer>
        )
    }
}


export default footer;
