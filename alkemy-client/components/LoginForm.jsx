import React from 'react'

//Components
import Alert from './Alert'

//Dependencies
import {useFormik} from 'formik'
import * as yup from 'yup'

const LoginForm = () => {

	//Formik form
	const form = useFormik({
		initialValues:{
			email: '',
			password: '',
		},
		validationSchema: yup.object({
			email: yup.string().email('Escribe un e-mail válido').required('Escribe tu e-mail'),
			password: yup.string().required('Escribe tu contraseña')
		}),
		onSubmit: (values) => {
			console.log(values)
		}
	})

	return(
		<form onSubmit={form.handleSubmit} className="p-5 pb-10 flex flex-col text-cyan-800 bg-white shadow-lg rounded w-full">

			<h2 className="text-cyan-800 text-center font-bold text-2xl py-2"><i className="fa-solid fa-user"></i> Iniciar Sesión</h2>

			<label htmlFor="email">E-mail</label>
			<input type="text" name="email" id="email" value={form.values.email} onChange={form.handleChange} placeholder="Tu email"/>
			{form.errors.email && form.touched.email ? <Alert msg={form.errors.email}/> : null}

			<label htmlFor="password">Contraseña</label>
			<input type="password" name="password" id="password" value={form.values.password} onChange={form.handleChange} placeholder="Tu contraseña"/>
			{form.errors.password && form.touched.password ? <Alert msg={form.errors.password}/> : null}

			<button type="submit" className="btn mt-3"><i className="fa-solid fa-right-to-bracket"></i> Ingresar</button>
		</form>
	)

}

export default LoginForm
