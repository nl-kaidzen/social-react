import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC, followAC, unfollowAC, setCurrentPageAC, setUserOnPageAC, setTotalUsersAC, toggleIsFetchingAC, toggleUpdatingStatusUser } from './../../state/users-reducer.js';
import Users from './Users.jsx';
import Preloader from '../common/Preloader/Preloader.jsx';
import  { userAPI } from './../../api/api';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersOnPage: state.usersPage.usersOnPageCount,
        totalCount: state.usersPage.totalUserCount,
        isFetching: state.usersPage.isFetching,
        isFollowingStatus: state.usersPage.isFollowingStatus
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        },
        toggleUpdatingStatusUser: (user, isUpdate) => {
            dispatch(toggleUpdatingStatusUser(user, isUpdate))
        }
    }
}

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.usersOnPage)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsers(data.totalCount);
            });
    }

    onPaginationButtonClick = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        userAPI.getUsers(page, this.props.usersOnPage)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsers(data.totalCount);
            });
    }
    render() {
        return(
        <>
            {this.props.isFetching 
                ? <Preloader />
                : <Users 
                    totalCount={this.props.totalCount}
                    users={this.props.users}
                    usersOnPage={this.props.usersOnPage}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPaginationButtonClick={this.onPaginationButtonClick}
                    isFollowingStatus={this.props.isFollowingStatus}
                    toggleUpdatingStatusUser={this.props.toggleUpdatingStatusUser}/>
            }
        </>    
        );  
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;