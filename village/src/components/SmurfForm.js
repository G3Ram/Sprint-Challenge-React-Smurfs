import React, { Component } from "react";
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", this.state.smurf)
      .then(res => {
        this.props.updateSmurf(this.props.history);
      })
      .catch(err => console.log(err));

    //end of copy paste
    this.setState({
      smurf: { name: "", age: "", height: "" }
    });
  };

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <form onSubmit={this.addSmurf}>
        <div className="smurf-form">
          <input
            className="input-text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            className="input-text"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            className="input-text"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button
            className="smurf-button"
            type="submit"
            onClick={this.addSmurf}
          >
            Add to the village
          </button>
        </div>
      </form>
    );
  }
}

export default SmurfForm;
