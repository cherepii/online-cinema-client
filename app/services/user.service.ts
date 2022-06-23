import axios from 'api/interceptors'

import { IMovie } from '@shared/types/movie.types'

import { getUsersUrl } from '@config/api.config'

export const UserService = {
	async getFavorites() {
		return await axios.get<IMovie[]>(getUsersUrl('profile/favorites'))
	},
}
