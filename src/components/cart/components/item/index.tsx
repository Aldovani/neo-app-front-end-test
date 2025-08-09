import Image from 'next/image'
import * as S from './styles'

export function Item() {
  return (
    <S.Container>
      <Image src="/comic.png" alt="sada" width={80} height={88} />

      <S.Wrapper>
        <S.Title>Batman: O Cavaleiro das Trevas – Edição Definitiva</S.Title>
        <div>
          <S.Price>R$ 129,90</S.Price>
        </div>
      </S.Wrapper>
    </S.Container>
  )
}
