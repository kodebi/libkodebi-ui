import styled from '@emotion/styled'
import { DefaultInputStyle } from '../Input/Input.style'

const DefaultTextareaStyle = DefaultInputStyle.withComponent('textarea')

export const PrimaryTextarea = styled(DefaultTextareaStyle)`
  border-color: #d96c75;
`
