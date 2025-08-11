'use client'
import { Button } from '@/components/button'
import { QuantityInput } from '@/components/quantity-input'
import { useAppSelector } from '@/stores'
import { useCart } from '@/stores/modules/cart/actions'
import { formateMoney } from '@/utils/formate-money'
import Image from 'next/image'
import * as S from './styles'

type ComicDetailsClientProps = {
  title: string
  rarity: string
  price: number
  id: number
  imgUrl: string
  description: string
  discountWithCoupon: number
}

export function ComicDetailsClient({
  description,
  id,
  imgUrl,
  price,
  title,
  rarity,
  discountWithCoupon,
}: ComicDetailsClientProps) {
  const { handleAddProduct, handleRemoveProduct } = useCart()

  const product = useAppSelector((item) =>
    item.cart.items.find((product) => product.product.id === id),
  )

  return (
    <S.Background>
      <S.Container>
        <S.ContainerImage>
          <Image src={imgUrl} alt={title} fill objectFit="contain" />
        </S.ContainerImage>

        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Price>{formateMoney(price)}</S.Price>
          <div className="container-action">
            {product?.quantity ? (
              <QuantityInput
                decrementAction={() => {
                  handleRemoveProduct(id)
                }}
                incrementAction={() =>
                  handleAddProduct({
                    id,
                    imgUrl,
                    price,
                    title,
                    rarity,
                    discountWithCoupon,
                  })
                }
                quantity={product?.quantity || 0}
              />
            ) : (
              <Button
                onClick={() =>
                  handleAddProduct({
                    id,
                    imgUrl,
                    price,
                    title,
                    rarity,
                    discountWithCoupon,
                  })
                }
              >
                Adicionar ao carrinho
              </Button>
            )}
          </div>
        </S.Content>
      </S.Container>
    </S.Background>
  )
}
