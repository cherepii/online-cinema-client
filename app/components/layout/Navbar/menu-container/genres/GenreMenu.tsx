import { FC } from 'react'

import SkeletonLoader from '@components/ui/SkeletonLoader'

import { usePopularGenres } from '@hooks/usePopularGenres'

import Menu from '../Menu'

const GenreMenu: FC = () => {
	const { data, isLoading } = usePopularGenres()

	return isLoading ? (
		<div className="mx-8 mb-6">
			<SkeletonLoader count={4} className="mt-2 h-7" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', links: data || [] }} />
	)
}
export default GenreMenu
