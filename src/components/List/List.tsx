import React from 'react'

interface IList {
	items?: string[]
}

const List: React.FC<IList> = ({items= []}) => {
	if(!items.length) return null

	return (
		<ul>
			{
				items.map(el => <li key={el}>{el}</li>)
			}
		</ul>
	)
}

export default List