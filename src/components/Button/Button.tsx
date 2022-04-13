import * as React from 'react';
import * as B from './Button.style';

export type ButtonType = 'signin' | 'action' | 'filter';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonType;
	label: string;
	width?: string;
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
>(({ variant = 'signin', label, width, ...props }, ref): JSX.Element => {
	const Element = checkBtnType(variant);
	return (
		<Element ref={ref} type="button" style={{ width }} {...props}>
			{label}
		</Element>
	);
});

Button.displayName = 'Button';
Button.defaultProps = {
	variant: 'signin',
	label: undefined,
	width: undefined,
	onClick: undefined,
};
