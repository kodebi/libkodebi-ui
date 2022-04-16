import * as React from 'react';
import { IcoWrap } from './IconWrapper.style';

export interface IconProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	url?: string;
	key?: number;
	icon?: React.ReactNode;
}

export const IconWrapper: React.FC<IconProps> = React.forwardRef<
	HTMLAnchorElement,
	IconProps
>(({ href, key, icon, ...props }, ref) => {
	const Element = IcoWrap;
	return (
		<Element ref={ref} key={key} href={href} data-testid="icon-test" {...props}>
			{icon}
		</Element>
	);
});

IconWrapper.displayName = 'Icon';
