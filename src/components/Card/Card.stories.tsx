import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';

export default {
	title: 'libkodebi-ui/Card',
	component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const NoBorder = Template.bind({});
NoBorder.args = {
	children: 'No obvious border',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
	withBorders: true,
	children: 'With border',
};
