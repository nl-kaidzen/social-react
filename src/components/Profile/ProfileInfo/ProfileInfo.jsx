import React from 'react';
import Preloader from './../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
    if (!props.userData) {
        return (<Preloader />);
    }
    return(
        <div>
            <div className="bgImageContainer">
                <img src="" alt="" className="bgImage"/>
            </div>
            <div className="infoContainer">
                <img src={props.userData.photos.small} alt="" className="userImg"/>
                <span className="label">Full name:</span>
                <p className="userInfo">{props.userData.fullName}</p>
                <span className="label">About me:</span>
                <p className="userInfo">{props.userData.aboutMe}</p>
                <span className="label">My socials:</span>
                <div className="socialContainer">

                </div>
                <span className="label">Job status:</span>
                <p className="userInfo">
                    {props.userData.lookingForAJob
                        ? 'Looking for a Job'
                        : 'Not interested'}
                </p>
                <span className="label">Looking job description:</span>
                <p className="userInfo">{props.userData.lookingForAJobDescription}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;