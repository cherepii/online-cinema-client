import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@shared/types/movie.types'

import { getMoviesUrl } from '@config/api.config'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link href={getMoviesUrl(movie.slug)} key={movie._id}>
						<a>
							<Image
								src={movie.poster}
								width={50}
								height={50}
								alt={movie.title}
								objectFit="cover"
								draggable={false}
								objectPosition="top"
							/>
							<span>{movie.title}</span>
						</a>
					</Link>
				))
			) : (
				<div className="text-gray-600 text-center mx-3 my-2">
					Movies are not found
				</div>
			)}
		</div>
	)
}
export default SearchList
