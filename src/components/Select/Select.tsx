import * as React from 'react';
import * as S from './Select.style';

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

export interface SelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	variant?: DropdownType;
	name?: string;
	id?: string;
	value?: string;
	options?: Array<OptionProps>;
	width?: string;
	padding?: string;
	margin?: string;
	className?: string;
	onChange?: () => void;
}

const getDropdownType = (type: DropdownType) => {
	return type === 'filter' ? S.FilterSelect : S.PrimarySelect;
};

export const Select: React.FC<SelectProps> = React.forwardRef<
	HTMLSelectElement,
	SelectProps
>(
	(
		{
			variant = 'default',
			name,
			id,
			value,
			width,
			padding,
			margin,
			options,
			...props
		}: SelectProps,
		ref
	): JSX.Element => {
		const Element = getDropdownType(variant);
		return (
			<Element
				ref={ref}
				name={name}
				id={id}
				defaultValue={value}
				style={{ width, padding, margin }}
				data-testid="select-test"
				{...props}
			>
				{options?.map((option: OptionProps) => {
					const { value, title, name, key, id } = option;
					const acceptedValues = value || title || name;
					const acceptedKeys = key || id;
					return (
						<option key={acceptedKeys} value={acceptedValues} {...option}>
							{acceptedValues}
						</option>
					);
				})}
			</Element>
		);
	}
);

Select.displayName = 'Select';
Select.defaultProps = {
	variant: 'default',
	name: 'Dropdown',
	id: undefined,
	value: 'Default',
	padding: '0.5rem',
	margin: '0.75rem',
	options: undefined,
	className: undefined,
	onChange: undefined,
};
