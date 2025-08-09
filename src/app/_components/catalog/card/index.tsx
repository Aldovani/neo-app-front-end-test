import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import * as S from './styles'
export function ComicCard() {
  return (
    <S.Container>
      <S.ContainerImage>
        <Image src="/comic.png" alt="" width={235} height={248} />
      </S.ContainerImage>

      <S.Wrapper>
        <S.Title>Homem-Aranha guerreiro das sombras – Mangá</S.Title>
        <S.Price>R$ 79,90</S.Price>
      </S.Wrapper>

      <S.ButtonAddToCart>
        <ShoppingBasket />
      </S.ButtonAddToCart>
    </S.Container>
  )
}
