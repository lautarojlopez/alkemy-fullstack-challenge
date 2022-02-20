import React, {useContext, useState} from 'react'
import Link from 'next/link'

//Context
import authContext from '../context/auth/authContext'

const Header = () => {

	//Extract values from context
	const AuthContext = useContext(authContext)
	const {logOut ,user} = AuthContext

	//State to show or disable menu in mobile screens
	const [showMenu, setShowMenu] = useState(false)

	return(
		<header className="flex flex-col md:flex-row justify-between items-center font-bold text-xl bg-cyan-600 shadow py-5 md:py-3 px-5 text-white">
			<div className="flex justify-between items-center w-full md:w-auto">
				<Link href='/'><a className="">Administrador de Presupuesto</a></Link>
				<i onClick={() => setShowMenu(!showMenu)} className="fa-solid fa-bars text-3xl block md:hidden cursor-pointer"></i>
			</div>
			<div className="flex items-center hidden md:block">
				<p className="mr-5 inline-block">Hola, {user ? user.name : null}</p>
				<button onClick={logOut} type="button" className="btn-white inline-block"><i className="fa-solid fa-right-from-bracket mr-1"></i> Cerrar Sesión</button>
			</div>
			<div className={`flex flex-col mt-5 items-center ${showMenu ? 'block' : 'hidden'}`}>
				<button onClick={logOut} type="button" className="btn-white inline-block flex items-center"><i className="fa-solid fa-right-from-bracket mr-1"></i> Cerrar Sesión</button>
			</div>
		</header>
	)

}

export default Header
