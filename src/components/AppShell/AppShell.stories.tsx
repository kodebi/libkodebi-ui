import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	AppShell,
	Box,
	Button,
	Card,
	Text,
	InputWrapper,
	Input,
	Dropdown,
} from '../../';

export default {
	title: 'libkodebi-ui/AppShell',
	component: AppShell,
	subcomponents: { Button, Text, Card },
} as ComponentMeta<typeof AppShell>;

const Template: ComponentStory<typeof AppShell> = (args) => (
	<AppShell {...args} />
);

export const LoginForm = Template.bind({});
LoginForm.args = {
	children: (
		<Card withBorders>
			<Box variant="flex-col" padding="0.5rem">
				<InputWrapper
					htmlFor="Email: "
					id="email"
					name="Email"
					type="email"
					variant="primary"
					position="above"
					placeholder="Email eingeben"
				/>
				<InputWrapper
					htmlFor="Password: "
					id="password"
					name="password"
					type="password"
					variant="primary"
					position="above"
					placeholder="Passwort eingeben"
				/>{' '}
				<Button variant="signin" label="Einloggen" />
			</Box>
		</Card>
	),
};

export const DiscoverBar = Template.bind({});
const options1 = [
	{
		key: '1',
		value: 'Horror',
	},
	{
		key: '2',
		value: 'Thriller',
	},
];
const options2 = [
	{
		key: '1',
		value: 'Deutsch',
	},
	{
		key: '2',
		value: 'Englisch',
	},
];
DiscoverBar.args = {
	children: (
		<Card withBorders margin="0">
			<Box variant="flex-space-between" padding="0.5rem">
				<Button variant="filter" label="All" />
				<Input
					variant="search"
					name="search"
					id="search"
					type="search"
					margin="0.5rem"
					placeholder="Such mal was..."
				/>
				<Dropdown options={options1} />
				<Dropdown options={options2} />
			</Box>
		</Card>
	),
};
