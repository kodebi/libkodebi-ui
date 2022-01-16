import styled from '@emotion/styled'

const DefaultTextStyle = styled('p')`
  font-size: 0.875rem;
  line-height: 1;
  letter-spacing: ;
`

export const LightText = styled(DefaultTextStyle)`
  font-weight: 100;
`

export const RegularText = styled(DefaultTextStyle)`
  font-weight: 400;
`

export const BoldText = styled(DefaultTextStyle)`
  font-weight: 700;
`
