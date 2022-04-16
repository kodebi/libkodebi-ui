import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleProvider } from './StyleProvider';
import { Box } from '../Box';
import { Button } from '../Button';
import { Card } from '../Card';
import { Text } from '../Text/';

export default {
	title: 'libkodebi-ui/StyleProvider',
	component: StyleProvider,
	subcomponents: { Button, Text, Card },
} as ComponentMeta<typeof StyleProvider>;

const Template: ComponentStory<typeof StyleProvider> = (args) => (
	<StyleProvider {...args} />
);

export const ProviderWithChildren = Template.bind({});
ProviderWithChildren.args = {
	children: (
		<Card withBorders>
			<Box variant="flex-col">
				<Text>This is a card</Text>
				<Button label="Test" />
			</Box>
		</Card>
	),
};
