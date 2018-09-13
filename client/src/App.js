import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";

import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/Index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <section>
            <ItemModal />
            <ShoppingList />
            <Footer />
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
