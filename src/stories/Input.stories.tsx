import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '../components/Input/Input'

export default {
  title: 'libkodebi-ui/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'Test',
  placeholder: 'Hier könnte Dein Inhalt stehen...',
}

export const Secondary = Template.bind({})
Secondary.args = {
  name: 'Test2',
  placeholder: 'Auch das könnte Dein Inhalt sein...',
}

export const Search = Template.bind({})
Search.args = {
  name: 'Suche',
  placeholder: 'Suche...',
}
