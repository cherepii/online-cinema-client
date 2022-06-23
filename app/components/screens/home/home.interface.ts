export interface ISlide {
	_id: string
	image: string
	link: string
	subTitle: string
	title: string
}

export interface IHome {
	slides: ISlide[]
}
