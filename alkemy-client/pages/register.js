import React, {Fragment, useEffect, useContext} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

//Components
import RegistrationForm from '../components/RegistrationForm'

const Register = () => {

	//Router
	const router = useRouter()

	useEffect(() => {
		//Read token from localstorage
		const token = localStorage.getItem('token')
		//If there is a token, return to index
		if(token){
			router.push('/')
		}
	}, [])

	return(
		<Fragment>
			<Head>
				{/* Fontawesome */}
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.0.0/css/all.css" integrity="sha384-3B6NwesSXE7YJlcLI9RpRqGf2p/EgVH8BgoKTaUrmKNDkHPStTQ3EyoYjCGXaOTS" crossOrigin="anonymous"/>
				{/* Font */}
				<link href="https://fonts.cdnfonts.com/css/glacial-indifference-2" rel="stylesheet"/>
				<title>Crear Cuenta</title>
			</Head>
			<div className="bg-cyan-800">
				<div className="min-h-screen py-5 flex flex-col justify-center items-center h-full">
					<div className="w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
						<RegistrationForm/>
					</div>
				</div>
			</div>
		</Fragment>
	)

}

export default Register
