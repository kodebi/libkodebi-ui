import { Select } from './Select';
import { render, screen, fireEvent } from '@testing-library/react';

const options = [
	{
		key: 1,
		title: 'test1',
	},
	{
		key: 2,
		title: 'test2',
	},
];

describe('Select', () => {
	it('renders default dropdown with options', () => {
		render(
			<Select variant="default" options={options}>
				{options}
			</Select>
		);
		const dropdownElem = screen.getByTestId(/select-test/i);
		expect(dropdownElem).toBeInTheDocument();
	});

	it('renders filter dropdown with id, name, and options', () => {
		render(
			<Select variant="filter" id="some-id" name="some-name" options={options}>
				{options}
			</Select>
		);
		const dropdownElem = screen.getByTestId(/select-test/i);
		expect(dropdownElem).toBeInTheDocument();
	});

	it('renders default dropdown with custom width', () => {
		render(
			<Select
				variant="default"
				id="some-id"
				name="some-name"
				width="100%"
				options={options}
			>
				{options}
			</Select>
		);
		const dropdownElem = screen.getByTestId(/select-test/i);
		expect(dropdownElem).toHaveStyle({ width: '100%' });
	});

	it('changes the value when clicked', () => {
		render(
			<Select
				variant="default"
				id="some-id"
				name="some-name"
				value="test1"
				options={options}
			>
				{options}
			</Select>
		);
		const dropdownElem = screen.getByTestId(/select-test/i);
		fireEvent.change(dropdownElem, { target: { value: 'test2' } });
		expect(dropdownElem).toHaveDisplayValue(/test2/i);
	});
});
