import * as React from 'react';
import * as iw from './InputWrapper.style';
import { Input, InputVariant, InputType } from '../Input';
import { Textarea } from '../Textarea';

export type LabelPosition = 'above' | 'left' | undefined;

export interface InputWrapperProps
	extends React.HTMLAttributes<HTMLDivElement> {
	id: string;
	name: string;
	htmlFor: string;
	position: LabelPosition;
	variant: InputVariant;
	type: InputType;
	placeholder?: string;
	textarea?: boolean;
	margin?: string;
	marginRight?: string;
	padding?: string;
	required?: boolean;
	labelColor?: string;
}

function determinePos(position: LabelPosition) {
	return position === 'above' ? iw.WrapLabelAbove : iw.WrapLabelLeft;
}

export const InputWrapper: React.FC<InputWrapperProps> = React.forwardRef<
	HTMLDivElement,
	InputWrapperProps
>(
	(
		{
			id,
			htmlFor,
			position,
			variant,
			type,
			name,
			textarea,
			marginRight,
			padding,
			margin,
			required,
			labelColor,
			placeholder,
			...props
		},
		ref
	): React.ReactElement => {
		const Label = iw.StyledLabel;
		const Element = determinePos(position);
		return (
			<Element ref={ref} {...props} style={{ padding, margin }}>
				<Label
					id={id}
					htmlFor={htmlFor}
					style={{ marginRight, color: `${labelColor}` }}
				>
					{htmlFor}
				</Label>
				{textarea ? (
					<Textarea id={id} name={name} placeholder={placeholder} />
				) : (
					<Input
						id={id}
						variant={variant}
						type={type}
						name={name}
						placeholder={placeholder}
						required
					/>
				)}
			</Element>
		);
	}
);

InputWrapper.displayName = 'InputWrapper';
InputWrapper.defaultProps = {
	variant: 'primary',
	htmlFor: 'Name',
	name: 'Name',
	id: 'some id',
	placeholder: 'This could be your content',
	type: 'text',
	margin: undefined,
	padding: undefined,
	marginRight: undefined,
	textarea: false,
};
