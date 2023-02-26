import axios, {AxiosResponse} from 'axios';
import {LoginDataType} from '../components/Login/LoginForm';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    data: {}
})
type ResponseType<T = {}> = {
    resultCode: number
    messages: string[],
    data: T
}
const responseCallback = (response: AxiosResponse) => response.data
export const usersAPI = {
    getUsers(pageNumber: number = 1, pageSize: number = 10) {
        return instance.get<ResponseType>(`users?page=${pageNumber}&count=${pageSize}`).then(responseCallback)
    },
    follow(userId: string) {
        return instance.post('follow/' + userId).then(responseCallback)
    },
    unfollow(userId: string) {
        return instance.delete('follow/' + userId).then(responseCallback)
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`).then(responseCallback)
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`).then(responseCallback)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status}).then(responseCallback)
    }
}
export const authAPI = {
    me() {
        return instance.get('auth/me').then(responseCallback)
    },
    login(data: LoginDataType) {
        return instance.post<ResponseType>('auth/login', data).then(responseCallback)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login').then(responseCallback)
    }
}

