import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleProvider } from './StyleProvider';
import { Button } from '../Button';

export default {
	title: 'libkodebi-ui/StyleProvider',
	component: StyleProvider,
	subcomponents: { Button },
} as ComponentMeta<typeof StyleProvider>;

const Template: ComponentStory<typeof StyleProvider> = (args) => (
	<StyleProvider {...args} />
);

export const ProviderWithChildren = Template.bind({});
ProviderWithChildren.args = {
	children: <Button label="Test" />,
};
