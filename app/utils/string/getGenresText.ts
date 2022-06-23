export const getGenresText = (idx: number, value: string, length: number) => {
	return idx + 1 === length ? value : value + ', '
}

interface IGenresArr {
	name: string
}

export const getGenresList = (array: IGenresArr[]) => {
	return array.map((g) => g.name).join(', ')
}
