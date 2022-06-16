import { axiosClassic } from 'api/interceptors'
import Cookies from 'js-cookie'

import { IResponseData } from '@store/user/user.interface'

import { getAuthUrl } from './../../config/api.config'
import { clearTokens, saveUserToStorage } from './auth.helper'

export const AuthService = {
	async register(email: string, password: string) {
		const res = await axiosClassic.post<IResponseData>(getAuthUrl('register'), {
			email,
			password,
		})

		if (res.data.access) saveUserToStorage(res.data)

		return res
	},

	async login(email: string, password: string) {
		const res = await axiosClassic.post<IResponseData>(getAuthUrl('login'), {
			email,
			password,
		})

		if (res.data.access) saveUserToStorage(res.data)

		return res
	},

	logout() {
		clearTokens()
		localStorage.removeItem('user')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const res = await axiosClassic.post<IResponseData>(
			getAuthUrl('login/access-token'),
			{ refreshToken }
		)

		if (res.data.access) saveUserToStorage(res.data)

		return res
	},
}
