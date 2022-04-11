import React from 'react';
import { Button } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
	it('renders primary button correctly', () => {
		render(<Button variant="primary" label="Primary" />);
		const btnElement = screen.getByRole('button', { name: /primary/i });
		expect(btnElement).toBeInTheDocument();
	});

	it('renders secondary button correctly', () => {
		render(<Button variant="secondary" label="Secondary" />);
		const btnElement = screen.getByRole('button', { name: /secondary/i });
		expect(btnElement).toBeInTheDocument();
	});

	it('renders filter button correctly', () => {
		render(<Button variant="filter" label="Filter" />);
		const btnElement = screen.getByRole('button', { name: /filter/i });
		expect(btnElement).toBeInTheDocument();
	});

	it('renders button with width correctly', () => {
		render(<Button variant="primary" width="200px" label="with width" />);
		const btnElement = screen.getByRole('button', { name: /with width/i });
		expect(btnElement).toHaveStyle({ width: '200px' });
	});

	it('performs onClick function when clicked', async () => {
		const handleClick = jest.fn();
		render(<Button variant="primary" label="Click Me" onClick={handleClick} />);
		fireEvent.click(screen.getByRole('button', { name: /click me/i }));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('has a class attached', () => {
		render(<Button variant="primary" className="btn-style" label="class" />);
		const btnElement = screen.getByRole('button', { name: /class/i });
		expect(btnElement).toHaveClass('btn-style');
	});
});
