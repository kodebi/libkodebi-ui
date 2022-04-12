import { Textarea } from './Textarea';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Textarea', () => {
	it('renders Textarea properly', () => {
		render(<Textarea id="testarea" name="testarea" placeholder="issatest" />);
		const txtareaElem = screen.getByPlaceholderText(/issatest/i);
		expect(txtareaElem).toBeInTheDocument();
	});

	it('renders a textarea with 7 rows, 8 cols', () => {
		render(
			<Textarea
				id="testarea"
				name="testarea"
				placeholder="inditest"
				rows={7}
				cols={8}
			/>
		);
		const txtareaElem = screen.getByPlaceholderText(/inditest/i);
		expect(txtareaElem).toHaveAttribute('rows', '7');
		expect(txtareaElem).toHaveAttribute('cols', '8');
	});

	it('changes textarea value when changed', () => {
		render(<Textarea id="testarea" name="testarea" placeholder="onchange" />);
		const txtareaElem = screen.getByPlaceholderText(/onchange/i);
		fireEvent.change(txtareaElem, { target: { value: 'test' } });
		expect(txtareaElem).toHaveDisplayValue(/test/i);
	});
});
