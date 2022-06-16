import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@services/auth/AuthService'

import { toastError } from '@utils/toast-error'

import { errorCatch } from './../../api/api.helpers'
import { IEmailPassword, IResponseData } from './user.interface'

export const register = createAsyncThunk<IResponseData, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const res = await AuthService.register(email, password)
			toastr.success('Authorization', 'Completed successfully')
			return res.data
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IResponseData, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const res = await AuthService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return res.data
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', () => {
	AuthService.logout()
})

export const checkAuth = createAsyncThunk(
	'auth/checkAuth',
	async (_, thunkApi) => {
		try {
			const res = await AuthService.getNewTokens()
			return res.data
		} catch (e) {
			if (errorCatch(e) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorization is finished, please login again'
				)
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(e)
		}
	}
)
