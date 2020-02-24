const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            isFollow: true,
                        };
                    }
                    return user;
                }),
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            isFollow: false,
                        };
                    }
                    return user;
                }),
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: [ ...state.users, ...action.users ],
            }
        }

        default: {
            return state;
        }
    }
}

export let followActionCreator = (id) => ({ type: FOLLOW, userId: id });
export let unfollowActionCreator = (id) => ({ type: UNFOLLOW, userId: id });
export let setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;