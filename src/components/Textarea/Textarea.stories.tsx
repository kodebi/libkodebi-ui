import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from './Textarea';

export default {
	title: 'libkodebi-ui/Textarea',
	component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);

export const Test = Template.bind({});
Test.args = {
	name: 'Test',
	placeholder: 'Hier könnte Dein Inhalt stehen...',
};
