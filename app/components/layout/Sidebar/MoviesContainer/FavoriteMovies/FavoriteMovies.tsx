import { useEffect } from 'react'

import { useFavorites } from '@components/screens/favorites/useFavorites'
import SkeletonLoader from '@components/ui/SkeletonLoader'

import { useAuth } from '@hooks/useAuth'

import MoviesList from '../MoviesList'

import NotAuth from './NotAuth'

const FavoriteMovies = () => {
	const { user } = useAuth()
	const { data, isLoading, refetch } = useFavorites()

	useEffect(() => {
		refetch()
	}, [user])

	if (!user) return <NotAuth />

	return isLoading ? (
		<div className="mx-8 mb-6">
			<SkeletonLoader count={4} className="mt-2 h-7" />
		</div>
	) : (
		<>
			<MoviesList
				link="/favorites"
				movies={data ? data.slice(0, 3) : []}
				title="Favorite Movies"
			/>
		</>
	)
}

export default FavoriteMovies
