import * as React from 'react';
import * as B from './Button.style';

export type ButtonType = 'signin' | 'action' | 'filter';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	variant?: ButtonType;
	width?: string;
	margin?: string;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
}

function checkBtnType(type: ButtonType) {
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
				{label}
			</Element>
		);
	}
);

Button.displayName = 'Button';
Button.defaultProps = {
	variant: 'signin',
	width: undefined,
	margin: undefined,
	onClick: undefined,
};
