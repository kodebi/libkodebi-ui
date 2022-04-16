import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconWrapper } from './IconWrapper';
import { FaGithub } from 'react-icons/fa';

export default {
	title: 'libkodebi-ui/IconWrapper',
	component: IconWrapper,
} as ComponentMeta<typeof IconWrapper>;

const Template: ComponentStory<typeof IconWrapper> = (args) => (
	<IconWrapper {...args} />
);

export const Wrapcon = Template.bind({});
Wrapcon.args = {
	key: 123,
	href: 'https://github.com',
	icon: <FaGithub />,
};
