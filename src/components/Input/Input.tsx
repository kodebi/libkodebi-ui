import * as React from 'react';
import * as I from './Input.style';

export type InputVariant = 'primary' | 'secondary' | 'search';
export type InputType =
	| 'text'
	| 'email'
	| 'password'
	| 'url'
	| 'search'
	| 'number';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	variant: InputVariant;
	name: string;
	id: string;
	type: InputType;
	width?: string;
	margin?: string;
	className?: string;
	placeholder?: string;
	value?: string;
	required?: boolean;
	onChange?: () => void;
	onKeyPress?: () => void;
}

const getInputType = (type: InputVariant) => {
	switch (type) {
		case 'primary':
			return I.PrimaryInput;
		case 'secondary':
			return I.SecondaryInput;
		case 'search':
			return I.SearchInput;
		default:
			return I.PrimaryInput;
	}
};

export const Input: React.FC<InputProps> = React.forwardRef<
	HTMLInputElement,
	InputProps
>(
	(
		{ variant = 'primary', type = 'text', width, margin, ...props }: InputProps,
		ref
	): JSX.Element => {
		const Element = getInputType(variant);
		return (
			<Element
				ref={ref}
				data-testid="input-test"
				type={type}
				style={{ width, margin }}
				{...props}
			/>
		);
	}
);

Input.displayName = 'Input';
Input.defaultProps = {
	variant: 'primary',
	name: 'Name des Inputfeldes',
	id: 'Id des Inputfeldes',
	placeholder: 'Hier könnte dein Inhalt stehen...',
	type: 'text',
	width: undefined,
	margin: undefined,
	value: undefined,
	onChange: undefined,
	required: false,
};
