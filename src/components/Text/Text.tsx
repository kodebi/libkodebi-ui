import * as React from 'react'
import * as t from './Text.style'

export type TextWeight = 'light' | 'regular' | 'bold'

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  content: string | number
  weight?: TextWeight
  className?: string
}

const getTextWeight: Function = (type: TextWeight) => {
  switch (type) {
    case 'light':
      return t.LightText
    case 'regular':
      return t.RegularText
    case 'bold':
      return t.BoldText
    default:
      return t.RegularText
  }
}

export const Text: React.FC<TextProps> = React.forwardRef<
  HTMLParagraphElement,
  TextProps
>(({ content, weight, ...props }: TextProps): JSX.Element => {
  const Element = getTextWeight(weight)
  return <Element {...props}>{content}</Element>
})

Text.displayName = 'Text'
Text.defaultProps = {
  content: 'Das ist ein Beispieltext...',
  weight: undefined,
  className: undefined,
}
