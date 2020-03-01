import React from 'react';
import { connect } from 'react-redux'
import Profile from './Profile';
import axios from 'axios'
import { setUserProfileData } from './../../state/profile-reducer'
import { withRouter } from 'react-router-dom';

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(responce => {
                this.props.setUserProfileData(responce.data);
            });
    }
    render() {
        return(
            <Profile {...this.props } userData={this.props.userData}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.profilePage.userData,
    }
}

let WithUrlDataComtainerComponent = withRouter(ProfileAPI);

let ProfileContainer = connect(mapStateToProps, {setUserProfileData})(WithUrlDataComtainerComponent);

export default ProfileContainer;