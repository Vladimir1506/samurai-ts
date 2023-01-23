import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    data: {}
})
export const usersAPI = {
    getUsers(pageNumber: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },
    auth() {
        return instance.get('auth/me').then(response => response.data)
    },
    getProfile(userId: string) {
        return instance.get(
            `profile/${userId}`
        ).then(response => response.data)
    },
    follow(userId: string) {
        return instance.post('follow/' + userId).then(response => response.data)
    },
    unfollow(userId: string) {
        return instance.delete('follow/' + userId).then(response => response.data)
    }
}