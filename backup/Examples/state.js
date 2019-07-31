import React, { Component } from "react";

export class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }


  triggerClick (e){
    console.log("triggerClick");
    console.log(e);
  }

  triggerClick2 = (e) => {
    console.log("triggerClick2");
    console.log(this.state);
    console.log(e);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"} 
        </button>

        <h1>{this.props.abc}</h1>
        <button onClick={this.triggerClick}>Handle Click</button>
        <button onClick={this.triggerClick2}>Handle Click2</button>
      </div>
    );
  }
}

export default State;
