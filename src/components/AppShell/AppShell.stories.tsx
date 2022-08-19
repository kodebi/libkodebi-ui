import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppShell } from './AppShell';
import { Box } from '../Box';
import { Button } from '../Button';
import { Card } from '../Card';
import { Text } from '../Text';

export default {
	title: 'libkodebi-ui/AppShell',
	component: AppShell,
	subcomponents: { Button, Text, Card },
} as ComponentMeta<typeof AppShell>;

const Template: ComponentStory<typeof AppShell> = (args) => (
	<AppShell {...args} />
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
