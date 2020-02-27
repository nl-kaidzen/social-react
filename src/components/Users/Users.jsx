import React from 'react';
import style from './Users.module.scss';

const Users = (props) => {
    let totalPages = Math.ceil(props.totalCount / props.usersOnPage);
    let pages = [];
    for (let i = 1; i<= totalPages; i++) {
        pages.push(i);
    };

    return(
        <div className={style.userPage}>
            <div className={style.pagination}>
                {pages.map((page) => {
                    return(<button 
                        className={`${page === props.currentPage ? style.active : ''} ${style.paginationButton}`}
                        onClick={(e) => {
                            props.onPaginationButtonClick(page);
                        }}>{page}</button>)
                })}
            </div>
            {   props.users.map((user) => {
                    return (
                        <div className={style.userWrapper}>
                            <div className={style.userImg}>
                                <img src={(user.photos.small !== null) 
                                    ? user.photos.small 
                                    : "https://cs9.pikabu.ru/post_img/big/2017/04/12/5/1491981452114887277.jpg"} 
                                    alt="User avatar" width="100" height="100" />
                                {user.isFollow 
                                    ? <button onClick={() => props.unfollow(user.id)}
                                        className={style.friendButton}>Unfollow</button> 
                                    : <button onClick={() => props.follow(user.id)}
                                        className={style.friendButton}>Follow</button>}
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

export default Users;