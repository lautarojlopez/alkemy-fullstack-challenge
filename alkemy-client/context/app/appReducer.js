import types from '../../types'

export default (state, action) => {
	switch (action.type) {
		case types.LOADING_APP:
			return{
				...state,
				loading: action.payload
			}
		case types.GET_OPERATIONS:
			return{
				...state,
				operations: action.payload
			}
		case types.GET_OPERATION_BY_ID:
			return{
				...state,
				to_edit_operation: action.payload
			}
		default:
			return state
	}
}
