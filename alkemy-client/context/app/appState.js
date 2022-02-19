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
		loading: null,
		operations: null,
		to_edit_operation: null
	}

	//Reducer
	const [state, dispatch] = useReducer(appReducer, initialState)

	//Router
	const router = useRouter()

	//Create operation
	const createOperation = async (data) => {
		try {
			//Start loading
			dispatch({
				type: types.LOADING_APP,
				payload: true
			})
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

	//Get user's operations
	const getOperations = async () => {
		try {
			const response = await axiosClient.get('/api/operations')
			dispatch({
				type: types.GET_OPERATIONS,
				payload: response.data
			})
		} catch (e) {
				console.log(e)
		}
	}

	//Delete operations
	const deleteOperation = async (id) => {
		try {
			Swal.fire({
					title: '¿Estás seguro?',
					text: "Una vez eliminada esta operación no podrás recuperarla",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Eliminar',
					cancelButtonText: 'Cancelar'
				}).then(async (result) => {
					if (result.isConfirmed) {
						const response = await axiosClient.delete(`/api/operations/${id}`)
						Swal.fire({
							icon: 'success',
							title: response.data.msg
						})
					}
				})
		} catch (e) {
			console.log(e);
			Swal.fire({
				icon: 'error',
				title: response.data.msg
			})
		}
	}

	//Get operation by id
	const getOperationById = async (id) => {
		try {
			const response = await axiosClient.get(`/api/operations/${id}`)
			dispatch({
				type: types.GET_OPERATION_BY_ID,
				payload: response.data.operation
			})
		} catch (e) {
			console.log(e)
		}
	}

	//Edit operation
	const editOperation = async (id ,data) => {
		try {
			dispatch({
				type: types.LOADING_APP,
				payload: true
			})
			const response = await axiosClient.patch(`/api/operations/${id}`, data)
			dispatch({
				type: types.LOADING_APP,
				payload: false
			})
			Swal.fire({
				icon: 'success',
				title: response.data.msg
			}).then((result) => {
				if(result.isConfirmed){
					router.push('/')
				}
			})
		} catch (e) {
			console.log(e)
			dispatch({
				type: types.LOADING_APP,
				payload: false
			})
		}
	}

	return(
		<appContext.Provider
			value={{
				msg: state.msg,
				loading: state.loading,
				operations: state.operations,
				to_edit_operation: state.to_edit_operation,
				createOperation,
				getOperations,
				deleteOperation,
				getOperationById,
				editOperation
			}}
		>
			{children}
		</appContext.Provider>
	)

}

export default AppState
