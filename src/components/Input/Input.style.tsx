import styled from '@emotion/styled'

export const DefaultInputStyle = styled('input')`
  padding: 0.25rem;
  border: 1px solid #5f5f5f;
  border-radius: 0.25rem;
  resize: none;
  font-size: 0.75rem;

  &:focus {
    outline: none;
  }
`

export const PrimaryInput = styled(DefaultInputStyle)`
  border-color: #d96c75;
`

export const SecondaryInput = styled(DefaultInputStyle)`
  border-color: #f2ead0;
`

export const SearchInput = styled(DefaultInputStyle)`
  border-radius: 25px;
  border: 2px solid #d96c75;
  box-shadow: 1px 6px 6px -6px rgba(0, 0, 0, 0.75);
`
