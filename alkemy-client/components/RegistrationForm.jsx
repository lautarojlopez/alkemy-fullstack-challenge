import React from 'react'
import Link from 'next/link'

//Components
import Alert from './Alert'

//Dependencies
import {useFormik} from 'formik'
import * as yup from 'yup'

const RegistrationForm = () => {

	//Formik form
	const form = useFormik({
		initialValues:{
			name: '',
			email: '',
			password: '',
			validate_password: ''
		},
		validationSchema: yup.object({
			name: yup.string().required('Escribe tu nombre'),
			email: yup.string().email('Escribe un e-mail válido').required('Escribe tu e-mail'),
			password: yup.string().required('Escribe tu contraseña').min(6, 'Tu contraseña debe contener al menos 6 caracteres'),
			validate_password: yup.string().required('Reescribe tu contraseña')
		}),
		onSubmit: (values) => {
			console.log(values)
		}
	})

	return(
		<form onSubmit={form.handleSubmit} className="p-5 flex flex-col text-cyan-800 bg-white shadow-lg rounded w-full">

			<h2 className="text-cyan-800 text-center font-bold text-2xl py-2"><i className="fa-solid fa-user-plus"></i> Crear Cuenta</h2>

			<label htmlFor="name">Nombre</label>
			<input type="text" name="name" id="name" value={form.values.name} onChange={form.handleChange} placeholder="Tu nombre"/>
			{form.errors.name && form.touched.name ? <Alert msg={form.errors.name}/> : null}

			<label htmlFor="email">E-mail</label>
			<input type="text" name="email" id="email" value={form.values.email} onChange={form.handleChange} placeholder="Tu email"/>
			{form.errors.email && form.touched.email ? <Alert msg={form.errors.email}/> : null}

			<label htmlFor="password">Contraseña</label>
			<input type="password" name="password" id="password" value={form.values.password} onChange={form.handleChange} placeholder="Tu contraseña"/>
			{form.errors.password && form.touched.password ? <Alert msg={form.errors.password}/> : null}

			<label htmlFor="validate_password">Verifica tu contraseña</label>
			<input type="password" name="validate_password" id="validate_password" value={form.values.validate_password} onChange={form.handleChange} placeholder="Repite tu contraseña"/>
			{form.errors.validate_password && form.touched.validate_password ? <Alert msg={form.errors.validate_password}/> : null}

			<button type="submit" className="btn mt-3"><i className="fa-solid fa-right-to-bracket"></i> Registrarme</button>

			<Link href="/login"><a className="text-cyan-800 hover:text-cyan-600 transition-all ease-linear duration-200 font-bold text-center pt-3">¿Ya tienes una cuenta? Inicia Sesión</a></Link>

		</form>
	)

}

export default RegistrationForm
