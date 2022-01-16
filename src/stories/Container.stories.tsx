import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Container } from '../components/Container/Container'

export default {
  title: 'libkodebi-ui/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)

export const Div = Template.bind({})
Div.args = {
  width: '100%',
  height: 'auto',
  children: 'Text',
}
