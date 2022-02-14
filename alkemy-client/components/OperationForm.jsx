import React, {useContext} from 'react'

//Components
import Alert from './Alert'
import Spinner from './Spinner'

//Dependencies
import {useFormik} from 'formik'
import * as yup from 'yup'

//Context
import appContext from '../context/app/appContext'

const OperationForm = () => {

	//Extract values from context
	const AppContext = useContext(appContext)
	const {createOperation, loading} = AppContext

	//Formik form
	const form = useFormik({
		initialValues:{
			concept: '',
			amount: '',
			date: '',
			category: '',
			type: ''
		},
		validationSchema: yup.object({
			concept: yup.string().required('Escribe una descripción'),
			amount: yup.number().required('Agrega un monto'),
			date: yup.date().required('Selecciona una fecha'),
			category: yup.string().required('Selecciona una categoría'),
			type: yup.string().required('Selecciona el tipo de operación')
		}),
		onSubmit: (values) => {
			createOperation(values)
			form.resetForm()
		}
	})

	return(
		<form onSubmit={form.handleSubmit} className="p-5 pb-10 flex flex-col text-cyan-800 bg-white shadow rounded w-full">

			<h2 className="text-cyan-800 text-center font-bold text-2xl py-2"><i className="fa-solid fa-money-check-dollar"></i> Realizar Operación</h2>

			<label htmlFor="concept">Concepto</label>
			<input type="text" name="concept" id="concept" value={form.values.concept} onChange={form.handleChange} placeholder="Descripción de la operación"/>
			{form.errors.concept && form.touched.concept ? <Alert msg={form.errors.concept}/> : null}

			<label htmlFor="amount">Monto</label>
			<input type="number" min="0" step="any" name="amount" id="amount" value={form.values.amount} onChange={form.handleChange} placeholder="$"/>
			{form.errors.amount && form.touched.amount ? <Alert msg={form.errors.amount}/> : null}

			<label htmlFor="date">Fecha</label>
			<input type="date" min="0" name="date" id="date" value={form.values.date} onChange={form.handleChange}/>
			{form.errors.date && form.touched.date ? <Alert msg={form.errors.date}/> : null}

			<label htmlFor="category">Categoría</label>
			<select name="category" id="category" value={form.values.category} onChange={form.handleChange}>
				<option value="" defaultValue hidden>--Seleccionar--</option>
				<option value="Comida">Comida</option>
				<option value="Ropa">Ropa</option>
			</select>
			{form.errors.category && form.touched.category ? <Alert msg={form.errors.category}/> : null}

			<label htmlFor="type">Tipo</label>
			<select name="type" id="type" value={form.values.type} onChange={form.handleChange}>
				<option value="" defaultValue hidden>--Seleccionar--</option>
				<option value="Ingreso">Ingreso</option>
				<option value="Egreso">Egreso</option>
			</select>
			{form.errors.type && form.touched.type ? <Alert msg={form.errors.type}/> : null}

			{
				loading ? (<div className="flex justify-center w-full"><Spinner/></div>)
				: (<button type="submit" className="btn mt-3"><i className="fa-solid fa-dollar-sign"></i> Enviar</button>)
			}

		</form>
	)

}

export default OperationForm
