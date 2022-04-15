import * as React from 'react';
import { KodebiStyles } from './KodebiStyles';

export interface StyleProviderProps {
	children: React.ReactNode;
}

export const StyleProvider: React.FC<StyleProviderProps> = ({
	children,
}: StyleProviderProps): React.ReactElement => {
	return (
		<>
			<KodebiStyles />
			{children}
		</>
	);
};
