import React, { Component } from "react";

export class props extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
      console.log(this.props);
      const {prop1} = this.props;
    return (
        <div>
            <h1>{this.props.prop1}</h1>
            <h1>{prop1}</h1>
        </div>
    );
  }
}

export default props;
