import * as React from 'react'
import { StyledInput, StyledLabel, FormControl } from './Input.style'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string
  name: string
  id: string
  width?: string
  placeholder?: string
  value?: string
  onChange?: () => void
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function (
  { htmlFor, width, ...props }: InputProps,
  ref
): JSX.Element {
  const [val, setVal] = React.useState<string>('')
  return (
    <FormControl>
      <StyledLabel htmlFor={htmlFor}>{htmlFor}</StyledLabel>
      <StyledInput
        ref={ref}
        type='text'
        style={{ width }}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        {...props}
      />
    </FormControl>
  )
})

Input.displayName = 'Input'
Input.defaultProps = {
  htmlFor: 'Dein Label',
  name: 'Name des Inputfeldes',
  id: 'Id des Inputfeldes',
  placeholder: 'Hier könnte dein Inhalt stehen',
  width: undefined,
  value: undefined,
  onChange: undefined,
}
