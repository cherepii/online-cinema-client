import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

import logoImage from '@assets/images/logo.svg'

import { onlyText } from '@utils/string/clearText'

import { siteName, titleMerge } from '@config/meta.config'

import { ISeo } from './meta.interface'

const Meta: FC<ISeo> = ({ children, title, description, image }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			{description ? (
				<Head>
					<title itemProp="headline">{titleMerge(title)}</title>
					<meta
						itemProp="description"
						name="description"
						content={onlyText(description, 152)}
					/>
					<link rel="canonical" href={currentUrl} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || logoImage} />
					<meta property="og:site_name" content={siteName} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
				</Head>
			) : (
				<>
					<Head>
						<meta name="robots" content="noindex, nofollow" />
						<title>{titleMerge(title)}</title>
					</Head>
				</>
			)}
			{children}
		</>
	)
}
export default Meta
