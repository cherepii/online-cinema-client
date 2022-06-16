import { ChangeEvent, FC } from 'react'

import Icon from '../Icon/Icon'

import styles from './SearchPanel.module.scss'

interface ISearchPanel {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchPanel: FC<ISearchPanel> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search}>
			<Icon name="MdSearch" />
			<input
				type="text"
				placeholder="Search"
				onChange={handleSearch}
				value={searchTerm}
			/>
		</div>
	)
}
export default SearchPanel
