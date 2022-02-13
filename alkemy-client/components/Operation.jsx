import React, {useState} from 'react'

const Operation = () => {

	//State to show or hide options menu
	const [showMenu, setShowMenu] = useState()

	return(
		<div className="relative text-green-900 p-3 border-4 border-green-800 bg-green-200">
			<i onClick={() => setShowMenu(!showMenu)} className="cursor-pointer absolute top-1 right-3 text-2xl fa-solid fa-ellipsis"></i>
			<div className={`${showMenu ? 'visible opacity-100' : 'invisible opacity-0'} transition-all ease-linear duration-100 absolute top-8 right-2 text-center font-bold bg-white border-2 border-neutral-500 w-3/12`}>
				<p className="text-neutral-600 w-full h-full cursor-pointer hover:bg-gray-200">Eliminar <i className="py-2 fa-solid fa-trash-can text-red-500"></i></p>
				<p className="text-neutral-600 w-full h-full cursor-pointer hover:bg-gray-200">Editar <i className="py-2 fa-solid fa-pen-to-square text-amber-500"></i></p>
			</div>
			<p><span className="font-bold">Tipo:</span></p>
			<p><span className="font-bold">Categoria:</span></p>
			<p><span className="font-bold">Concepto:</span></p>
			<p><span className="font-bold">Monto:</span></p>
			<p><span className="font-bold">Fecha:</span></p>
		</div>
	)

}

export default Operation
