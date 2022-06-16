import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@hooks/useDebounce'

import { MovieService } from '@services/movie.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 600)

	const { isSuccess, data } = useQuery(
		['get movies list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		}
	)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { isSuccess, data, handleChange, searchTerm }
}
