import { FC } from 'react'

import { useAuth } from '@hooks/useAuth'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const UserMenu: FC = () => {
	const { user } = useAuth()

	return user ? (
		<>
			<MenuItem
				item={{ icon: 'MdSettings', link: '/profile', title: 'Profile' }}
			/>
			<LogoutButton />
		</>
	) : (
		<>
			<MenuItem
				item={{ icon: 'MdOutlineLock', link: '/auth', title: 'Log in' }}
			/>
		</>
	)
}
export default UserMenu
