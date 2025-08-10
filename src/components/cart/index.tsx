'use client'

import { useAppDispatch, useAppSelector } from '@/stores'
import { toggleCart } from '@/stores/modules/cart'
import { formateMoney } from '@/utils/formate-money'
import { useRouter } from 'next/navigation'
import { Button } from '../button'
import { CartItem } from './components/item'
import * as S from './styles'

export function Cart() {
  const products = useAppSelector((item) => item.cart.items)

  const total = products.reduce((accumulator, currentValue) => {
    const subTotal = currentValue.product.price * currentValue.quantity

    return accumulator + subTotal
  }, 0)

  const isOpen = useAppSelector((item) => item.cart.isOpen)
  const router = useRouter()
  const dispatch = useAppDispatch()

  function handleGoToDetails() {
    router.push('/cart')
    dispatch(toggleCart())
  }

  return (
    <S.Container $isOpen={isOpen}>
      <S.Overlay />
      <S.Body>
        <S.Header>
          <h3>Carrinho</h3>
        </S.Header>

        <S.Main>
          {products.map((item) => (
            <CartItem
              imgUrl={item.product.imgUrl}
              price={item.product.price}
              title={item.product.title}
              quantity={item.quantity}
              key={item.product.id}
              id={item.product.id}
            />
          ))}
        </S.Main>

        <S.Footer>
          <div className="price-container">
            <h4>Total</h4>
            <h3>{formateMoney(total)}</h3>
          </div>
          <Button onClick={handleGoToDetails}>Ver mais detalhes</Button>
        </S.Footer>
      </S.Body>
    </S.Container>
  )
}
