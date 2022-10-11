import * as React from 'react';
import { Box } from './Box';
import { render, screen } from '@testing-library/react';

describe('Box', () => {
	it('renders Box properly', () => {
		const { baseElement } = render(<Box />);
		const divElem = baseElement;
		expect(divElem).toBeInTheDocument();
	});

	it('renders centered Box', () => {
		render(<Box variant="center">center</Box>);
		const divElem = screen.getByText(/center/i);
		expect(divElem).toHaveStyle({
			justifyContent: 'center',
			alignItems: 'center',
		});
	});

	it('renders vertical Box with custom width, height and individual background color', () => {
		render(
			<Box
				variant="flex-col"
				width="120px"
				height="450px"
				backgroundColor="yellow"
			>
				individual
			</Box>
		);
		const divElem = screen.getByText(/individual/i);
		expect(divElem).toHaveStyle({
			flexDirection: 'column',
			width: '120px',
			height: '450px',
			backgroundColor: 'yellow',
		});
	});
});
