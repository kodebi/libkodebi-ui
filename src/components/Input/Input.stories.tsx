import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from './Input'

export default {
  title: 'libkodebi-ui/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Test = Template.bind({})
Test.args = {
  name: 'Test',
  placeholder: 'Hier könnte Dein Inhalt stehen',
}
