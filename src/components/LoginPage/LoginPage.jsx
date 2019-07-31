import React, { Suspense } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './Login.scss';
import { userActions, alertActions } from "../../_actions";
import { FormGroup,Row, Col,  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
//import Footer from './Footer.jsx';
import Logo from './logo.jsx';
const Footer = React.lazy(() => import( /* webpackChunkName: "Footer" */'../Shared/Footer/Footer.jsx'));

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
    const { alert } = this.props;
    return (<div>
          <div className="div-login">
          <FormGroup row >
            <Col sm={4}></Col>
            <Col sm={4} className="login-container">
              <form name="form"onSubmit={this.handleSubmit}>
                <Card>
                  <CardBody>
                    <Logo logo={logo} />
                    <FormGroup row className={"margin-bottom_0"}>
                      <Col sm={12}>
                        {alert.message &&
                            <div className={`alert-danger-custom alert ${alert.type}`}>{alert.message}</div>
                        }
                      <div className={"form-group"}>
                        <label htmlFor="username">TÊN ĐĂNG NHẬP</label>
                        <input type="text" className="form-control" name="username" placeholder="Nhập tên đăng nhập"
                          value={username} onChange={this.handleChange} autoFocus/> 
                        {submitted && !username && (<div className="help-block pull-right">Vui lòng nhập tên đăng nhập</div>)} </div>


                      <div className={"form-group"}>
                        <label htmlFor="password">MẬT KHẨU</label>
                        <input type="password" className="form-control" name="password" placeholder="Nhập mật khẩu"
                          value={password} onChange={this.handleChange} /> 
                        {submitted && !password && (<div className="help-block">Vui lòng nhập mật khẩu</div>)} 
                      </div>    
                  </Col>
                </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <div className='login-button'><button className="btn"><span>ĐĂNG NHẬP</span></button></div>
                  </CardFooter>
                  </Card>
              </form>
            </Col>
            <Col sm={4}></Col>
          </FormGroup>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
              <Row>
                <Col sm={12} style={{paddingLeft: '0px', paddingRight: '0px'}}>
                  <Footer />
                </Col>
              </Row>
          </Suspense>
    </div>);
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  const { alert } = state;
  return { loggingIn, alert };
}

const actionCreators = {
  getClient: userActions.getClient,
  login: userActions.login,
  logout: userActions.logout,
  clearAlerts: alertActions.clear
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export {
  connectedLoginPage as LoginPage
};
