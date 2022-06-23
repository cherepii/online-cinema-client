import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import UserMenu from './auth/UserMenu'
import { IMenu } from './data-and-types/menu.interface'

const Menu: FC<{ menu: IMenu }> = ({ menu: { title, links } }) => {
	return (
		<div className={styles.menu}>
			<h1 className={styles.title}>{title}</h1>
			<ul className={styles.list}>
				{links.map((link) => (
					<MenuItem item={link} key={link.link} />
				))}
				{title === 'General' && <UserMenu />}
			</ul>
		</div>
	)
}
export default Menu
