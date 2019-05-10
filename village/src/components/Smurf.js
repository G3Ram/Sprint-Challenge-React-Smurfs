import React from "react";
import axios from "axios";

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        heigh: "",
        age: ""
      }
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("--------id of the parameter is " + id);
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        return res.data.find(smurf => `${smurf.id}` === id);
      })
      .then(smurf => {
        console.log("-------smurf is " + smurf);
        this.setState(() => ({
          smurf: {
            name: smurf.name,
            height: smurf.height,
            age: smurf.age
          }
        }));
      })
      .catch(error => console.log(error));
    //     this.setState({ items: data });
  }
  render() {
    return (
      <div className="Smurf">
        <h3>{this.state.smurf.name}</h3>
        <strong>{this.state.smurf.height} tall</strong>
        <p>{this.state.smurf.age} smurf years old</p>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
