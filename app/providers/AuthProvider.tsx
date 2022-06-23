import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { useActions } from '@hooks/useActions'
import { useAuth } from '@hooks/useAuth'

interface withChildren {
	children: React.ReactNode
}

const AuthProvider: FC<withChildren> = ({ children }) => {
	const { user } = useAuth()

	const { logout, checkAuth } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (user && !refreshToken) logout()
	}, [pathname])

	return <>{children}</>
}
export default AuthProvider
