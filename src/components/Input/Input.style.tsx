import styled from '@emotion/styled'

export const StyledInput = styled.input`
  padding: 0.25rem;
  border: 1px solid #d96c75;
  border-radius: 0.25rem;
  resize: none;

  &:focus {
    outline: none;
  }
`

export const StyledLabel = styled.label`
  color: #260101;
  padding: 0.25rem;
`

export const FormControl = styled.div`
  margin: 0.5rem 0;
  display: grid;
  align-items: center;
  text-align: start;
`
