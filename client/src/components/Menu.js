import React, {Component} from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {


    }


    render() {
        const data = require('../components/data.json');
        const appetizers = data.appetizers;

        const loadApt = () => {
            return appetizers.map(el => {

                return <div className="menu-item">
                    <div className="menu-item-wrap">
                        <div className="miw-left">
                            <div className="menu-item-img">
                                <img src={`${el.image}`} alt="Smiley face"/>
                            </div>
                        </div>
                        <div className="miw-right">
                            <div className="miw-info">
                                <div className="menu-title">
                                    <h3>{el.name}</h3>
                                </div>
                                <div className="menu-rate">${el.prize}</div>
                            </div>
                            <p>
                                {el.description}
                            </p>
                        </div>
                    </div>
                </div>
            })
        };

        return (
            <div>

                <section className="title-banner">
                    <div className="wrap-tb-bg">
                        <div className="tb-background">
                            <div className="tb-background-bgoverlay"/>
                            <div className="tb-background-img">
                                <img src="http://resptheme.com/tf/ramesdm/img/page-menu.jpg" alt="banner"/>
                            </div>
                        </div>
                    </div>
                    <div className="tb-text">
                        <h1>OUR MENU</h1>
                        <div className="tb-line"/>
                    </div>
                </section>


                <section className="inner-page-content food-menu-page">
                    <div className="container">
                        <div className="row-menu">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-menu">
                                        <h1 className="page-title">Asian Food</h1>
                                        <div>Best quality Asian Food</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {loadApt()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Menu;
