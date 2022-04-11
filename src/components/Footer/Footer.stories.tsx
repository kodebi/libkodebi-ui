import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from './Footer';

export default {
	title: 'libkodebi-ui/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Testfootie = Template.bind({});
