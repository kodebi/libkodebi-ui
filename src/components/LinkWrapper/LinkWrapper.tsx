import * as React from 'react';
import { NavLinkProps } from 'react-router-dom';
import * as L from './LinkWrapper.style';

export type LinkType = 'default' | 'menu' | 'footer';

export interface LinkWrapperProps extends NavLinkProps {
	to: string;
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
	HTMLAnchorElement,
	LinkWrapperProps
>(
	(
		{ type = 'default', to, children, ...props }: LinkWrapperProps,
		ref
	): JSX.Element => {
		const LinkElement = getLinkType(type);
		return (
			<LinkElement
				ref={ref}
				type="default"
				to={to}
				data-testid="link-test"
				{...props}
			>
				{children}
			</LinkElement>
		);
	}
);

LinkWrapper.displayName = 'Link';
LinkWrapper.defaultProps = {
	type: 'default',
	to: undefined,
	children: undefined,
};
