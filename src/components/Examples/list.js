import React, { Component } from "react";

export class list extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { name: "Name1", age: 11, id: 1 },
        { name: "Name2", age: 12, id: 2 },
        { name: "Name3", age: 13, id: 3 },
        { name: "Name4", age: 14, id: 4 }
      ]
    };
  }

  render() {
    const { items } = this.state;

    const render = items.map(item => {
        return (
            <li key={item.id}>{item.name}</li>
        );
    });

    return (
      <div>
        <ul> 
           {render}
        </ul>
      </div>
    );
  }
}

export default list;
