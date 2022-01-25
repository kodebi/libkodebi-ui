import * as React from 'react'

export interface IconProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
  key?: number
  icon?: React.ReactElement
}

export const IconWrapper: React.FC<IconProps> = React.forwardRef<
  HTMLAnchorElement,
  IconProps
>(() => {
  return <div></div>
})
