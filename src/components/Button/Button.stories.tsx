import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'libkodebi-ui/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  label: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary',
}

export const Filter = Template.bind({})
Filter.args = {
  variant: 'filter',
  label: 'Filter',
}
