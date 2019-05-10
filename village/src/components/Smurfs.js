import React, { Component } from "react";
import { Link } from "react-router-dom";

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    // return (
    //   <div className="smurfs">
    //     <ul>
    //       {this.props.smurfs.map(smurf => {
    //         return (
    //           <Smurf
    //             name={smurf.name}
    //             id={smurf.id}
    //             age={smurf.age}
    //             height={smurf.height}
    //             key={smurf.id}
    //           />
    //         );
    //       })}
    //     </ul>
    //   </div>
    // );
    //-----------
    return (
      <div className="smurfs">
        <h2>Smurf residents</h2>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/smurf/${smurf.id}`} key={smurf.id}>
                <li>{smurf.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );

    //--------
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
