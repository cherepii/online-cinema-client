import { getGenresUrl } from '@config/api.config';
import { IGenre } from '@shared/types/movie.types';
import { axiosClassic } from 'api/interceptors';

export const GenreService = {
	async getAll(searchTerm?: string) {
		return await axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? searchTerm : {},
		});
	},
};
