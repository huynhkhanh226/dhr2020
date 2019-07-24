import React, { Component } from "react";
import axios from "axios";
import { connect, ReactReduxContext , connectAdvanced} from "react-redux";
import {
  Button
} from "reactstrap";
import {deletePost} from '../../../configuration/actionPost';
import {MyContext} from '../../../configuration/context';
import { compose } from "C:/Users/huynhkhanh/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";
import { withReducer } from "../../../configuration/withReducer";
import { rootReducer3 } from "../../../configuration/reducer3";

export class post extends Component {
    constructor(props) {
      super(props);
      debugger;
      console.log(props);
      this.state = {
        id: null,
        post: null
      };
    }
  //   }
  //   componentDidMount() {
  //     console.log(this.props);
  //     let id = this.props.match.params.id ;

  //     this.setState({
  //       id: id
  //     });

  //     axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
  //         console.log(res);
  //         this.setState({
  //             post: res.data
  //         });
  //     });
  //   }

  handleDelete = () => {
    console.log("handleDelete");
    this.props.deletePost(this.props.post.id);
    //this.props.history.push('/home');
  }

  render() {
    
    const { post } = this.props;

    const renderHTML =
      post == null ? (<div>Loading...</div>) : (<div>Hello Post {post.body} <Button onClick={this.handleDelete}>Delete</Button></div>);

    return <div>{renderHTML} </div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ReactReduxContext);
  let id = ownProps.match.params.id;
  const { rootReducer2 } = state
  return {
    post: rootReducer2.posts.find(item => {
        console.log(item);
        return item.id === Number(id);
    })
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deletePost: (id) => {
//       dispatch({type: 'DELETE', id: id})
//     }
//   }
// }

const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
}


export default withReducer('rootReducer3', rootReducer3)( connect(mapStateToProps, mapDispatchToProps)(post))

