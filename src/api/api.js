import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ef2779d0-1e43-4b6d-ac2d-4b93699f1fc5',
    }
});

export const userAPI = {
    getUsers (currentPage = 1, usersOnPage = 10) {
        return instance.get(`users?page=${currentPage}&count=${usersOnPage}`)
            .then(responce => (responce.data));        
    },
    follow (userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`);
    },
    authMe () {
        return instance.get(`auth/me`);
    },
    getUserProfile (userId) {
        return instance.get(`profile/${userId}`);
    }
};