import { FC, MouseEvent } from 'react'

import Icon from '@components/ui/Icon/Icon'

import { useActions } from '@hooks/useActions'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li>
			<a onClick={handleClick}>
				<Icon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	)
}
export default LogoutButton
