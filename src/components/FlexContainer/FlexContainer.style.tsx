import styled from '@emotion/styled'

export const FlexCon = styled('div')`
  display: flex;
`

export const FlexCenter = styled(FlexCon)`
  justify-content: center;
  align-items: center;
`

export const FlexSpaceBetween = styled(FlexCon)`
  justify-content: space-between;
`

export const FlexCol = styled(FlexCon)`
  flex-direction: column;
`

export const FlexColStart = styled(FlexCol)`
  align-items: flex-start;
`

export const FlexAlignStart = styled(FlexCon)`
  align-items: flex-start;
`

export const FlexAlignEnd = styled(FlexCon)`
  align-items: flex-end;
`
