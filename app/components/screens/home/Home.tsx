import Image from 'next/image'
import { FC } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import Heading from '@components/ui/Heading/Heading'
import Slider from '@components/ui/slider/Slider'

import Meta from '@utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ slides }) => {
	console.log(slides)
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
			{slides.length && <Slider slides={slides} />}
		</Meta>
	)
}

export default Home
