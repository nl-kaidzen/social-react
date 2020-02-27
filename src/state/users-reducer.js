const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [
        
    ],
    usersOnPageCount: 20,
    currentPage: 1,
    totalUserCount: 1,
    isFetching: 'false'
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
                users: [ ...action.users ],
            }
        }

        case SET_USERS_COUNT: {
            return {
                ...state,
                usersOnPageCount: action.count,
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page,
            }
        }

        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUserCount: action.totalUsers,
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }

        default: {
            return state;
        }
    }
}

export let followAC = (id) => ({ type: FOLLOW, userId: id });
export let unfollowAC = (id) => ({ type: UNFOLLOW, userId: id });
export let setUsersAC = (users) => ({ type: SET_USERS, users });
export let setUserOnPageAC = (count) => ({ type: SET_USERS_COUNT, count });
export let setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, page: currentPage });
export let setTotalUsersAC = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers });
export let toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;