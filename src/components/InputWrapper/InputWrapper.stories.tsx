import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputWrapper } from './InputWrapper';

export default {
	title: 'libkodebi-ui/InputWrapper',
	component: InputWrapper,
} as ComponentMeta<typeof InputWrapper>;

const Template: ComponentStory<typeof InputWrapper> = (args) => (
	<InputWrapper {...args} />
);

export const LeftLabelInput = Template.bind({});
LeftLabelInput.args = {
	htmlFor: 'Test: ',
	id: 'testid',
	name: 'Test',
	type: 'text',
	variant: 'primary',
	position: 'left',
	textarea: false,
	placeholder: 'Hier könnte Dein Inhalt stehen...',
};

export const AboveLabelInput = Template.bind({});
AboveLabelInput.args = {
	htmlFor: 'Test: ',
	id: 'testid',
	name: 'Test',
	type: 'text',
	variant: 'primary',
	position: 'above',
	textarea: false,
	placeholder: 'Hier könnte Dein Inhalt stehen...',
	padding: '0.25rem',
};
