import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from './Box';

export default {
	title: 'libkodebi-ui/Box',
	component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Bo = Template.bind({});
Bo.args = {
	width: '100%',
	height: 'auto',
	children: 'Text',
};
