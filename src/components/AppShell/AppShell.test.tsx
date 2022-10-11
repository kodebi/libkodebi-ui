import * as React from 'react';
import { AppShell } from './AppShell';
import { Button } from '../Button';
import { render } from '@testing-library/react';

describe('StyleProvider', () => {
	it('renders with a Button component', () => {
		const styProv = render(
			<AppShell>
				<Button label="test" />
			</AppShell>
		);
		const { baseElement } = styProv;
		expect(baseElement).toBeInTheDocument();
	});
});
