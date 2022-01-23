import { render, screen } from '@testing-library/react'

import List from './List'

const data = ['html', 'css', 'js']

describe('List component', () => {
	it('should renders', function () {
		render(<List items={data}/>)
		expect(screen.getByRole('list')).toBeInTheDocument()
		expect(screen.getByText(/html/)).toBeInTheDocument()
	})

	it('should renders without data', function () {
		render(<List/>)
		expect(screen.queryByRole('list')).toBeNull()
	})

	it('should match snapshot with data', function () {
		const view = render(<List items={data} />)
		expect(view).toMatchSnapshot()
	})

	it('should match snapshot with empty list', function () {
		const view = render(<List />)
		expect(view).toMatchSnapshot()
	})
})