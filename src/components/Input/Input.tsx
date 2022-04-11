import * as React from 'react';
import * as I from './Input.style';

export type InputType = 'primary' | 'secondary' | 'search';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	variant: InputType;
	name: string;
	id: string;
	width?: string;
	className?: string;
	placeholder?: string;
	value?: string;
	onChange?: () => void;
}

const getInputType = (type: InputType) => {
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
>(({ variant = 'primary', width, ...props }: InputProps, ref): JSX.Element => {
	const Element = getInputType(variant);
	return (
		<Element
			ref={ref}
			data-testid="input-test"
			type="text"
			style={{ width }}
			{...props}
		/>
	);
});

Input.displayName = 'Input';
Input.defaultProps = {
	variant: 'primary',
	name: 'Name des Inputfeldes',
	id: 'Id des Inputfeldes',
	placeholder: 'Hier könnte dein Inhalt stehen',
	width: undefined,
	value: undefined,
	onChange: undefined,
};
