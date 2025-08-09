'use client'

import { ReactNode } from 'react'
import * as S from './styles'

type CatalogContainerProp = {
  children: ReactNode
}

export function CatalogContainer({ children }: CatalogContainerProp) {
  return (
    <S.Background>
      <S.Container>{children}</S.Container>
    </S.Background>
  )
}
