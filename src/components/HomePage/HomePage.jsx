import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userActions} from '../../_actions/user.actions';
import MainMenu from './MainMenu.jsx';
import TopMenu from './TopMenu.jsx';
import Header from './Header.jsx';
import EssMenu from './EssMenu.jsx';
import Footer from '../LoginPage/Footer.jsx';

import './HomePage.scss';

class HomePage extends React.Component {

    componentDidMount() { // this.props.getUsers();
    }
    render() {
        const {user} = this.props;
        return (
            <div className="home-page">
                <TopMenu />
                <MainMenu />
                <Header userName={user.data.user.UserNameU} />
                <EssMenu />
                
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
