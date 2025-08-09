'use client'

import { ComicCard } from './card'
import * as S from './styles'

export default function Catalog() {
  return (
    <S.Background>
      <S.Container>
        <h1>sdas</h1>

        <S.ContainerCards>
          <ComicCard />
          <ComicCard />
          <ComicCard />
          <ComicCard />
          <ComicCard />
          <ComicCard />
          <ComicCard />
          <ComicCard />

          <ComicCard />
        </S.ContainerCards>
      </S.Container>
    </S.Background>
  )
}
