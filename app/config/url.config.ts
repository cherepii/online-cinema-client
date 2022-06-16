export const getMovieUrl = (slug: string) => `/movies/${slug}`
export const getActorUrl = (slug: string) => `/actors/${slug}`
export const getGenreUrl = (slug: string) => `/genres/${slug}`

export const getAdminUrl = (url: string) => `/manage/${url}`
export const getHomeUrl = () => getAdminUrl('').slice(0, -1)
