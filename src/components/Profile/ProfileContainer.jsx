import React from 'react';
import { connect } from 'react-redux'
import Profile from './Profile';
import axios from 'axios'
import { setUserProfileData }from './../../state/profile-reducer'

class ProfileAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let ProfileContainer = connect(mapStateToProps, {setUserProfileData})(ProfileAPI);

export default ProfileContainer;