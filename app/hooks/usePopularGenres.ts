import { IMenuItem } from '@components/layout/Navbar/menu-container/data-and-types/menu.interface';
import { getGenreUrl } from '@config/url.config';
import { GenreService } from '@services/genre.service';
import { useQuery } from 'react-query';

export const usePopularGenres = () => {
	const popularGenres = useQuery(
		'get popular genres',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre) =>
							({
								icon: genre.icon,
								title: genre.name,
								link: getGenreUrl(genre.slug),
							} as IMenuItem)
					)
					.splice(0, 4),
		}
	);

	return popularGenres;
};
