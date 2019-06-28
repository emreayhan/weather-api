import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";
import City from "./components/city";
import Details from "./components/details";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavLink className="navLink" to="/" exact>
          Home
        </NavLink>
        <Switch>
          <Route exact path="/" component={City} />
          <Route exact path="/:cityName" component={Details} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
