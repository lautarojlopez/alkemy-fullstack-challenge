import types from '../../types'

export default (state, action) => {
	switch (action.type) {
		case types.LOADING_APP:
			return{
				...state,
				loading: action.payload
			}
		default:
			return state
	}
}
