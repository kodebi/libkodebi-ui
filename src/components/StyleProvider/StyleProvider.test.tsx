import { StyleProvider } from './StyleProvider';
import { Button } from '../Button';
import { render } from '@testing-library/react';

describe('StyleProvider', () => {
	it('renders with a Button component', () => {
		const styProv = render(
			<StyleProvider>
				<Button label="test" />
			</StyleProvider>
		);
		const { baseElement } = styProv;
		expect(baseElement).toBeInTheDocument();
	});
});
