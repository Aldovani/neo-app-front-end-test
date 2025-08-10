'use client'

import { Button } from '@/components/button'
import { useAppSelector } from '@/stores'
import { useRouter } from 'next/navigation'
import { CartList } from './_components/list'
import { ResumeOrder } from './_components/resume'
import * as S from './styles'

export default function CartPage() {
  const totalOfItems = useAppSelector((item) => item.cart.items.length)
  const router = useRouter()
  return (
    <S.Background>
      <S.Container>
        {totalOfItems === 0 && (
          <S.EmptyState>
            <S.EmptyStateTitle>
              Voçe não possui nada no carrinho
            </S.EmptyStateTitle>
            <Button onClick={() => router.push('/')}>Ir as compras</Button>
          </S.EmptyState>
        )}
        {totalOfItems > 0 && (
          <>
            <div>
              <S.Header>
                <S.Title>Carrinho</S.Title>
                <span>{totalOfItems} items</span>
              </S.Header>
              <CartList />
            </div>
            <ResumeOrder />
          </>
        )}
      </S.Container>
    </S.Background>
  )
}
