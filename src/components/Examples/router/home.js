import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import { connect } from "react-redux";
import {withReducer} from '../../../configuration/withReducer';
import {rootReducer3} from '../../../configuration/reducer3';
//import {MyContext} from '../../../configuration/context';
class home extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       posts: []
  //     };

  //   }

  componentDidMount() {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
    //   console.log(res);
    //   this.setState({
    //     posts: res.data.slice(0, 10)
    //   });
    // });

    debugger;
    console.log(this.store);
    
  }

 

  render() {
      console.log(this.props);
    const { posts } = this.props;
    const style = {
      color: "red"
    };
    const renderHTML =
      posts.length > 0 ? (
        posts.map(row => {
          return (
            <Card key={row.id}>
              <CardBody>
                <CardTitle style={style}>{row.id}</CardTitle>
                <CardSubtitle style={style}>{row.title}</CardSubtitle>
                <CardText style={style}>{row.body}</CardText>
                <Button style={style}>
                  <NavLink to={"/post/" + row.id}>Edit</NavLink>
                </Button>
                
              </CardBody>
            </Card>
          );
        })
      ) : (
        <h1>No data</h1>
      );

    return <div>{renderHTML}</div>;
  }
}



const mapStateToProps = (state) => {
  const { rootReducer2 } = state
  //debugger;
    return {
      posts: rootReducer2.posts
    }
}


export default connect(mapStateToProps)(home)
//export default withReducer("rootReducer3", rootReducer3)(navbar);
//home.contextType = MyContext;

//export default withReducer('rootReducer3', rootReducer3, MyContext)(connect(mapStateToProps, null, null, { context: MyContext })(home))

