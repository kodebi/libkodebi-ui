import * as React from 'react';
import * as cs from './Card.style';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	withBorders?: boolean;
	center?: boolean;
	children?: React.ReactNode;
	width?: string;
	height?: string;
	margin?: string;
	backgroundColor?: string;
}

function activateBorder(style: boolean) {
	return style ? cs.CardWBorders : cs.DefaultCard;
}

export const Card: React.FC<CardProps> = React.forwardRef<
	HTMLDivElement,
	CardProps
>(
	(
		{
			withBorders = false,
			center = false,
			children,
			width,
			height,
			margin,
			backgroundColor,
			...props
		},
		ref
	): JSX.Element => {
		const Element = activateBorder(withBorders);
		return (
			<Element
				ref={ref}
				style={{
					width,
					height,
					margin,
					justifyContent: `${center && 'center'}`,
					alignItems: `${center && 'center'}`,
					backgroundColor,
				}}
				{...props}
			>
				{children}
			</Element>
		);
	}
);

Card.displayName = 'Card';
Card.defaultProps = {
	withBorders: false,
	center: false,
	width: undefined,
	height: undefined,
};
