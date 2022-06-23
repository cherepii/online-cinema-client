import { GetStaticProps, NextPage } from 'next'

import Home from '@components/screens/home/Home'
import { IHome } from '@components/screens/home/home.interface'

import { MovieService } from '@services/movie.service'

import { getGenresList } from '@utils/string/getGenresText'

import { getMovieUrl } from '@config/url.config'

const HomePage: NextPage<IHome> = ({ slides }) => {
	return <Home slides={slides} />
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { data: movies } = await MovieService.getAll()

	const slides = movies.slice(0, 5).map((m) => ({
		_id: m._id,
		image: m.bigPoster,
		link: getMovieUrl(m.slug),
		subTitle: getGenresList(m.genres),
		title: m.title,
	}))

	return {
		props: {
			slides,
		} as IHome,
	}
}

export default HomePage
