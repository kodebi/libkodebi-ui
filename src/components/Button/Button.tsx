import * as React from 'react'
import * as btnStyle from './Button.style'

export type ButtonType = 'primary' | 'secondary' | 'filter'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonType
  label: string
  width?: string
  onClick?: () => void
}

const checkBtnType = (type: ButtonType) => {
  switch (type) {
    case 'primary':
      return btnStyle.PrimaryBtn
    case 'secondary':
      return btnStyle.SecondaryBtn
    case 'filter':
      return btnStyle.FilterBtn
    default:
      return btnStyle.PrimaryBtn
  }
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function (
    { variant = 'primary', label, width, ...props }: ButtonProps,
    ref
  ): JSX.Element {
    const Element = checkBtnType(variant)
    return (
      <Element ref={ref} type='button' style={{ width }} {...props}>
        {label}
      </Element>
    )
  }
)

Button.displayName = 'Button'
Button.defaultProps = {
  variant: 'primary',
  label: undefined,
  width: undefined,
  onClick: undefined,
}
