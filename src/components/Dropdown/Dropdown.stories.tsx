import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';

export default {
	title: 'libkodebi-ui/Dropdown',
	component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
	<Dropdown {...args}></Dropdown>
);

export const Default = Template.bind({});
Default.args = {
	name: 'Dropdown',
	variant: 'default',
	width: '50%',
	options: [
		{ id: 1, value: 'Test' },
		{ id: 2, value: 'Hello' },
	],
};

export const Filter = Template.bind({});
Filter.args = {
	name: 'Filter',
	variant: 'filter',
	options: [
		{ id: 1, value: 'Ketchup' },
		{ id: 2, value: 'Pilze' },
		{ id: 3, value: 'Senf' },
		{ id: 4, value: 'Sahne' },
	],
};
