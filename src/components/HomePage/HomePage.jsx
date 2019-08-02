import React, { Suspense } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {userActions} from '../../actions/user.actions';
import './HomePage.scss';
import W00F1000 from '../W0X/W00/W00F1000/W00F1000';
import routes from '../../routes/routes';
// import MainMenu from './MainMenu.jsx';
// import TopMenu from './TopMenu.jsx';
// import Header from './Header.jsx';
// import EssMenu from './EssMenu.jsx';
//import Footer from '../LoginPage/Footer.jsx';
const MainMenu = React.lazy(() => import( /* webpackChunkName: "MainMenu" */'./MainMenu.jsx'));
const TopMenu = React.lazy(() => import( /* webpackChunkName: "TopMenu" */'./TopMenu.jsx'));
const Header = React.lazy(() => import( /* webpackChunkName: "Header" */'./Header.jsx'));
const EssMenu = React.lazy(() => import( /* webpackChunkName: "EssMenu" */'./EssMenu.jsx'));
const Footer = React.lazy(() => import( /* webpackChunkName: "Footer" */'../Shared/Footer/Footer.jsx'));



class HomePage extends React.Component {

    componentDidMount() { // this.props.getUsers();
    }
    render() {
        const {user} = this.props;
        return (
            <div className="home-page">
              <Router>
                  <Suspense fallback={<div>Loading...</div>}>
                    <TopMenu />
                 </Suspense>
                 <Suspense fallback={<div>Loading...</div>}>
                    <MainMenu />
                  </Suspense>
                  <Suspense fallback={<div>Loading...</div>}>
                    <div className="khanh-test">
                        <Switch>
                              {routes.map((route, idx) => {
                                console.log(route);
                                return route.component ? (
                                  <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                      <route.component {...props} />
                                    )} />
                                ) : (null);
                              })}
                        </Switch>
                    </div>
                  </Suspense> 
                  </Router>
            </div>

        );
    }
}

function mapState(state) {
    const {authentication} = state;
    const {user} = authentication;
    return {user};
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const Home = connect(mapState, actionCreators)(HomePage);
// export {
//     connectedHomePage as HomePage
// };

export default Home
