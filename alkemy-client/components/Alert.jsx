import React from 'react'

const Alert = ({msg}) => {

	return(
		<p className="p-2 my-2 bg-red-200 text-red-600 font-bold text-center text-xl"><i className="fa-solid fa-circle-exclamation"></i> {msg}</p>
	)

}

export default Alert
