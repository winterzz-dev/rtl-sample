import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'
import userEvent from '@testing-library/user-event'

describe('App component', () => {
	it('renders learn react link', () => {
		render(<App/>)
		expect(screen.getByRole('list')).toBeInTheDocument()
		expect(screen.getByText('Find course:')).toBeInTheDocument()
	})

	it('should typing in Searchbox works', function () {
		render(<App />)
		expect(screen.queryByDisplayValue(/React/)).toBeNull()
		userEvent.type(screen.getByRole('textbox'), 'React')
		expect(screen.getByDisplayValue(/React/)).toBeInTheDocument()
	})

	it('should search filter is working', function () {
		render(<App />)
		expect(screen.getByText(/html/)).toBeInTheDocument()
		userEvent.type(screen.getByRole('textbox'), 'html')
		expect(screen.queryByText(/js/)).toBeNull()
		expect(screen.getByText(/html/)).toBeInTheDocument()
	})
})

