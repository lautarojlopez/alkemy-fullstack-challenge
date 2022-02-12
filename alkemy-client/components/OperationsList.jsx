import React from 'react'
import Operation from './Operation'

const OperationsList = () => {

	return(
		<div className="w-full text-cyan-800 p-5 bg-white rounded shadow">
			<h2 className="text-center font-bold text-2xl py-2"><i className="mr-1 fa-solid fa-receipt"></i> Últimas Operaciones Realizadas</h2>
			<div className="flex justify-center items-center my-2">
				<button type="button" className="btn-left">Todas</button>
				<button type="button" className="btn-middle">Ingresos</button>
				<button type="button" className="btn-right">Egresos</button>
			</div>
			<div className="flex flex-col w-full mb-2">
				<label htmlFor="category"><i className="fa-solid fa-magnifying-glass-dollar"></i> Categoría</label>
				<select name="category" id="category">
					<option value="all">Todas</option>
					<option value="food">Comida</option>
					<option value="clothes">Ropa</option>
				</select>
			</div>
			<Operation/>
			<div className="w-full p-3 mt-3 border-4 border-cyan-800 bg-cyan-200 text-cyan-800 font-bold">
				<p>Balance Actual: $</p>
			</div>
		</div>
	)

}

export default OperationsList
