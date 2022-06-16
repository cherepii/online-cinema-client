import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Icon from '@components/ui/Icon/Icon'

import styles from './Menu.module.scss'
import { IMenuItem } from './data-and-types/menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<a>
					<Icon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	)
}
export default MenuItem
