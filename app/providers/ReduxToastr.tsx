import ReduxToastrLib from 'react-redux-toastr'

const ReduxToastr = () => {
	return (
		<ReduxToastrLib
			timeOut={2200}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
			closeOnToastrClick
			progressBar
			newestOnTop
		/>
	)
}
export default ReduxToastr
