import React, { Suspense } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './Login.scss';
import { userActions } from "../../_actions/user.actions";
import { FormGroup, Col, Label } from 'reactstrap';
import Footer from './Footer.jsx';
import Logo from './logo.jsx';
const AlertPage = React.lazy(() => import( /* webpackChunkName: "AlertPage" */
  "../Alert/AlertPage.jsx"));


class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    let user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      this.props.logout();
    }

    this.state = {
      username: "",
      password: "",
      submitted: false,
      logo: require('../../assets/images/chanh_svg.svg')
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.getClient(username, password);
      // alert("abc");
      // this.props.login(username, password);
    }
  }

  render() { // const { loggingIn } = this.props;
    const { username, password, submitted, logo } = this.state;
    return (<div>
      
        <FormGroup row>
          <Col sm={4}>
          </Col>
          <Col sm={4} className="logo-container">
            <FormGroup row>
              <Col sm={12}>
                <Logo logo={logo} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <div style={{display: "none"}}>
                  <Suspense fallback={
                    <div>Loading...</div>
                  }>
                    <AlertPage />
                  </Suspense>
                </div>
                <form name="form"
                  onSubmit={
                    this.handleSubmit
                  }>
                  <div className={
                    "form-group" + (
                      submitted && !username ? " has-error" : ""
                    )
                  }>
                    <label htmlFor="username">TÊN ĐĂNG NHẬP</label>
                    <input type="text" className="form-control" name="username" placeholder="Nhập tên đăng nhập"
                      value={username}
                      onChange={
                        this.handleChange
                      } 
                      autoFocus
                      /> {
                      submitted && !username && (<div className="help-block">Username is required</div>)
                    } </div>
                  <div className={
                    "form-group" + (
                      submitted && !password ? " has-error" : ""
                    )
                  }>
                    <label htmlFor="password">MẬT KHẨU</label>
                    <input type="password" className="form-control" name="password" placeholder="Nhập mật khẩu"
                      value={password}
                      onChange={
                        this.handleChange
                      } /> {
                      submitted && !password && (<div className="help-block">Password is required</div>)
                    } </div>
                  <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
              </Col>
            </FormGroup>
          </Col>
          <Col sm={4}>
          </Col>
        </FormGroup>
        
      <FormGroup row>
        <Col sm={12}>
          <Footer />
        </Col>
      </FormGroup>
    </div>);
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  getClient: userActions.getClient,
  login: userActions.login,
  logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export {
  connectedLoginPage as LoginPage
};
