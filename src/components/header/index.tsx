'use client'

import { HomeIcon, ShoppingCart } from 'lucide-react'
import * as S from './styles'
export default function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>Marvel Comics Store</S.Logo>

        <S.ContainerButtons>
          <S.HomeLink as="a">
            <HomeIcon />
          </S.HomeLink>
          <S.CatButton>
            <ShoppingCart />
          </S.CatButton>
        </S.ContainerButtons>
      </S.Wrapper>
    </S.Container>
  )
}
