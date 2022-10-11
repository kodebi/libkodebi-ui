import * as React from 'react';
import { Footer } from './Footer';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaInstagram, FaGithub } from 'react-icons/fa';

const mockLinks = [
	{ to: '/', children: 'Home' },
	{ to: '/about', children: 'About' },
];
export const testIcons = [
	{ href: 'https://instagram.com', children: <FaInstagram /> },
	{ href: 'https://github.com', children: <FaGithub /> },
];

describe('Footer', () => {
	it('render the footer correctly', () => {
		render(<Footer />);
		const footElem = screen.getByText(/kodebi/i);
		expect(footElem).toBeInTheDocument();
	});

	it('renders Footer with links', async () => {
		render(
			<Router>
				<Footer links={mockLinks} />
			</Router>
		);
		const footElem = screen.getByText(/kodebi/i);
		const linkElem = screen.getByText(/home/i);
		waitFor(() => {
			expect(footElem).toContainElement(linkElem);
		});
	});

	it('renders Footer with icons', async () => {
		render(
			<Router>
				<Footer icons={testIcons} />
			</Router>
		);
		const iconElem = screen.getAllByRole('link');
		waitFor(() => {
			expect(iconElem).toBeInTheDocument();
		});
	});
});
