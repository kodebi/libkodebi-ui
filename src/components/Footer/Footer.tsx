import * as React from 'react'
import { FlexContainer } from '..'
import { Text } from '..'
import { Link } from 'react-router-dom'
import { IconWrapper } from '..'

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  links?: []
  icons?: []
}

export const Footer: React.FC<FooterProps> = React.forwardRef<
  HTMLDivElement,
  FooterProps
>(({ links, icons }): JSX.Element => {
  return (
    <FlexContainer
      variant='flex-center'
      height='6rem'
      padding='1rem'
      position='relative'
      backgroundColor='#D9C6BA'
    >
      <FlexContainer
        variant='flex-space-between'
        width='100%'
        maxWidth='1260px'
      >
        <FlexContainer variant='flex-col-start'>
          <Text content='© 2022 Kodebi. All rights reserved' />
          <FlexContainer variant='flex-align-start' width='100%'>
            {links?.map((link: any) => {
              return (
                <Link to={link.url} key={link.id}>
                  {link.text}
                </Link>
              )
            })}
          </FlexContainer>
        </FlexContainer>
        <FlexContainer variant='flex-align-end'>
          {icons?.map((link: any) => {
            return (
              <IconWrapper href={link.url} key={link.id}>
                {link.icon}
              </IconWrapper>
            )
          })}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
})
