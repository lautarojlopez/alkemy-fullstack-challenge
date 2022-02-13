import React, {useReducer} from 'react'
import appContext from './appContext'
import appReducer from './appReducer'
import types from '../../types'
import axiosClient from '../../config/axios'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'

const AppState = ({children}) => {

	//Initial state values
	const initialState = {
		msg: null,
		loading: false
	}

	//Reducer
	const [state, dispatch] = useReducer(appReducer, initialState)

	return(
		<appContext.Provider
			value={{
				msg: state.msg,
				loading: state.msg
			}}
		>
			{children}
		</appContext.Provider>
	)

}

export default AppState
