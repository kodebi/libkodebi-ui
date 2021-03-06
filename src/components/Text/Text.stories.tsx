import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './Text';

export default {
	title: 'libkodebi-ui/Text',
	component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const RegularText = Template.bind({});
RegularText.args = {
	name: 'Paragraph',
	weight: 'regular',
	children: 'Hier könnte Dein Inhalt stehen...',
};

export const BoldText = Template.bind({});
BoldText.args = {
	name: 'Paragraph',
	weight: 'bold',
	children: 'Hier könnte Dein Inhalt stehen...',
};
