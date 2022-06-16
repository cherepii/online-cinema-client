import { toastr } from 'react-redux-toastr'

import { errorCatch } from './../api/api.helpers'

export const toastError = (error: any, title = 'Error') => {
	const message = errorCatch(error)
	toastr.error(title, message)
	throw error
}
