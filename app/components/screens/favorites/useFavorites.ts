import { useQuery } from 'react-query'

import { UserService } from '@services/user.service'

export const useFavorites = () => {
	const { data, isLoading, refetch } = useQuery(
		'Favorite movies',
		() => UserService.getFavorites(),
		{
			select: ({ data }) => data,
			refetchOnMount: true,
		}
	)

	return {
		data,
		isLoading,
		refetch,
	}
}
