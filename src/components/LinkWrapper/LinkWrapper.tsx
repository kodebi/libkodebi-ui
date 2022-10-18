import * as React from 'react';
import * as L from './LinkWrapper.style';

export type LinkType = 'default' | 'menu' | 'footer';

export interface LinkWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	type?: LinkType;
}

function getLinkType(type: LinkType) {
	switch (type) {
		case 'default':
			return L.WrappedLink;
		case 'menu':
			return L.MenuLink;
		case 'footer':
			return L.FooterLink;
		default:
			return L.WrappedLink;
	}
}

export const LinkWrapper: React.FC<LinkWrapperProps> = React.forwardRef<
	HTMLDivElement,
	LinkWrapperProps
>(
	(
		{ type = 'default', children, ...props }: LinkWrapperProps,
		ref
	): JSX.Element => {
		const LinkElement = getLinkType(type);
		return (
			<LinkElement ref={ref} data-testid="link-test" {...props}>
				{children}
			</LinkElement>
		);
	}
);

LinkWrapper.displayName = 'LinkWrapper';
LinkWrapper.defaultProps = {
	type: 'default',
	children: undefined,
};
