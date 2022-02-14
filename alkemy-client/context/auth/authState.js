import React, {useReducer} from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import types from '../../types'
import axiosClient from '../../config/axios'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'
import saveTokenHeader from '../../config/saveTokenHeader'

const AuthState = ({children}) => {

	//Initial state values
	const initialState = {
		token: null,
		user: null,
		msg: null,
		loading: false
	}

	//Reducer
	const [state, dispatch] = useReducer(authReducer, initialState)

	//Router
	const router = useRouter()

	//Create user
	const createUser = async (data) => {
		try {
			//Start loading
			dispatch({
				type: types.LOADING,
				payload: true
			})
			//Send request
			const response = await axiosClient.post('/api/users', data)
			//Clear any possible error message
			dispatch({
				type: types.CLEAR_MESSAGE
			})
			//Stop loading
			dispatch({
				type: types.LOADING,
				payload: false
			})
			//Show sweet alert modal with success message
			Swal.fire({
				icon: 'success',
				title: response.data.msg
			}).then((result) => {
				//Log in user
				if(result.isConfirmed){
					logIn(data)
				}
			})
		} catch (e) {
			//Stop loading
			dispatch({
				type: types.LOADING,
				payload: false
			})
			//Set msg value with error message
			dispatch({
				type: types.USER_REGISTER_ERROR,
				payload: e.response.data.msg
			})
		}
	}

	//Log in user
	const logIn = async (data) => {
		try {
			//Start loading
			dispatch({
				type: types.LOADING,
				payload: true
			})
			//Send request
			const response = await axiosClient.post('/api/auth', data)
			//Set token value
			dispatch({
				type: types.LOGIN_SUCCESS,
				payload: response.data.token
			})
			//Stop loading
			dispatch({
				type: types.LOADING,
				payload: false
			})
			//Redirect to index
			router.push('/')
		} catch (e) {
			console.log(e)
			//Stop loading
			dispatch({
				type: types.LOADING,
				payload: false
			})
			//Set msg value with error message
			dispatch({
				type: types.LOGIN_ERROR,
				payload: e.response.data.msg
			})
		}
	}

	//Clear any possible error message
	const clearMsg = () => {
		dispatch({
			type: types.CLEAR_MESSAGE
		})
	}

	//Get authenticated user and store it in state
	const getAuthenticatedUser = async (token) => {
		//Save token in headers
		saveTokenHeader(token)

		try {
			//Send request
			const response = await axiosClient.get('/api/auth')
			//If there is an user athenticated, store it in state
			if(response.data.user){
				dispatch({
					type: types.AUTHENTICATE_USER,
					payload: response.data.user
				})
			}
		} catch (e) {
			console.log(e)
		}

	}

	//LogOut
	const logOut = () => {
		dispatch({
			type: types.LOGOUT
		})
		router.push('/login')
	}

	return(
		<authContext.Provider
			value={{
				token: state.token,
				user: state.user,
				msg: state.msg,
				loading: state.loading,
				createUser,
				logIn,
				logOut,
				clearMsg,
				getAuthenticatedUser
			}}
		>
			{children}
		</authContext.Provider>
	)

}

export default AuthState
