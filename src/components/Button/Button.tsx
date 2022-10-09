import * as React from 'react';
import * as B from './Button.style';

export type ButtonStyle = 'signin' | 'action' | 'filter';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	variant?: ButtonStyle;
	width?: string;
	margin?: string;
	className?: string;
	type?: ButtonType;
	children?: React.ReactNode;
	onClick?: () => void;
}

function checkBtnType(type: ButtonStyle) {
	switch (type) {
		case 'signin':
			return B.SigninBtn;
		case 'action':
			return B.ActionBtn;
		case 'filter':
			return B.FilterBtn;
		default:
			return B.SigninBtn;
	}
}

export const Button: React.FC<ButtonProps> = React.forwardRef<
	HTMLButtonElement,
	ButtonProps
>(
	(
		{
			variant = 'signin',
			type = 'button',
			label,
			width,
			margin,
			children,
			...props
		},
		ref
	): JSX.Element => {
		const Element = checkBtnType(variant);
		return (
			<Element ref={ref} style={{ width, margin }} {...props}>
				{label || children}
			</Element>
		);
	}
);

Button.displayName = 'Button';
Button.defaultProps = {
	variant: 'signin',
	type: 'button',
	width: undefined,
	margin: undefined,
	onClick: undefined,
};
