'use client'

import { HomeIcon, ShoppingCart } from 'lucide-react'
import * as S from './styles'
export default function Header() {
  return (
    <header>
      <S.Container>
        <S.Logo>Marvel Comics Store</S.Logo>
      </S.Container>

      <S.ContainerButtons>
        <S.HomeLink as="a">
          <HomeIcon />
        </S.HomeLink>
        <S.CatButton>
          <ShoppingCart />
        </S.CatButton>
      </S.ContainerButtons>
    </header>
  )
}
