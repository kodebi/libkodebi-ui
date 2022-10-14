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

export type LabelPosition = 'above' | 'left' | undefined;

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	variant?: InputVariant;
	type?: InputType;
	name?: string;
	id?: string;
	width?: string;
	margin?: string;
	className?: string;
	textarea?: boolean;
	placeholder?: string;
	value?: string;
	marginRight?: string;
	label?: boolean;
	labelTag?: string;
	labelColor?: string;
	position?: LabelPosition;
	rows?: number;
	cols?: number;
	wrap?: string;
	required?: boolean;
	borderColor?: string;
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

const determineLabelPos = (label: boolean, position: LabelPosition) => {
	return label
		? position === 'above'
			? I.WrapLabelAbove
			: I.DumbWrapper
		: I.DumbWrapper;
};

export const Input: React.FC<InputProps> = React.forwardRef<
	HTMLInputElement,
	InputProps
>(
	(
		{
			variant = 'primary',
			type = 'text',
			label = false,
			position = undefined,
			textarea = false,
			width,
			margin,
			marginRight,
			labelColor,
			id,
			name,
			labelTag,
			value,
			placeholder,
			wrap,
			rows,
			cols,
			borderColor,
			onChange,
			...props
		}: InputProps,
		ref
	): JSX.Element => {
		const InputElement = getInputType(variant);
		const Label = I.StyledLabel;
		const TextareaElement = I.Textarea;
		const Wrapper = determineLabelPos(label, position);
		return (
			<Wrapper>
				{label && (
					<Label
						id={id}
						htmlFor={labelTag}
						style={{ marginRight, color: `${labelColor}` }}
						data-testid="label-test"
					>
						{`${labelTag}: `}
					</Label>
				)}
				{textarea ? (
					<TextareaElement
						id={id}
						name={name}
						placeholder={placeholder}
						wrap={wrap}
						rows={rows}
						cols={cols}
						style={{ width, margin, borderColor }}
						value={value}
						data-testid="textarea-test"
						onChange={onChange}
					/>
				) : (
					<InputElement
						ref={ref}
						data-testid="input-test"
						type={type}
						name={name}
						style={{ width, margin, borderColor }}
						value={value}
						placeholder={placeholder}
						{...props}
					/>
				)}
			</Wrapper>
		);
	}
);

Input.displayName = 'Input';
Input.defaultProps = {
	variant: 'primary',
	type: 'text',
	label: false,
	textarea: false,
	position: undefined,
	name: undefined,
	id: undefined,
	placeholder: undefined,
	width: undefined,
	margin: undefined,
	onChange: undefined,
	onKeyPress: undefined,
	required: false,
};
