import { InputWrapper } from './InputWrapper';
import { render, screen } from '@testing-library/react';

describe('InputWrapper', () => {
	it('renders InputWrapper correctly', () => {
		render(
			<InputWrapper
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
