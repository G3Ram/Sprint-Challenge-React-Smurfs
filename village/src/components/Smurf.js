import React from "react";
import axios from "axios";

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        heigh: "",
        age: "",
        id: ""
      }
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        return res.data.find(smurf => `${smurf.id}` === id);
      })
      .then(smurf => {
        this.setState(() => ({
          smurf: {
            name: smurf.name,
            height: smurf.height,
            age: smurf.age,
            id: smurf.id
          }
        }));
      })
      .catch(error => console.log(error));
  }

  handleButtonClick = event => {
    event.preventDefault();
    console.log(event.target.name);
    const eventName = event.target.name;
    // add code to create the smurf using the api
    if (eventName === "delete") {
      axios
        .delete(`http://localhost:3333/smurfs/${this.state.smurf.id}`)
        .then(res => {
          this.props.updateSmurf(this.props.history);
        })
        .catch(err => console.log(err));
    } else if (eventName === "update") {
      axios
        .put(
          `http://localhost:3333/smurfs/${this.state.smurf.id}`,
          this.state.smurf
        )
        .then(res => {
          this.props.updateSmurf(this.props.history);
        })
        .catch(err => console.log(err));
    }

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
      <form onSubmit={this.handleButtonClick}>
        <div className="smurf">
          {/* <h3>{this.state.smurf.name}</h3>
          <strong>{this.state.smurf.height} tall</strong>
          <p>{this.state.smurf.age} smurf years old</p> */}
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
          <div className="smurf-button-section">
            <button
              className="smurf-button"
              type="submit"
              name="update"
              onClick={this.handleButtonClick}
            >
              update Smurf
            </button>
            <button
              className="smurf-button"
              type="submit"
              name="delete"
              onClick={this.handleButtonClick}
            >
              Delete from village
            </button>
          </div>
        </div>
      </form>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
