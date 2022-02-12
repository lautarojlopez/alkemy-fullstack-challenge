import React, {Fragment} from 'react'
import Head from 'next/head'

//Components
import LoginForm from '../components/LoginForm'

const Login = () => {

	return(
		<Fragment>
			<Head>
				{/* Fontawesome */}
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.0.0/css/all.css" integrity="sha384-3B6NwesSXE7YJlcLI9RpRqGf2p/EgVH8BgoKTaUrmKNDkHPStTQ3EyoYjCGXaOTS" crossOrigin="anonymous"/>
				{/* Font */}
				<link href="https://fonts.cdnfonts.com/css/glacial-indifference-2" rel="stylesheet"/>
			</Head>
			<div className="bg-cyan-800">
				<div className="min-h-screen flex flex-col justify-center items-center h-full">
					<div className="w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
						<LoginForm/>
					</div>
				</div>
			</div>
		</Fragment>
	)

}

export default Login
