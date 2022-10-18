import * as React from 'react';
import * as cs from './Card.style';

export type CardShdowType = 'none' | 'light' | 'bright';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	withBorders?: boolean;
	center?: boolean;
	children?: React.ReactNode;
	width?: string;
	maxWidth?: string;
	height?: string;
	margin?: string;
	shadow?: CardShdowType;
	backgroundColor?: string;
	borderColor?: string;
}

function activateBorderAndShadow(border: boolean, shadow: CardShdowType) {
	return border
		? shadow === 'none'
			? cs.CardWBorders
			: shadow === 'bright'
			? cs.CardWithBorderAndBrightShadow
			: cs.CardWithBorderAndLightShadow
		: cs.DefaultCard;
}

export const Card: React.FC<CardProps> = React.forwardRef<
	HTMLDivElement,
	CardProps
>(
	(
		{
			withBorders = false,
			center = false,
			shadow = 'none',
			children,
			width,
			maxWidth,
			height,
			margin,
			backgroundColor,
			borderColor,
			...props
		},
		ref
	): JSX.Element => {
		const Element = activateBorderAndShadow(withBorders, shadow);
		return (
			<Element
				ref={ref}
				style={{
					width,
					height,
					margin,
					maxWidth,
					justifyContent: `${center && 'center'}`,
					alignItems: `${center && 'center'}`,
					backgroundColor,
					borderColor,
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
	shadow: 'none',
	width: undefined,
	height: undefined,
};
