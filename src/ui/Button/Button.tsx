import React from 'react'

import * as S from './styles'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: string
}

const Button = React.forwardRef(function Button(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const { children, ...rest } = props

  return (
    <S.Container {...rest} ref={ref}>
      {children}
    </S.Container>
  )
})


export default Button
