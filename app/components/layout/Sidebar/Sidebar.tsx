import { FC } from 'react'

import Search from '@components/search/Search'

import MoviesContainer from './MoviesContainer/MoviesContainer'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}
export default Sidebar
