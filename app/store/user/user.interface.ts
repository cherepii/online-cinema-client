import { IUser } from '@shared/types/user.types'

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface ITokens {
	access: string
	refresh: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export interface IResponseData extends ITokens {
	user: IUser & {
		isAdmin: boolean
	}
}
