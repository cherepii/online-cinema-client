import axios from 'axios'
import Cookies from 'js-cookie'

import { AuthService } from '@services/auth/AuthService'
import { clearTokens } from '@services/auth/auth.helper'

import { API_URL } from '@config/api.config'

import { errorCatch } from './api.helpers'

const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`

		return config
	}
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()

				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') clearTokens()
			}
		}

		throw error
	}
)

export default instance

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application-json',
	},
})
