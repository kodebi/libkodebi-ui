import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FlexContainer } from '../components/FlexContainer/FlexContainer'

export default {
  title: 'libkodebi-ui/FlexContainer',
  component: FlexContainer,
} as ComponentMeta<typeof FlexContainer>

const Template: ComponentStory<typeof FlexContainer> = (args) => (
  <FlexContainer {...args} />
)

export const Flex = Template.bind({})
Flex.args = {
  width: '100%',
  height: 'auto',
  children: 'Text',
}
