import React, {useReducer} from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import types from '../../types'
import axiosClient from '../../config/axios'

const AuthState = ({children}) => {

	//Initial state values
	const initialState = {
		token: null,
		user: null,
		msg: null
	}

	//Reducer
	const [state, dispatch] = useReducer(authReducer, initialState)

	return(
		<authContext.Provider
			value={{
				token: state.token,
				user: state.user,
				msg: state.msg
			}}
		>
			{children}
		</authContext.Provider>
	)

}

export default AuthState
