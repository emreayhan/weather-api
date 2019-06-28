import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./city.scss";
class List extends Component {
  render() {
    return (
      <div className="list">
        <h1>Weather of Cities</h1>
        <li>
          <NavLink className="navLink" to="/istanbul" exact>
            İstanbul
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/london" exact>
            London
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/rome" exact>
            Roma
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/madrid" exact>
            Madrid
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/paris" exact>
            Paris
          </NavLink>
        </li>
      </div>
    );
  }
}

export default List;
