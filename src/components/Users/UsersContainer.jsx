import React from 'react';
import { connect } from 'react-redux';
import { 
    setCurrentPage, 
    toggleUpdatingStatusUser,
    getUsers, followUser, unfollowUser
} from './../../state/users-reducer.js';
import Users from './Users.jsx';
import Preloader from '../common/Preloader/Preloader.jsx';

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

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
    }

    onPaginationButtonClick = (page, usersOnPage) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, usersOnPage)
    }
    render() {
        return(
        <>
            {this.props.isFetching 
                ? <Preloader />
                : <Users 
                    totalCount = {this.props.totalCount}
                    users = {this.props.users}
                    usersOnPage = {this.props.usersOnPage}
                    currentPage = {this.props.currentPage}
                    onPaginationButtonClick = {this.onPaginationButtonClick}
                    isFollowingStatus = {this.props.isFollowingStatus}
                    toggleUpdatingStatusUser = {this.props.toggleUpdatingStatusUser}
                    followUser = {this.props.followUser}
                    unfollowUser = {this.props.unfollowUser}/>
            }
        </>    
        );  
    }
}

const UsersContainer = connect(mapStateToProps, {
    setCurrentPage,
    toggleUpdatingStatusUser,
    getUsers,
    followUser,
    unfollowUser
})(UsersAPI);

export default UsersContainer;