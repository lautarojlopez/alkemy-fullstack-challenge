import React, {Fragment, useEffect, useContext} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'

//Components
import Header from '../../components/Header'
import EditForm from '../../components/EditForm'

//Context
import appContext from '../../context/app/appContext'
import authContext from '../../context/auth/authContext'

const EditPage = () => {

	//Extract values from context
	const AppContext = useContext(appContext)
	const {getOperationById, to_edit_operation} = AppContext
	const AuthContext = useContext(authContext)
	const {getAuthenticatedUser, user} = AuthContext

	//Router
	const router = useRouter()

	useEffect(() => {
		//Read token from localstorage
		const token = localStorage.getItem('token')
		//If there is a token, get the authenticated user an store it in state
		if(token){
			getAuthenticatedUser(token)
		}else{
			router.push('/login')
		}
		//Wait for the router to load
		if(router.isReady){
			//Get query id
			const id = router.query.id
			//Get operation to edit
			getOperationById(id)
		}
	}, [router.isReady])

	return(
		<Fragment>
			<Head>
				{/* Fontawesome */}
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.0.0/css/all.css" integrity="sha384-3B6NwesSXE7YJlcLI9RpRqGf2p/EgVH8BgoKTaUrmKNDkHPStTQ3EyoYjCGXaOTS" crossOrigin="anonymous"/>
				{/* Font */}
				<link href="https://fonts.cdnfonts.com/css/glacial-indifference-2" rel="stylesheet"/>
				<title>Inicio</title>
			</Head>
			<Header/>
			<main className="min-h-screen py-5 bg-cyan-800 text-white">
				<div className="flex flex-col justify-center m-auto w-11/12 md:w-8/12 lg:w-6/12">
					{to_edit_operation ? <EditForm operation={to_edit_operation}/> : null}
				</div>
			</main>
		</Fragment>
	)

}

export default EditPage
