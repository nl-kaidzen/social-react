import React from 'react';
import { connect } from 'react-redux';
import { 
    follow, unfollow, 
    setCurrentPage, 
    toggleUpdatingStatusUser,
    getUsers,
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

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow, 
    setCurrentPage,
    toggleUpdatingStatusUser,
    getUsers,
})(UsersAPI);

export default UsersContainer;