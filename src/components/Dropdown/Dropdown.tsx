import * as React from 'react';
import * as D from './Dropdown.style';
import * as L from '../Input/Input.style';
import { LabelPosition } from '../Input';

export interface OptionProps
	extends React.OptionHTMLAttributes<HTMLOptionElement> {
	key?: string | number;
	value?: string | number;
	title?: string;
	name?: string;
	className?: string;
	width?: string;
	onClick?: () => void;
}

export type DropdownType = 'default' | 'filter';

export interface DropdownProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	variant?: DropdownType;
	name?: string;
	value?: string;
	options?: Array<OptionProps>;
	width?: string;
	padding?: string;
	margin?: string;
	marginRight?: string;
	className?: string;
	label?: boolean;
	labelColor?: string;
	position?: LabelPosition;
	labelTag?: string;
	onChange?: () => void;
}

const getDropdownType = (type: DropdownType) => {
	return type === 'filter' ? D.FilterSelect : D.PrimarySelect;
};

const determineLabelPos = (label: boolean, position: LabelPosition) => {
	return label
		? position === 'above'
			? D.withLabelAbove
			: D.DumbWrapper
		: D.DumbWrapper;
};

export const Dropdown: React.FC<DropdownProps> = React.forwardRef<
	HTMLSelectElement,
	DropdownProps
>(
	(
		{
			variant = 'default',
			label = false,
			position = undefined,
			name,
			id,
			value,
			width,
			padding,
			margin,
			marginRight,
			labelColor,
			options,
			labelTag,
			onChange,
			...props
		}: DropdownProps,
		ref
	): JSX.Element => {
		const Label = L.StyledLabel;
		const Wrapper = determineLabelPos(label, position);
		const Element = getDropdownType(variant);
		return (
			<Wrapper>
				{label && (
					<Label
						id={id}
						htmlFor={labelTag}
						style={{ marginRight, color: `${labelColor}` }}
						data-testid="label-testid"
					>
						{`${labelTag}: `}
					</Label>
				)}
				<Element
					ref={ref}
					id={id}
					style={{ width, padding, margin }}
					data-testid="select-test"
					defaultValue={value}
					onChange={onChange}
					{...props}
				>
					{options?.map((option: OptionProps, index: number) => {
						let acceptedValues;
						const { value, title, name } = option;
						if (option instanceof Object) {
							acceptedValues = value || title || name;
						} else {
							acceptedValues = option;
						}
						return (
							<option key={index} value={acceptedValues} {...option}>
								{acceptedValues}
							</option>
						);
					})}
				</Element>
			</Wrapper>
		);
	}
);

Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = {
	variant: 'default',
	name: 'Dropdown',
	id: undefined,
	value: undefined,
	padding: undefined,
	margin: undefined,
	options: undefined,
	className: undefined,
	onChange: undefined,
};
