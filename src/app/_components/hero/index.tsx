'use client'

import { Button } from '@/components/button'
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
          <Button margin="1.75rem 0 0 0">Comece sua coleção</Button>
        </div>
      </S.Wrapper>

      <S.HerosPicture />
      <S.Divider />
    </S.Container>
  )
}
