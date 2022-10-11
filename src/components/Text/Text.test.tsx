import * as React from 'react';
import { Text } from './Text';
import { render, screen } from '@testing-library/react';

describe('Text', () => {
	it('renders Text properly', () => {
		render(<Text children="Test" />);
		const textElem = screen.getByText(/test/i);
		expect(textElem).toBeInTheDocument();
	});

	it('renders bold Text with custom font size, color, etc', () => {
		render(
			<Text weight="bold" fontSize="3rem" color="#d5f027">
				Individual Text
			</Text>
		);
		const textElem = screen.getByText(/individual text/i);
		expect(textElem).toHaveStyle({
			fontWeight: '700',
			fontSize: '3rem',
			color: '#d5f027',
		});
	});
});
