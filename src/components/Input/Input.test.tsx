import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
	it('renders primary input correctly', () => {
		render(<Input type="text" variant="primary" name="primary" id="primary" />);
		const inputElem = screen.getByTestId('input-test');
		expect(inputElem).toBeInTheDocument();
	});

	it('renders secondary input with password type correctly', () => {
		render(
			<Input
				type="password"
				variant="secondary"
				name="secondary"
				id="secondary"
			/>
		);
		const inputElem = screen.getByTestId('input-test');
		expect(inputElem).toBeInTheDocument();
	});

	it('renders search input correctly', () => {
		render(<Input type="search" variant="search" name="search" id="search" />);
		const inputElem = screen.getByTestId('input-test');
		expect(inputElem).toBeInTheDocument();
	});

	it('renders input with custom placeholder', () => {
		render(
			<Input
				type="text"
				variant="primary"
				name="test"
				id="test"
				placeholder="new placeholder"
			/>
		);
		const inputElem = screen.getByPlaceholderText(/new placeholder/i);
		expect(inputElem).toBeInTheDocument();
	});

	it('renders input with width correctly', () => {
		render(
			<Input
				type="text"
				variant="primary"
				width="100%"
				id="wdth"
				name="wdth"
				placeholder="with width"
			/>
		);
		const inputElem = screen.getByPlaceholderText(/with width/i);
		expect(inputElem).toHaveStyle({ width: '100%' });
	});

	it('changes input value when changed', () => {
		render(
			<Input
				type="text"
				variant="primary"
				width="100%"
				id="wdth"
				name="wdth"
				placeholder="with width"
			/>
		);
		const inputElem = screen.getByPlaceholderText(/with width/i);
		fireEvent.change(inputElem, { target: { value: 'test' } });
		expect(inputElem).toHaveDisplayValue(/test/i);
	});

	it('renders InputWrapper correctly', () => {
		render(
			<Input
				position="left"
				htmlFor="Test"
				id="testinput"
				name="testinput"
				variant="primary"
				type="text"
				placeholder="testing"
			/>
		);
		const wrapElem = screen.getByPlaceholderText(/testing/i);
		expect(wrapElem).toBeInTheDocument();
	});
});
