import * as React from 'react';
import { IcoWrap } from './IconWrapper.style';

export interface IconProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href?: string;
	children?: React.ReactNode | JSX.Element;
	fontSize?: string;
}

export const IconWrapper: React.FC<IconProps> = React.forwardRef<
	HTMLAnchorElement,
	IconProps
>(({ href, children, fontSize, ...props }, ref) => {
	const Element = IcoWrap;
	return (
		<Element
			ref={ref}
			href={href}
			style={{ fontSize }}
			data-testid="icon-test"
			{...props}
		>
			{children}
		</Element>
	);
});

IconWrapper.displayName = 'Icon';
