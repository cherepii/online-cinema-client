import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

type Props = {
	children?: React.ReactNode
}

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navbar />
			<div className={styles.content}>{children}</div>
			<Sidebar />
		</div>
	)
}
export default Layout
