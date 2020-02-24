let initialState = {
    users: [
        {id: 1, fullname: 'Andrei K.', status: 'I am boss of React', location: {city: 'Munich', country: 'Germany'}},
        {id: 1, fullname: 'Anastasia K.', status: 'I am junior', location: {city: 'Novosibirsk', country: 'Russia'}},
        {id: 1, fullname: 'Vladimir K.', status: 'Senior BE developer', location: {city: 'Barnaul', country: 'Russia'}},
        {id: 1, fullname: 'Benedikt K.', status: 'Senior Full-Stack Shark', location: {city: 'Ikea', country: 'Sweeden'}},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

    }
}

export default usersReducer;