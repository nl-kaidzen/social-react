import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC, followAC, unfollowAC, setCurrentPageAC, setUserOnPageAC, setTotalUsersAC } from './../../state/users-reducer.js';
import Users from './Users.jsx';

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;