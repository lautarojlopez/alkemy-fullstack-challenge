import React from 'react'

const OperationForm = () => {

	return(
		<form className="p-5 pb-10 flex flex-col text-cyan-800 bg-white shadow rounded w-full">

			<h2 className="text-cyan-800 text-center font-bold text-2xl py-2"><i className="fa-solid fa-money-check-dollar"></i> Realizar Operación</h2>

			<label htmlFor="concept">Concepto</label>
			<input type="text" name="concept" id="concept" placeholder="Descripción de la operación"/>

			<label htmlFor="amount">Monto</label>
			<input type="number" min="0" name="amount" id="amount" placeholder="$"/>

			<label htmlFor="date">Fecha</label>
			<input type="date" min="0" name="date" id="date"/>

			<label htmlFor="category">Categoría</label>
			<select name="category" id="category">
				<option value="" defaultValue hidden>--Seleccionar--</option>
				<option value="food">Comida</option>
				<option value="clothes">Ropa</option>
			</select>

			<label htmlFor="type">Tipo</label>
			<select name="type" id="type">
				<option value="" defaultValue hidden>--Seleccionar--</option>
				<option value="income">Ingreso</option>
				<option value="outcome">Egreso</option>
			</select>

			<button type="submit" className="btn mt-3"><i className="fa-solid fa-dollar-sign"></i> Enviar</button>
		</form>
	)

}

export default OperationForm
