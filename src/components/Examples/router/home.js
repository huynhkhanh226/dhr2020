import React, { Component } from "react";
import axios from "axios";
import { PropTypes  } from "prop-types";
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
import { compose } from "C:/Users/huynhkhanh/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";
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


//export default connect(mapStateToProps)(home)
//export default withReducer("rootReducer3", rootReducer3)(navbar);
//home.contextType = MyContext;
export default connect(mapStateToProps)(home)

//export default withReducer('rootReducer3', rootReducer3, null, {context: MyContext})(home)

