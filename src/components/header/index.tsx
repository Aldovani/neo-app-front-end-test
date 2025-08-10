'use client'

import { useAppDispatch, useAppSelector } from '@/stores'
import { toggleCart } from '@/stores/modules/cart'
import { HomeIcon, ShoppingCart, X } from 'lucide-react'
import { Cart } from '../cart'
import * as S from './styles'

export default function Header() {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((item) => item.cart.isOpen)
  const totalOfElements = useAppSelector((item) => item.cart.items.length)
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>Marvel Comics Store</S.Logo>
        <S.ContainerButtons>
          <S.HomeLink as="a">
            <HomeIcon />
          </S.HomeLink>
          <S.CatButton onClick={() => dispatch(toggleCart())}>
            {!isOpen ? (
              <div>
                <ShoppingCart />
                <span>({totalOfElements})</span>
              </div>
            ) : (
              <X />
            )}
          </S.CatButton>
        </S.ContainerButtons>
      </S.Wrapper>
      <Cart />
    </S.Container>
  )
}
