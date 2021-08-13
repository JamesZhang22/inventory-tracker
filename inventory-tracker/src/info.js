import React from "react";
import { PropTypes } from "prop-types";

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
    }

    buttonPressed() {
      this.setState({
        count: this.state.count + 1
      });
    }

    render () {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={() => this.buttonPressed()}>Click Me</button>
        </div>
      )
    }
}

export default Info;