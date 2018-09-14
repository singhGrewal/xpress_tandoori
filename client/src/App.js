import React, { Component } from "react";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/Index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <section>
            <Main />
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
