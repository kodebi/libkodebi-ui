import * as React from 'react';
import { IconWrapper } from './IconWrapper';
import { render, screen } from '@testing-library/react';
import { FaGithub } from 'react-icons/fa';

describe('IconWrapper', () => {
	it('renders wrapper with icon inside and correct link', () => {
		render(
			<IconWrapper href="https://github.com">
				<FaGithub />
			</IconWrapper>
		);
		const iconElem = screen.getByTestId(/icon-test/i);
		expect(iconElem).toHaveStyle({ fontSize: '1.5rem' });
	});
});
