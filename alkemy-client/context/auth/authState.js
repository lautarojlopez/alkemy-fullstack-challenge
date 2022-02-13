import React, {useReducer} from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import types from '../../types'
import axiosClient from '../../config/axios'
import Swal from 'sweetalert2'

const AuthState = ({children}) => {

	//Initial state values
	const initialState = {
		token: null,
		user: null,
		msg: null
	}

	//Reducer
	const [state, dispatch] = useReducer(authReducer, initialState)

	//Create user
	const createUser = async (data) => {
		try {
			//Send request
			const response = await axiosClient.post('/api/users', data)
			//Clear any possible error message
			dispatch({
				type: types.CLEAR_MESSAGE
			})
			//Show sweet alert modal with success message
			Swal.fire({
				icon: 'success',
				title: response.data.msg
			}).then((result) => {
				//Log in user
			})
		} catch (e) {
			//Set msg value with error message
			dispatch({
				type: types.USER_REGISTER_ERROR,
				payload: e.response.data.msg
			})
		}
	}

	return(
		<authContext.Provider
			value={{
				token: state.token,
				user: state.user,
				msg: state.msg,
				createUser
			}}
		>
			{children}
		</authContext.Provider>
	)

}

export default AuthState
