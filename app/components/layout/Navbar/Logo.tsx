import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-10 mb-10 block">
				<Image
					src={logoImage}
					width="256px"
					height="36px"
					alt="Logo"
					draggable={false}
				/>
			</a>
		</Link>
	)
}
export default Logo
