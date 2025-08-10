'use client'

import { useAppSelector } from '@/stores'
import { CartList } from './_components/list'
import * as S from './styles'

export default function CartPage() {
  const totalOfItems = useAppSelector((item) => item.cart.items.length)

  return (
    <S.Background>
      <S.Container>
        <div>
          <S.Header>
            <S.Title>Carrinho</S.Title>
            <span>{totalOfItems} items</span>
          </S.Header>
          <CartList />
        </div>
        <div></div>
      </S.Container>
    </S.Background>
  )
}
