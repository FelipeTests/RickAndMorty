import React from 'react'

import * as S from './styles'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: string
  isActive: boolean
}

const NavButton = React.forwardRef(function NavButton(props: Props, ref: React.Ref<HTMLButtonElement>) {
  const { children, isActive, ...rest } = props

  return (
    <S.Container {...rest} ref={ref}>
      <h3>
        {children}
      </h3>
      {isActive && <S.ActiveAdornment />}
    </S.Container>
  )
})

export default NavButton