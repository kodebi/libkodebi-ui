import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from './Footer';
import { links } from '../../../__mocks__/testData';
import { BrowserRouter as Router } from 'react-router-dom';

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
};
