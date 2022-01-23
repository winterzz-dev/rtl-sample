import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Search from './Search'

const onChange = jest.fn()

describe('Search component', () => {
	it('should render Search component', function () {
		render(
			<Search value={''} onChange={onChange}>Find:</Search>
		)
		expect(screen.getByText(/find/i)).toBeInTheDocument()
	})

	it('should render without children', function () {
		render(
			<Search value={''} onChange={onChange}/>
		)
		expect(screen.getByText(/search/i)).toBeInTheDocument()
	})

	it('should onChange works', function () {
		render(
			<Search value={''} onChange={onChange}>Find:</Search>
		)
		userEvent.type(screen.getByRole('textbox'), 'React')
		expect(onChange).toHaveBeenCalledTimes(5)
	})

	it('should dynamic styles work', function () {
		render(<Search value={'abc'} onChange={onChange}/>)
		expect(screen.getByRole('textbox')).toHaveClass('input')
		expect(screen.getByRole('textbox')).toHaveClass('filled')
		expect(screen.getByText('Search')).toHaveClass('label')
	})

	it('should match snapshot', function () {
		const view = render(<Search value={''} onChange={onChange}/>)
		expect(view).toMatchSnapshot()
	})
})