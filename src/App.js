import React, { Component, Suspense } from "react";
import logo from "./assets/images/logo.svg";
import "@/App.scss";
import { PropTypes  } from "prop-types";
import State from "./components/Examples/state";
import Form from "./components/Examples/form";
import Props from "./components/Examples/props";
import List from "./components/Examples/list";
import UIComponent from "./components/Examples/UIComponent";
import { Route, HashRouter, Switch } from "react-router-dom";
const Home = React.lazy(() =>
  import(/* webpackChunkName: "Home" */ "./components/Examples/router/home")
);
const About = React.lazy(() =>
  import(/* webpackChunkName: "about" */ "./components/Examples/router/about")
);
const Contact = React.lazy(() =>
  import(
    /* webpackChunkName: "contact" */ "./components/Examples/router/contact"
  )
);
const Navbar = React.lazy(() =>
  import(/* webpackChunkName: "navbar" */ "./components/Examples/router/navbar")
);

const Post = React.lazy(() =>
  import(/* webpackChunkName: "post" */ "./components/Examples/router/post")
);


export class App extends Component {
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

  functionAsProps = formData => {
    console.log(formData);
    formData.id = Math.random();
    let items = [...this.state.items, formData];

    this.setState({
      items
    });
  };

  functionDelete = id => {
    alert("Hello :" + id);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>{process.env.NODE_ENV}</div>
          <h1>TEST BUILD</h1>
          <State abc="Hello Props" />

          <Form
            saveFunction={this.functionAsProps}
            functionDelete={this.functionDelete}
            items={this.state.items}
          />

          <p />

          <p />
          <Props prop1="Hello Prop" />
          <p />
          <List />
          <p />

          <UIComponent items={this.state.items} />


          <Suspense fallback={<p>Loading ...</p>}>
            <HashRouter>
              <Navbar />
              <Switch>
                <Route exact path="/home" component={Home}/>
                <Route path="/about" component={About} name="about"/>
                <Route path="/contact" component={Contact} name="contact"/>
                <Route path="/post/:id" component={Post} name="post"/>
              </Switch>
            </HashRouter>
          </Suspense>

          <p />
          <p />
          <p />
          <p />
        </header>
      </div>
    );
  }
}
//App.contextTypes = { store: PropTypes.object };
// App.propTypes = {
//   store: PropTypes.object.isRequired
// }
export default App;
