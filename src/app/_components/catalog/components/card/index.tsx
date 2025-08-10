'use client'
import { useAppDispatch } from '@/stores'
import { addProduct } from '@/stores/modules/cart'
import { formateMoney } from '@/utils/formate-money'
import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import * as S from './styles'

type ComicCardProps = {
  title: string
  price: number
  thumbnail: string
  id: number
}

export function ComicCard({ price, thumbnail, title, id }: ComicCardProps) {
  const dispatch = useAppDispatch()

  function handleAddProduct() {
    dispatch(
      addProduct({
        id,
        imgUrl: thumbnail,
        price,
        title,
      }),
    )
  }

  return (
    <S.Container>
      <S.Link href={`/comic/${id}`}>
        <S.ContainerImage>
          <Image src={thumbnail} alt={title} width={235} height={248} />
        </S.ContainerImage>

        <S.Wrapper>
          <S.Title>{title}</S.Title>
          <S.Price>{formateMoney(price)}</S.Price>
        </S.Wrapper>
      </S.Link>
      <S.ButtonAddToCart
        onClick={(e) => {
          e.stopPropagation()
          handleAddProduct()
        }}
      >
        <ShoppingBasket />
      </S.ButtonAddToCart>
    </S.Container>
  )
}
