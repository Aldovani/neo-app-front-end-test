import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import * as S from './styles'
import { formateMoney } from '@/utils/formate-money'

type ComicCardProps = {
  title: string
  price: number
  thumbnail: string
  id: number
}

export function ComicCard({ price, thumbnail, title, id }: ComicCardProps) {
  return (
    <S.Container href={`/comic/${id}`}>
      <S.ContainerImage>
        <Image src={thumbnail} alt={title} width={235} height={248} />
      </S.ContainerImage>

      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Price>{formateMoney(price)}</S.Price>
      </S.Wrapper>

      <S.ButtonAddToCart>
        <ShoppingBasket />
      </S.ButtonAddToCart>
    </S.Container>
  )
}
