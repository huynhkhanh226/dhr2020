import React, { Component } from "react";
import axios from "axios";
import { connect} from "react-redux";
import {
  Button
} from "reactstrap";
import {deletePost} from '../../../actions/actionPost';

export class post extends Component {
    constructor(props) {
      super(props);
      //console.log(props);
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
    //consoleconsole.log("handleDelete");
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
  //console.log(ReactReduxContext);
  let id = ownProps.match.params.id;
  const { rootReducer2 } = state
  return {
    post: rootReducer2.posts.find(item => {
        //console.log(item);
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
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(post)

