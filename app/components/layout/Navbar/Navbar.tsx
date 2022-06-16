import { FC } from 'react'

import Logo from './Logo'
import styles from './Navbar.module.scss'
import MenuContainer from './menu-container/MenuContainer'

const Navbar: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}
export default Navbar
