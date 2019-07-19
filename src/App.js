import React, {Component} from 'react';
import logo from './assets/images/logo.svg';
import './App.css';



import State from './components/Examples/state';
import Form, { form } from './components/Examples/form';
import Props from './components/Examples/props';
import List from './components/Examples/list';
import UIComponent from './components/Examples/UIComponent';


// const State = React.lazy(() => import('./components/Examples/state'));
// const Form = React.lazy(() => import('./components/Examples/form'));
// const Props = React.lazy(() => import('./components/Examples/props'));
// const List = React.lazy(() => import('./components/Examples/list'));
// const UIComponent = React.lazy(() => import('./components/Examples/UIComponent'));





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>{process.env.NODE_ENV}</div>
//         <h1>TEST BUILD</h1>
//         <State abc="Hello Props"/>


//         <Form/>

//         <p></p>

//         <p></p>
//         <Props prop1='Hello Prop' />
//         <p></p>
//         <List />
//       </header>
//     </div>
//   );
// }


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items: [
        { name: "Name1", age: 11, id: 1 },
        { name: "Name2", age: 12, id: 2 },
        { name: "Name3", age: 13, id: 3 },
        { name: "Name4", age: 14, id: 4 }
      ]
    };
  };


  functionAsProps = (formData)=>{
      console.log(formData);
      formData.id = Math.random();
      let items = [...this.state.items, formData];
      
      this.setState({
        items
      });
  }

  functionDelete = (id) => {
      alert("Hello :" + id);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>{process.env.NODE_ENV}</div>
          <h1>TEST BUILD</h1>
          <State abc="Hello Props"/>
  
  
          <Form saveFunction={this.functionAsProps} functionDelete={this.functionDelete} items={this.state.items} />
  
          <p></p>
  
          <p></p>
          <Props prop1='Hello Prop' />
          <p></p>
          <List />
          <p></p>

          <UIComponent items={this.state.items} />
        </header>
      </div>
    );
  }
}

export default App

