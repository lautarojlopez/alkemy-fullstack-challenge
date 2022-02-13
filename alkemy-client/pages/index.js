import React, {useEffect, useContext, Fragment} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'

//Components
import OperationForm from '../components/OperationForm'
import OperationsList from '../components/OperationsList'

//Context
import authContext from '../context/auth/authContext'

export default function Home() {

	//Extract values from context
	const AuthContext = useContext(authContext)
	const {getAuthenticatedUser} = AuthContext

	//Router
	const router = useRouter()

	useEffect(() => {
		//Read token from localstorage
		const token = localStorage.getItem('token')
		//If there is a token, get the authenticated user an store it in state
		if(token){
			getAuthenticatedUser(token)
		}
		//If not, redirect to login page
		else{
			router.push('/login')
		}
	}, [])

	return (
		<Fragment>
			<Head>
				{/* Fontawesome */}
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.0.0/css/all.css" integrity="sha384-3B6NwesSXE7YJlcLI9RpRqGf2p/EgVH8BgoKTaUrmKNDkHPStTQ3EyoYjCGXaOTS" crossOrigin="anonymous"/>
				{/* Font */}
				<link href="https://fonts.cdnfonts.com/css/glacial-indifference-2" rel="stylesheet"/>
				<title>Inicio</title>
			</Head>
			<main className="min-h-screen pb-5 bg-cyan-800 text-white">
				<h1 className="py-5 font-bold text-center text-4xl"><i className="fa-solid fa-money-bill-1"></i> Administrador de Presupuesto <i className="fa-solid fa-money-bill-1"></i></h1>
				<div className="flex flex-col justify-center m-auto w-11/12 md:w-8/12 lg:w-6/12">
					<div className="w-full">
						<OperationForm/>
					</div>
					<div className="w-full mt-3">
						<OperationsList/>
					</div>
				</div>
			</main>
		</Fragment>
  )
}
