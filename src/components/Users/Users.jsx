import React from 'react';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, imgUrl: 'https://cs9.pikabu.ru/post_img/big/2017/04/12/5/1491981452114887277.jpg', isFollow: true, fullname: 'Andrei K.', status: 'I am boss of React', location: { city: 'Munich', country: 'Germany' } },
            { id: 2, imgUrl: 'https://cs9.pikabu.ru/post_img/big/2017/04/12/5/1491981452114887277.jpg', isFollow: false, fullname: 'Anastasia K.', status: 'I am junior', location: { city: 'Novosibirsk', country: 'Russia' } },
            { id: 3, imgUrl: 'https://cs9.pikabu.ru/post_img/big/2017/04/12/5/1491981452114887277.jpg', isFollow: true, fullname: 'Vladimir K.', status: 'Senior BE developer', location: { city: 'Barnaul', country: 'Russia' } },
            { id: 4, imgUrl: 'https://cs9.pikabu.ru/post_img/big/2017/04/12/5/1491981452114887277.jpg', isFollow: false, fullname: 'Benedikt K.', status: 'Senior Full-Stack Shark', location: { city: 'Ikea', country: 'Sweeden' } },
        ]);
    }

    return (
        <div>
            {
                props.users.map((user) => {
                    return (
                        <div className="userWrapper">
                            <div className="userImg">
                                <img src={user.imgUrl} alt="User avatar" width="100" height="100"/>
                            </div>
                            <div className="userInfoWrapper">
                                <div className="userInfo">
                                    <p className="userName">{user.fullname}</p>
                                    <p className="userStatus">{user.status}</p>
                                </div>
                                <div className="userLocation">
                                    <p className="city">{user.location.city}</p>
                                    <p className="country">{user.location.country}</p>
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