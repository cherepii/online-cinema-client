import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'

import { ISlide } from '@components/screens/home/home.interface'

import Button from '../form-elements/Button'

import styles from './Slider.module.scss'

const Slider: FC<{ slides: ISlide[] }> = ({ slides }) => {
	const { push } = useRouter()

	return (
		<AwesomeSlider animation="scaleOutAnimation">
			{slides.map((slide) => (
				<div className={styles.slider} key={slide._id}>
					<Image
						priority
						layout="fill"
						src={slide.image}
						width="100%"
						height={320}
						draggable={false}
					/>
					<div className={styles.content}>
						<h3>{slide.title}</h3>
					</div>
					<div className={styles.button}>
						<Button onClick={() => push(slide.link)}>Watch</Button>
					</div>
				</div>
			))}
		</AwesomeSlider>
	)
}
export default Slider
