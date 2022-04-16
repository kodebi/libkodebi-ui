import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkWrapper } from './LinkWrapper';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
	title: 'libkodebi-ui/LinkWrapper',
	component: LinkWrapper,
} as ComponentMeta<typeof LinkWrapper>;

const Template: ComponentStory<typeof LinkWrapper> = (args) => (
	<Router>
		<LinkWrapper {...args} />
	</Router>
);

export const Default = Template.bind({});
Default.args = {
	type: 'default',
	to: '/home',
	children: 'Home',
};

export const Menu = Template.bind({});
Menu.args = {
	type: 'menu',
	to: '/about',
	children: 'About',
};

export const Footer = Template.bind({});
Footer.args = {
	type: 'footer',
	to: '/me',
	children: 'Me',
};
