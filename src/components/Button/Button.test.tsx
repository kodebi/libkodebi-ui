import * as React from 'react';
import { Button } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
	it('renders signin button correctly', () => {
		render(<Button type="button" label="Signin" />);
		const btnElement = screen.getByRole('button', { name: /signin/i });
		expect(btnElement).toBeInTheDocument();
	});

	it('renders filter button correctly', () => {
		render(<Button variant="filter" label="Filter" />);
		const btnElement = screen.getByRole('button', { name: /filter/i });
		expect(btnElement).toBeInTheDocument();
	});

	it('renders button with width correctly', () => {
		render(
			<Button type="submit" variant="signin" width="200px" label="with width" />
		);
		const btnElement = screen.getByRole('button', { name: /with width/i });
		expect(btnElement).toHaveStyle({ width: '200px' });
	});

	it('performs onClick function when clicked', async () => {
		const handleClick = jest.fn();
		render(<Button variant="action" label="Click Me" onClick={handleClick} />);
		fireEvent.click(screen.getByRole('button', { name: /click me/i }));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('has a class attached', () => {
		render(<Button variant="action" className="btn-style" label="class" />);
		const btnElement = screen.getByRole('button', { name: /class/i });
		expect(btnElement).toHaveClass('btn-style');
	});
});
