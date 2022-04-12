import * as React from 'react';
import * as bx from './Box.style';

export type BoxType =
	| 'default'
	| 'center'
	| 'flex-col'
	| 'flex-col-start'
	| 'flex-space-between'
	| 'flex-align-start'
	| 'flex-align-end';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: BoxType;
	children?: React.ReactNode;
	width?: string;
	height?: string;
	className?: string;
	padding?: string;
	margin?: string;
	backgroundColor?: string;
	position?: string;
	maxWidth?: string;
}

const getDisplayType = (type: BoxType) => {
	switch (type) {
		case 'default':
			return bx.FlexBox;
		case 'center':
			return bx.FlexCenter;
		case 'flex-col':
			return bx.FlexCol;
		case 'flex-col-start':
			return bx.FlexColStart;
		case 'flex-space-between':
			return bx.FlexSpaceBetween;
		case 'flex-align-start':
			return bx.FlexAlignStart;
		case 'flex-align-end':
			return bx.FlexAlignEnd;
		default:
			return bx.FlexBox;
	}
};

export const Box: React.FC<BoxProps> = React.forwardRef<
	HTMLDivElement,
	BoxProps
>(
	(
		{
			variant = 'default',
			children,
			width,
			height,
			backgroundColor,
			padding,
			margin,
			maxWidth,
			...props
		},
		ref
	): JSX.Element => {
		const Element = getDisplayType(variant);
		return (
			<Element
				ref={ref}
				style={{ width, height, padding, margin, backgroundColor, maxWidth }}
				{...props}
			>
				{children}
			</Element>
		);
	}
);

Box.displayName = 'Box';
Box.defaultProps = {
	variant: 'default',
	padding: undefined,
	margin: undefined,
	children: undefined,
	width: undefined,
	height: undefined,
	className: undefined,
	backgroundColor: undefined,
	position: undefined,
	maxWidth: undefined,
};
