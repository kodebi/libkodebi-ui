import * as React from 'react';
import * as S from './Select.style';

export interface OptionProps
	extends React.OptionHTMLAttributes<HTMLOptionElement> {
	key?: number;
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
	variant: DropdownType;
	name?: string;
	id?: string;
	value?: string;
	options?: {}[];
	width?: string;
	className?: string;
	children?: React.ReactNode;
	onChange?: () => void;
}

const getDropdownType = (type: DropdownType) => {
	if (type === 'filter') {
		return S.FilterSelect;
	} else {
		return S.PrimarySelect;
	}
};

export const Select: React.FC<SelectProps> = React.forwardRef<
	HTMLSelectElement,
	SelectProps
>(
	(
		{ variant, name, id, value, width, options, ...props }: SelectProps,
		ref
	): JSX.Element => {
		const Element = getDropdownType(variant);
		return (
			<Element
				ref={ref}
				name={name}
				id={id}
				defaultValue={value}
				style={{ width }}
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
	options: undefined,
	className: undefined,
	children: undefined,
	onChange: undefined,
};
