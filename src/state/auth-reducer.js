const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
            return {
                ...state,
                ...action.userData,
                isAuth: true,
            }
        }

        default: {
            return state
        }
    }
}

export const setUserAuthData = (id, email, login) => ({type: SET_USER_AUTH_DATA, userData: {id, email, login}});

export default authReducer