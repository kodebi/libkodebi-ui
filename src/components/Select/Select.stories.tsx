import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
	title: 'libkodebi-ui/Select',
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
	<Select {...args}></Select>
);

export const Dropdown = Template.bind({});
Dropdown.args = {
	name: 'Dropdown',
	width: '50%',
	options: [
		{ id: 1, value: 'Test' },
		{ id: 2, value: 'Hello' },
	],
};

export const Filter = Template.bind({});
Filter.args = {
	name: 'Filter',
	options: [
		{ id: 1, value: 'Ketchup' },
		{ id: 2, value: 'Pilze' },
		{ id: 3, value: 'Senf' },
		{ id: 4, value: 'Sahne' },
	],
};
