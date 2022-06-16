import { FC } from 'react'

import SearchPanel from '@components/ui/SearchPanel/SearchPanel'

import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { data, handleChange, isSuccess, searchTerm } = useSearch()

	return (
		<div className={styles.wrapper}>
			<SearchPanel handleSearch={handleChange} searchTerm={searchTerm} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}
export default Search
