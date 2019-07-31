import React, { Suspense } from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userActions} from '../../actions/user.actions';
import './HomePage.scss';
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
                 <Suspense fallback={<div>Loading...</div>}>
                    <TopMenu />
                 </Suspense>
                 <Suspense fallback={<div>Loading...</div>}>
                    <MainMenu />
                  </Suspense>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Header userName={user.data.user.UserNameU} />
                  </Suspense>
                  <Suspense fallback={<div>Loading...</div>}>
                    <EssMenu />
                  </Suspense> 
                  <Suspense fallback={<div>Loading...</div>}>
                    <Footer />
                  </Suspense>
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

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export {
    connectedHomePage as HomePage
};
