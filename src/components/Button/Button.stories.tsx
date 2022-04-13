import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
	title: 'libkodebi-ui/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Signin = Template.bind({});
Signin.args = {
	variant: 'signin',
	label: 'signin',
};

export const Action = Template.bind({});
Action.args = {
	variant: 'action',
	label: 'action',
};

export const Filter = Template.bind({});
Filter.args = {
	variant: 'filter',
	label: 'Filter',
};
