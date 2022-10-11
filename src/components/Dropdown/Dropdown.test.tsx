import * as React from 'react';
import { Dropdown } from './Dropdown';
import { render, screen, fireEvent } from '@testing-library/react';

const options = [
	{
		key: 1,
		value: 'test1',
	},
	{
		key: 2,
		value: 'test2',
	},
];

describe('Dropdown', () => {
	it('renders default dropdown with options', () => {
		render(<Dropdown variant="default" options={options} />);
		const dropdownElem = screen.getByTestId(/select-test/i);
		expect(dropdownElem).toBeInTheDocument();
	});

	it('renders filter dropdown with id, name, and options', () => {
		render(
			<Dropdown
				variant="filter"
				id="some-id"
				name="some-name"
				options={options}
			/>
		);
		const dropdownElem = screen.getByTestId(/select-test/i);
		expect(dropdownElem).toBeInTheDocument();
	});

	it('renders default dropdown with custom width', () => {
		render(
			<Dropdown
				variant="default"
				id="some-id"
				name="some-name"
				width="100%"
				options={options}
			/>
		);
		const dropdownElem = screen.getByTestId(/select-test/i);
		expect(dropdownElem).toHaveStyle({ width: '100%' });
	});

	it('changes the value when clicked', () => {
		render(
			<Dropdown
				variant="default"
				id="some-id"
				name="some-name"
				value="test1"
				options={options}
			/>
		);
		const dropdownElem = screen.getByTestId(/select-test/i);
		fireEvent.change(dropdownElem, { target: { value: 'test2' } });
		expect(dropdownElem).toHaveDisplayValue(/test2/i);
	});

	it('displays the label', () => {
		render(
			<Dropdown
				label
				position="above"
				options={options}
				value="test2"
				id="label-id"
				name="Test"
			/>
		);
		const wrappingElem = screen.getByTestId(/label-testid/i);
		expect(wrappingElem).toBeInTheDocument();
	});
});
