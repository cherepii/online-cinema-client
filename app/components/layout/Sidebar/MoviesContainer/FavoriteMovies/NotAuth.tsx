import Link from 'next/link'
import { FC } from 'react'

const NotAuth: FC = () => {
	return (
		<div className="text-white text-opacity-50 bg-gray-700 bg-opacity-30 text-sm rounded-md py-4 px-3 mt-4 text-center">
			For viewing favorite movies, please{' '}
			<Link href="/auth">
				<a className="text-primary text-base underline underline-offset-2 font-medium">
					log in
				</a>
			</Link>
		</div>
	)
}
export default NotAuth
