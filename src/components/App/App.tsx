import React, { useEffect, useState } from 'react'
import './App.css'
import List from '../List'
import Search from '../Search'

const data = ['html', 'css', 'js']

function App() {
	const [search, setSearch] = useState<string>('')
	const [items, setItems] = useState<string[]>(data)

	useEffect(() => {
		setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())))
	}, [search])

	return (
		<div className="App">
			<div className="App-header">
				<Search value={search} onChange={(e) => setSearch(e.target.value)}>
					Find course:
				</Search>
				<List items={items} />
			</div>
		</div>
	)
}

export default App
