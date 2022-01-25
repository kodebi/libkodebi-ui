import * as React from 'react'
import * as fc from './FlexContainer.style'

export type FlexContainerType =
  | 'flex'
  | 'flex-center'
  | 'flex-col'
  | 'flex-col-start'
  | 'flex-space-between'
  | 'flex-align-start'
  | 'flex-align-end'

export interface FlexContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant: FlexContainerType
  children?: React.ReactNode
  width?: string
  height?: string
  className?: string
  padding?: string
  margin?: string
  backgroundColor?: string
  position?: string
  maxWidth?: string
}

const getDisplayType = (type: FlexContainerType) => {
  switch (type) {
    case 'flex':
      return fc.FlexCon
    case 'flex-center':
      return fc.FlexCenter
    case 'flex-col':
      return fc.FlexCol
    case 'flex-col-start':
      return fc.FlexColStart
    case 'flex-space-between':
      return fc.FlexSpaceBetween
    case 'flex-align-start':
      return fc.FlexAlignStart
    case 'flex-align-end':
      return fc.FlexAlignEnd
    default:
      return fc.FlexCon
  }
}

export const FlexContainer: React.FC<FlexContainerProps> = React.forwardRef<
  HTMLDivElement,
  FlexContainerProps
>(
  (
    {
      variant = 'flex',
      children,
      width,
      height,
      backgroundColor,
      padding,
      margin,
      maxWidth,
      ...props
    },
    ref
  ): JSX.Element => {
    const Element = getDisplayType(variant)
    return (
      <Element
        ref={ref}
        style={{ width, height, padding, margin, backgroundColor, maxWidth }}
        {...props}
      >
        {children}
      </Element>
    )
  }
)

FlexContainer.displayName = 'FlexContainer'
FlexContainer.defaultProps = {
  padding: undefined,
  margin: undefined,
  children: undefined,
  width: undefined,
  height: undefined,
  className: undefined,
  backgroundColor: undefined,
  position: undefined,
  maxWidth: undefined,
}
