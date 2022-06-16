import { useQuery } from 'react-query'

import SkeletonLoader from '@components/ui/SkeletonLoader'

import { MovieService } from '@services/movie.service'

import MoviesList from './MoviesList'

const PopularMovies = () => {
	const { isLoading, data: movies } = useQuery('Get Most-popular movies', () =>
		MovieService.getMostPopularMovies()
	)

	return isLoading ? (
		<div className="mt-7">
			<SkeletonLoader count={3} className="h-6 mb-4" />
		</div>
	) : (
		<MoviesList link="/trending" movies={movies || []} title="Popular Movies" />
	)
}
export default PopularMovies
