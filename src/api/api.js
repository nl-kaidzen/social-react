import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headaers: {
        'API-KEY': 'ac727bce-b87e-411a-9d96-1a40c1270b1c',
    }
})

export const userAPI = {
    getUsers (currentPage = 1, usersOnPage = 10) {
        return axiosInstance.get(`users?count=${usersOnPage}&page=${currentPage}`)
            .then(responce => (responce.data));        
    }
};

export const followAPI = {
    follow (userId) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': 'ac727bce-b87e-411a-9d96-1a40c1270b1c'
            }
        })
    },
    unfollow (userId) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'ac727bce-b87e-411a-9d96-1a40c1270b1c'
            }
        })
    }
}