import { useAppSelector } from '@/stores'
import { CartListItem } from '../item'
import * as S from './styles'

export function CartList() {
  const items = useAppSelector((item) => item.cart.items)

  return (
    <S.Container>
      {items.map((item) => (
        <CartListItem
          discountWithCoupon={item.product.discountWithCoupon}
          rarity={item.product.rarity}
          id={item.product.id}
          imgUrl={item.product.imgUrl}
          price={item.product.price}
          quantity={item.quantity}
          title={item.product.title}
          key={item.product.id}
        />
      ))}
    </S.Container>
  )
}
