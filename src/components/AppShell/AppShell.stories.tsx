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
					width="40vw"
				/>
				<Dropdown margin="0.5rem" options={options1} />
				<Dropdown margin="0.5rem" options={options2} />
			</Box>
		</Card>
	),
};
export const BookUpload = Template.bind({});
BookUpload.args = {
	children: (
		<Card withBorders margin="0">
			<Box variant="flex-col" padding="0.5rem">
				<InputWrapper
					htmlFor="Titel: "
					id="title"
					name="title"
					type="text"
					variant="primary"
					position="above"
					placeholder="Titel eingeben"
				/>
				<Dropdown label position="above" name="Genre" options={options1} />
			</Box>
		</Card>
	),
};
