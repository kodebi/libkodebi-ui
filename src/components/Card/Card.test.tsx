import { Card } from './Card';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
	it('renders card component correctly', () => {
		render(<Card>Test Card</Card>);
		const cardElem = screen.getByText(/test card/i);
		expect(cardElem).toBeInTheDocument();
		expect(cardElem).toHaveStyle({
			width: 'auto',
		});
	});

	it('renders card component with borders', () => {
		render(<Card withBorders>Card w borders</Card>);
		const cardElem = screen.getByText(/card w borders/i);
		expect(cardElem).toHaveStyle({
			borderRadius: '12px',
			border: '1px solid rgb(182, 182, 182)',
		});
	});
});
