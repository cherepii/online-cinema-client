import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Icon from '@components/ui/Icon/Icon'

import { IMovie } from '@shared/types/movie.types'

import { getGenresText } from '@utils/string/getGenresText'

import { getGenreUrl, getMovieUrl } from '@config/url.config'

import styles from './MoviesList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						priority
						width={67}
						height={96}
						draggable={false}
						src={movie.poster}
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div>
					<Link href={getMovieUrl(movie.slug)}>
						<a>
							<div className={styles.title}>{movie.title}</div>
						</a>
					</Link>
					<div className={styles.genres}>
						{movie.genres.map((genre, idx) => (
							<Link href={getGenreUrl(genre.slug)} key={genre._id}>
								<a>{getGenresText(idx, genre.name, movie.genres.length)}</a>
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<Icon name="MdStarRate" />
					<span>{movie.rating?.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}
export default MovieItem
