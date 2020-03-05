import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headaers: {
        'API-KEY': 'ac727bce-b87e-411a-9d96-1a40c1270b1c',
    }
})

export const userAPI = {
    getUsers (currentPage = 1, usersOnPage = 10) {
        return instance.get(`users?count=${usersOnPage}&page=${currentPage}`)
            .then(responce => (responce.data));        
    },
    follow (userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
    },
    unfollow (userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
    }
};