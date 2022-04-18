import * as React from 'react';
import * as iw from './InputWrapper.style';
import { Input, InputVariant, InputType } from '../Input';
import { Textarea } from '../Textarea';

type LabelPosition = 'above' | 'left';

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
	marginRight?: string;
}

function determinePos(position: LabelPosition) {
	if (position === 'above') {
		return iw.WrapLabelAbove;
	} else return iw.WrapLabelLeft;
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
			...props
		},
		ref
	): React.ReactElement => {
		const Label = iw.StyledLabel;
		const Element = determinePos(position);
		return (
			<Element ref={ref} {...props}>
				<Label id={id} htmlFor={htmlFor} style={{ marginRight }}>
					{htmlFor}
				</Label>
				{textarea ? (
					<Textarea id={id} name={name} />
				) : (
					<Input id={id} variant={variant} type={type} name={name} />
				)}
			</Element>
		);
	}
);
