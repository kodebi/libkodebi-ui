import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
	title: 'libkodebi-ui/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	name: 'Test',
	placeholder: 'Hier könnte Dein Inhalt stehen...',
};

export const Secondary = Template.bind({});
Secondary.args = {
	name: 'Test2',
	placeholder: 'Auch das könnte Dein Inhalt sein...',
};

export const Search = Template.bind({});
Search.args = {
	variant: 'search',
	name: 'Suche',
	placeholder: 'Suche...',
};

export const LeftLabelInput = Template.bind({});
LeftLabelInput.args = {
	id: 'testid',
	name: 'test',
	type: 'text',
	labelTag: 'Links',
	variant: 'primary',
	position: 'left',
	textarea: false,
	placeholder: 'Hier könnte Dein Inhalt stehen...',
};

export const AboveLabelInput = Template.bind({});
AboveLabelInput.args = {
	id: 'testid',
	name: 'test',
	labelTag: 'Oben',
	type: 'text',
	variant: 'primary',
	position: 'above',
	textarea: false,
	placeholder: 'Hier könnte Dein Inhalt stehen...',
	padding: '0.25rem',
};

export const TextareaTest = Template.bind({});
TextareaTest.args = {
	id: 'testid',
	name: 'test',
	labelTag: 'Textfeld',
	type: 'text',
	variant: 'primary',
	position: 'above',
	textarea: true,
	placeholder: 'Hier könnte Dein Inhalt stehen...',
	padding: '0.25rem',
};
