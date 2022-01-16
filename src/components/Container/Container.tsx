import * as React from 'react'
import * as c from './Container.style'

export type ContainerType = 'block' | 'flex' | 'grid'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  display: ContainerType
  children?: React.ReactNode
  width?: string
  height?: string
  className?: string
  backgroundColor?: string
}

const getDisplayType: Function = (type: ContainerType) => {
  switch (type) {
    case 'block':
      return c.RegCon
    case 'flex':
      return c.FlexCon
    case 'grid':
      return c.GridCon
    default:
      return c.GridCon
  }
}

export const Container: React.FC<ContainerProps> = React.forwardRef<
  HTMLDivElement,
  ContainerProps
>(
  (
    {
      display,
      children,
      width,
      height,
      backgroundColor,
      ...props
    }: ContainerProps,
    ref
  ): JSX.Element => {
    const Element = getDisplayType(display)
    return (
      <Element ref={ref} style={{ width, height, backgroundColor }} {...props}>
        {children}
      </Element>
    )
  }
)

Container.displayName = 'Container'
Container.defaultProps = {
  display: 'block',
  children: 'Diest ein Beispieltext...',
  width: undefined,
  height: undefined,
  className: undefined,
  backgroundColor: undefined,
}
