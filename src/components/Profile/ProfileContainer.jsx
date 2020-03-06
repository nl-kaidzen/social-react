import React from 'react';
import { connect } from 'react-redux'
import Profile from './Profile';
import { getUserProfile } from './../../state/profile-reducer'
import { withRouter } from 'react-router-dom';

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
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

let ProfileContainer = connect(mapStateToProps, { getUserProfile })(WithUrlDataComtainerComponent);

export default ProfileContainer;