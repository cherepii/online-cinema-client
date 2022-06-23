import { FC } from 'react'

import Menu from './Menu'
import { firstMenu } from './data-and-types/menu.data'
import GenreMenu from './genres/GenreMenu'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={{ title: 'General', links: [] }} />
		</div>
	)
}
export default MenuContainer
