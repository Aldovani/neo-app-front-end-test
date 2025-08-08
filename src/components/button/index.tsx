import { ComponentProps } from 'react'
import * as S from './styles'

type ButtonProps = ComponentProps<'button'> & {
  margin?: string
}

export function Button({ margin, ...props }: ButtonProps) {
  return <S.Container margin={margin} {...props} />
}
