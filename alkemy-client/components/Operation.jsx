import React from 'react'

const Operation = () => {

	return(
		<div className="relative text-green-900 p-3 border-4 border-green-800 bg-green-200">
			<i className="cursor-pointer absolute top-1 right-3 text-2xl fa-solid fa-ellipsis"></i>
			<p><span className="font-bold">Tipo:</span></p>
			<p><span className="font-bold">Categoria:</span></p>
			<p><span className="font-bold">Concepto:</span></p>
			<p><span className="font-bold">Monto:</span></p>
			<p><span className="font-bold">Fecha:</span></p>
		</div>
	)

}

export default Operation
