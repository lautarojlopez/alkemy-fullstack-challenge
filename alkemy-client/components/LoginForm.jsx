import React, {useContext, useEffect} from 'react'
import Link from 'next/link'

//Components
import Alert from './Alert'
import Spinner from './Spinner'

//Dependencies
import {useFormik} from 'formik'
import * as yup from 'yup'

//Context
import authContext from '../context/auth/authContext'

const LoginForm = () => {

	//Exctrat state from context
	const AuthContext = useContext(authContext)
	const {logIn, clearMsg, msg, loading} = AuthContext

	useEffect(() => {
		//Clear any possible error message
		clearMsg()
	}, [])

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
			logIn(values)
		}
	})

	return(
		<form onSubmit={form.handleSubmit} className="p-5 flex flex-col text-cyan-800 bg-white shadow-lg rounded w-full">

			<h2 className="text-cyan-800 text-center font-bold text-2xl py-2"><i className="fa-solid fa-user"></i> Iniciar Sesión</h2>

			{msg ? <Alert msg={msg}/> : null}

			<label htmlFor="email">E-mail</label>
			<input type="email" name="email" id="email" value={form.values.email} onChange={form.handleChange} placeholder="Tu email"/>
			{form.errors.email && form.touched.email ? <Alert msg={form.errors.email}/> : null}

			<label htmlFor="password">Contraseña</label>
			<input type="password" name="password" id="password" value={form.values.password} onChange={form.handleChange} placeholder="Tu contraseña"/>
			{form.errors.password && form.touched.password ? <Alert msg={form.errors.password}/> : null}

			{
				loading ? (<div className="flex justify-center w-full"><Spinner/></div>)
				: (<button type="submit" className="btn mt-3"><i className="fa-solid fa-right-to-bracket"></i> Ingresar</button>)
			}

			<Link href="/register"><a className="text-cyan-800 hover:text-cyan-600 transition-all ease-linear duration-200 font-bold text-center pt-3">¿Aún no tienes cuenta? Crea una ahora</a></Link>

		</form>
	)

}

export default LoginForm
