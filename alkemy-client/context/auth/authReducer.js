import types from '../../types'

export default (state, action) => {
	switch (action.type) {
		case types.USER_REGISTER_ERROR:
			return{
				...state,
				msg: action.payload
			}
		case types.LOGIN_SUCCESS:
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
		default:
			return state
	}
}
