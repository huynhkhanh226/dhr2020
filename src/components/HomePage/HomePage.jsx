import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userActions} from '../../_actions/user.actions';
import MainMenu from './MainMenu.jsx';
import TopMenu from './TopMenu.jsx';
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
                <div className="col-md-6 col-md-offset-3">
                    <h1>Hi {
                        user.data.user.UserNameU
                    }!</h1>

                    <p>
                        <Link to="/login">Đăng xuất</Link>
                    </p>
                </div>
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
