import React, { ChangeEventHandler } from 'react'
import cn from 'classnames'

import classes from './Search.module.css'

interface ISearch {
	value: string
	onChange: ChangeEventHandler<HTMLInputElement>
	children?: React.ReactNode
	placeholder?: string
}

const Search: React.FC<ISearch> = ({value, onChange, children = 'Search', placeholder = 'Search...'}) => {
	const inputClass = cn({
		[classes.input]: true,
		[classes.filled]: value.length
	})

	return (
		<label className={classes.label}>
			{children}
			<input className={inputClass} type={'text'} value={value} onChange={onChange} placeholder={placeholder}/>
		</label>
	)
}

export default Search