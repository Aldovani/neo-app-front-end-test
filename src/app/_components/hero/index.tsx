'use client'

import Link from 'next/link'
import * as S from './styles'

export function Hero() {
  return (
    <S.Container>
      <S.Wrapper>
        <div className="content">
          <S.Title>Liberte Seu Herói Interior</S.Title>
          <S.Description>
            Encontre HQs raras, colecionáveis exclusivos e os produtos mais
            incríveis do universo Marvel.
          </S.Description>
          <S.Link as={Link} href="#comics">
            Comece sua coleção
          </S.Link>
        </div>
      </S.Wrapper>

      <S.HerosPicture />
      <S.Divider />
    </S.Container>
  )
}
