import React, { Component } from "react";
import { thisExpression } from "@babel/types";

export class form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
    };
  }

  handleChangeForm = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.saveFunction(this.state);
  };

  componentDidMount = () => {
    console.log("componentDidMount");
  };
  
  componentDidUpdate = (preProps, preState) => {
    console.log("componentDidUpdate");
  }

  render() {
    const { items, functionDelete } = this.props; //Không dùng lệnh this.props

    const render = items.map(item => {
      return item.age === 11 ? 
      (
        <li key={item.id}>Helo UI COmponent {item.name} <button onClick={()=>{functionDelete(item.id)}}>Delete</button>
        </li>
      ) : null;
    });

    return (
      <div>

        <div>
          <ul>{render}</ul>
        </div>

        <form onSubmit={this.handleSubmitForm}>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChangeForm}
          />

          <input
            type="text"
            name="age"
            id="age"
            value={this.state.age}
            onChange={this.handleChangeForm}
          />

          <p />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default form;
