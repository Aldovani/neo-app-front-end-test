'use client'

import { Button } from '@/components/button'
import * as S from './styles'

export default function Home() {
  return (
    <>
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
        {/* <source media="(max-width:550px)" srcSet="./hero-image-mobile.png" />
          <source media="(max-width:850px)" srcSet="./hero-image-tablet.png" />
          <S.BgHero src="hero-image-desktop.png" alt="Flowers" /> */}
        <S.Divider />
        {/* <source
            media="(max-width:550px)"
            srcSet="./divider-image-mobile.png"
          />
          <source
            media="(max-width:850px)"
            srcSet="./divider-image-tablet.png"
          />
          <S.BgDivider src="divider-image-desktop.png" alt="Flowers" /> */}
      </S.Container>
    </>
  )
}
