import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(error => console.log(error));
    //     this.setState({ items: data });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <div className="header-section">
            <h1 className="smurf-header">Smurf Village</h1>
          </div>
          <div className="nav-links">
            <NavLink to="/smurf-form">Add Smurf</NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
            {/* <NavLink to="/item-list">Shop</NavLink> */}
          </div>
        </nav>
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
        <Route exact path="/smurf/:id" component={Smurf} />
        <Route path="/smurf-form" component={SmurfForm} />
        {/* <SmurfForm /> */}
      </div>
    );
  }
}

export default App;
