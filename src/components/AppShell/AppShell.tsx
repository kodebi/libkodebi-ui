import * as React from 'react';
import { KodebiStyles } from './KodebiStyles';

export interface AppShellProps {
	children: React.ReactNode;
	defaultStyle?: boolean;
}

export const AppShell: React.FC<AppShellProps> = ({
	defaultStyle = false,
	children,
}: AppShellProps): React.ReactElement => {
	return (
		<React.Fragment>
			{defaultStyle && <KodebiStyles />}
			{children}
		</React.Fragment>
	);
};

AppShell.displayName = 'AppShell';
