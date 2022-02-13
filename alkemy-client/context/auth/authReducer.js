import types from '../../types'

export default (state, action) => {
	switch (action.type) {
		case types.USER_REGISTER_ERROR:
			return{
				...state,
				msg: action.payload
			}
		case types.CLEAR_MESSAGE:
			return{
				...state,
				msg: null
			}
		default:
			return state
	}
}
