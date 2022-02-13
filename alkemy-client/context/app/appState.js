import React, {useReducer} from 'react'
import appContext from './appContext'
import appReducer from './appReducer'
import types from '../../types'
import axiosClient from '../../config/axios'
import Swal from 'sweetalert2'

const AppState = ({children}) => {

	//Initial state values
	const initialState = {
		msg: null,
		loading: null
	}

	//Reducer
	const [state, dispatch] = useReducer(appReducer, initialState)

	//Create operation
	const createOperation = async (data) => {
		try {
			//Start loading
			dispatch({
				type: types.LOADING_APP,
				payload: true
			})
			console.log(state);
			//Send request
			const response = await axiosClient.post('/api/operations', data)
			Swal.fire({
				icon: 'success',
				title: response.data.msg
			})
			//Stop loading
			dispatch({
				type: types.LOADING_APP,
				payload: false
			})
			console.log(state);
		} catch (e) {
			console.log(e)
			//Stop loading
			dispatch({
				type: types.LOADING_APP,
				payload: false
			})
			Swal.fire({
				icon: 'error',
				title: e.response.data.msg,
				text: 'Intentalo nuevamente'
			})
		}
	}

	return(
		<appContext.Provider
			value={{
				msg: state.msg,
				loading: state.loading,
				createOperation
			}}
		>
			{children}
		</appContext.Provider>
	)

}

export default AppState