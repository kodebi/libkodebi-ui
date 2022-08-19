import * as React from 'react';
import { KodebiStyles } from './KodebiStyles';

export interface AppShellProps {
	children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({
	children,
}: AppShellProps): React.ReactElement => {
	return (
		<>
			<KodebiStyles />
			{children}
		</>
	);
};

AppShell.displayName = 'AppShell';
