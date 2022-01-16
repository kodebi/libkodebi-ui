import styled from '@emotion/styled'
import { DefaultInputStyle } from '../Input/Input.style'

const DefaultSelectStyle = DefaultInputStyle.withComponent('select')

export const PrimarySelect = styled(DefaultSelectStyle)`
  border-color: #d96c75;
`

export const FilterSelect = styled(DefaultSelectStyle)`
  border-radius: 25px;
  border: 2px solid #d96c75;
  box-shadow: 1px 6px 6px -6px rgba(0, 0, 0, 0.75);
`
