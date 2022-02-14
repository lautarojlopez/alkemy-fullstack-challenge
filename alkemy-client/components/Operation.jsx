import React, {useState} from 'react'
//Dependecie to format date
import moment from 'moment'
import 'moment/locale/es';

const Operation = ({operation}) => {

	const {type, category, concept, amount, date} = operation

	//Format date
	moment.locale('es')
	const format_date = moment(date).format('LL')

	//State to show or hide options menu
	const [showMenu, setShowMenu] = useState()

	return(
		<div className={`relative my-2 p-3 border-2 ${type === 'Ingreso' ? 'border-green-800 bg-green-200 text-green-900' : 'border-red-800 bg-red-200 text-red-800'}`}>
			<i onClick={() => setShowMenu(!showMenu)} className="cursor-pointer absolute top-1 right-3 text-2xl fa-solid fa-ellipsis"></i>
			<div className={`${showMenu ? 'visible opacity-100' : 'invisible opacity-0'} transition-all ease-linear duration-100 absolute top-8 right-2 text-center font-bold bg-white border-2 border-neutral-500 w-6/12 sm:w-4/12 md:w-3/12`}>
				<p className="text-neutral-600 w-full h-full cursor-pointer hover:bg-gray-200">Eliminar <i className="py-2 fa-solid fa-trash-can text-red-500"></i></p>
				<p className="text-neutral-600 w-full h-full cursor-pointer hover:bg-gray-200">Editar <i className="py-2 fa-solid fa-pen-to-square text-amber-500"></i></p>
			</div>
			<p><span className="font-bold">Tipo: </span>{type}</p>
			<p><span className="font-bold">Categoria: </span>{category}</p>
			<p><span className="font-bold">Concepto: </span>{concept}</p>
			<p><span className="font-bold">Monto: </span>${amount}</p>
			<p><span className="font-bold">Fecha: </span>{format_date}</p>
		</div>
	)

}

export default Operation
