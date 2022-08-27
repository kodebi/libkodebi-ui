import * as React from 'react';
import * as t from './Text.style';

export type TextWeight = 'regular' | 'bold';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	weight?: TextWeight;
	className?: string;
	color?: string;
	fontSize?: string;
	children?: React.ReactNode;
	padding?: string;
	margin?: string;
}

const getTextWeight = (type: TextWeight) => {
	switch (type) {
		case 'regular':
			return t.RegularText;
		case 'bold':
			return t.BoldText;
		default:
			return t.RegularText;
	}
};

export const Text: React.FC<TextProps> = React.forwardRef<
	HTMLParagraphElement,
	TextProps
>(
	(
		{
			weight = 'regular',
			color,
			fontSize,
			padding,
			margin,
			children,
			...props
		}: TextProps,
		ref
	): JSX.Element => {
		const Element = getTextWeight(weight);
		return (
			<Element
				ref={ref}
				style={{ color, fontSize, padding, margin }}
				{...props}
			>
				{children}
			</Element>
		);
	}
);

Text.displayName = 'Text';
Text.defaultProps = {
	weight: 'regular',
	className: undefined,
	children: undefined,
	color: undefined,
	fontSize: undefined,
	padding: '0.5rem',
	margin: '0.75rem',
};
