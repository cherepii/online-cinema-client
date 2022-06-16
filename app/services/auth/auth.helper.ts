import Cookies from 'js-cookie'

import { IResponseData, ITokens } from './../../store/user/user.interface'

export const saveTokensToCookie = (data: ITokens) => {
	Cookies.set('accessToken', data.access)
	Cookies.set('refreshToken', data.refresh)
}

export const saveUserToStorage = (data: IResponseData) => {
	saveTokensToCookie(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const clearTokens = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}
