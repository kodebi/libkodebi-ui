import { Footer } from './Footer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

const mockLinks = [
	{ to: '/', children: 'Home' },
	{ to: '/about', children: 'About' },
];

describe('Footer', () => {
	it('render the footer correctly', () => {
		render(<Footer />);
		const footElem = screen.getByText(/kodebi/i);
		expect(footElem).toBeInTheDocument();
	});

	it('renders Footer with links', () => {
		render(
			<Router>
				<Footer links={mockLinks} />
			</Router>
		);
	});
});
