import { IconName } from './icon.types'

export interface IGenre {
	_id: string
	slug: string
	name: string
	description: string
	icon: IconName
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	_id: string
	name: string
	slug: string
	countMovies: number
	avatar: string
}

export interface IMovie {
	_id: string
	title: string
	slug: string
	description: string
	poster: string
	bigPoster: string
	rating?: number
	countOpened?: number
	parameters?: IParameters
	videoUrl: string[]
	genres: IGenre[]
	actors: IActor[]
}
