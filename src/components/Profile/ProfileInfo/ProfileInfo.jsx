import React from 'react';

const ProfileInfo = (props) => {
    return(
        <div>
            <div className="imgWrapper">
                <img src={props.userData.photos.small} alt="Avatar user"/>
            </div>
            <div className="infoWrapper">
                <p className="fullName">{props.fullname}</p>
                <p className="job">{props.job}</p>
                <p className="jobDescription">{props.jobDescription}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;