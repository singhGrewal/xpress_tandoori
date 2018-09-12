import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import Footer from './components/footer/Footer.js'
import Menu from './components/Menu.js'

import {Container} from 'reactstrap';

import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/tailwind.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Menu/>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
