import { LinkWrapper } from './LinkWrapper';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('LinkWrapper', () => {
	it('renders wrapper with correct link', () => {
		render(
			<Router>
				<LinkWrapper to="/somewhere">somwehere</LinkWrapper>
			</Router>
		);
		const linkElem = screen.getByTestId(/link-test/i);
		expect(linkElem).toBeInTheDocument();
	});
});
