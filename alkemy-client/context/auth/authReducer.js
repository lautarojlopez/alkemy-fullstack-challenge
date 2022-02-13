import types from '../../types'

export default (state, action) => {
	switch (action.type) {
		case types.USER_REGISTER_ERROR:
			return{
				...state,
				msg: action.payload
			}
		case types.LOGIN_SUCCESS:
			//Save token in localstorage
			localStorage.setItem('token', action.payload)
			return{
				...state,
				token: action.payload,
				msg: null
			}
		case types.LOGIN_ERROR:
			return{
				...state,
				msg: action.payload
			}
		case types.CLEAR_MESSAGE:
			return{
				...state,
				msg: null
			}
		case types.LOADING:
			return{
				...state,
				loading: action.payload
			}
		case types.AUTHENTICATE_USER:
			return{
				...state,
				user: action.payload
			}
		case types.LOGOUT:
			//Remove token from localstorage
			localStorage.removeItem('token')
			return{
				...state,
				user: null,
				token: null
			}
		default:
			return state
	}
}
