let initialState = {
    friends: ['Anastasia', 'Vladimir', 'Igor'],
}

const sidebarReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    };
}

export default sidebarReducer;