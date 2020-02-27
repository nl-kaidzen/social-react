import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC, followAC, unfollowAC, setCurrentPageAC, setUserOnPageAC, setTotalUsersAC } from './../../state/users-reducer.js';
import Users from './Users.jsx';
import * as axios from 'axios';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersOnPage: state.usersPage.usersOnPageCount,
        totalCount: state.usersPage.totalUserCount,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setUsersOnPage: (count) => {
            dispatch(setUserOnPageAC(count));
        },
        setTotalUsers: (count) => {
            dispatch(setTotalUsersAC(count));
        }
    }
}

class UsersAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${this.props.currentPage}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsers(responce.data.totalCount);
            });
    }

    onPaginationButtonClick = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${page}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsers(responce.data.totalCount);
            });
    }
    render() {
        return(
            <Users 
                totalCount={this.props.totalCount}
                users={this.props.users}
                usersOnPage={this.props.usersOnPage}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPaginationButtonClick={this.onPaginationButtonClick}/>
        );
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;