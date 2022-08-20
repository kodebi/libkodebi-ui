import * as React from 'react';
import * as cs from './Card.style';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	withBorders?: boolean;
	center?: boolean;
	children?: React.ReactNode;
	width?: string;
	height?: string;
}

function activateBorder(style: boolean) {
	if (style) return cs.CardWBorders;
	else return cs.DefaultCard;
}

export const Card: React.FC<CardProps> = React.forwardRef<
	HTMLDivElement,
	CardProps
>(
	(
		{ withBorders = false, center = false, children, width, height, ...props },
		ref
	): JSX.Element => {
		const Element = activateBorder(withBorders);
		return (
			<Element
				ref={ref}
				style={{
					width,
					height,
					justifyContent: `${center && 'center'}`,
					alignItems: `${center && 'center'}`,
				}}
				{...props}
			>
				{children}
			</Element>
		);
	}
);

Card.displayName = 'Card';
