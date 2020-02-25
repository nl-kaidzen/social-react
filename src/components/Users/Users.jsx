import React from 'react';
import * as axios from 'axios';
import style from './Users.module.scss';

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(responce => {
                this.props.setUsers(responce.data.items)
            });
    }
    render() {
        return(
            <div className={style.userPage}>
            {
                this.props.users.map((user) => {
                    return (
                        <div className={style.userWrapper}>
                            <div className={style.userImg}>
                                <img src={(user.photos.small !== null) 
                                    ? user.photos.small 
                                    : "https://cs9.pikabu.ru/post_img/big/2017/04/12/5/1491981452114887277.jpg"} 
                                    alt="User avatar" width="100" height="100" />
                                {user.isFollow 
                                    ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> 
                                    : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
                            </div>
                            <div className={style.userInfoWrapper}>
                                <div className={style.userInfo}>
                                    <p className={style.userName}>{user.name}</p>
                                    <p className={style.userStatus}>{user.status}</p>
                                </div>
                                <div className={style.userLocation}>
                                    <p className={style.city}>user.location.city</p>
                                    <p className={style.country}>user.location.country</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
        );
    }
}

export default Users;