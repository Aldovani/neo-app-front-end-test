'use client'

import { QuantityInput } from '@/components/quantity-input'
import {
  handleAddProduct,
  handleRemoveProduct,
} from '@/stores/modules/cart/actions'
import { formateMoney } from '@/utils/formate-money'
import Image from 'next/image'
import * as S from './styles'

type CartItemProp = {
  imgUrl: string
  title: string
  price: number
  quantity: number
  id: number
}

export function CartItem({ imgUrl, price, title, quantity, id }: CartItemProp) {
  return (
    <S.Container>
      <Image src={imgUrl} alt={title} width={80} height={88} />

      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <div className="container-price">
          <S.Price>{formateMoney(price)}</S.Price>

          <QuantityInput
            quantity={quantity}
            decrementAction={() =>
              handleRemoveProduct({
                id,
                imgUrl,
                price,
                title,
              })
            }
            incrementAction={() =>
              handleAddProduct({
                id,
                imgUrl,
                price,
                title,
              })
            }
          />
        </div>
      </S.Wrapper>
    </S.Container>
  )
}
