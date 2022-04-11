import * as React from 'react';
import * as B from './Button.style';

export type ButtonType = 'primary' | 'secondary' | 'filter';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonType;
	label: string;
	width?: string;
	className?: string;
	onClick?: () => void;
}

function checkBtnType(type: ButtonType) {
	switch (type) {
		case 'primary':
			return B.PrimaryBtn;
		case 'secondary':
			return B.SecondaryBtn;
		case 'filter':
			return B.FilterBtn;
		default:
			return B.PrimaryBtn;
	}
}

export const Button: React.FC<ButtonProps> = React.forwardRef<
	HTMLButtonElement,
	ButtonProps
>(({ variant = 'primary', label, width, ...props }, ref): JSX.Element => {
	const Element = checkBtnType(variant);
	return (
		<Element ref={ref} type="button" style={{ width }} {...props}>
			{label}
		</Element>
	);
});

Button.displayName = 'Button';
Button.defaultProps = {
	variant: 'primary',
	label: undefined,
	width: undefined,
	onClick: undefined,
};
