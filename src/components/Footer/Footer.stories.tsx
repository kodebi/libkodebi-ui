import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

export const links = [
	{ to: '/home', children: 'Home' },
	{ to: '/about', children: 'About' },
	{ to: '/imprint', children: 'Imprint' },
];

export const testIcons = [
	{ href: 'https://instagram.com', children: <FaInstagram /> },
	{ href: 'https://github.com', children: <FaGithub /> },
];

export default {
	title: 'libkodebi-ui/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
	<Router>
		<Footer {...args} />
	</Router>
);

export const Testfootie = Template.bind({});
Testfootie.args = {
	links: links,
	icons: testIcons,
};
