export const getGenresText = (idx: number, value: string, length: number) => {
	return idx + 1 === length ? value : value + ', '
}
