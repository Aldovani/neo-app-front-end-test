'use client'

import { Comic } from '@/entities/comic'
import { ReactNode } from 'react'
import { ComicCard } from './components/card'
import * as S from './styles'

type CatalogProps = {
  comics: Comic[]
  children: ReactNode
  totalElement: number
  offset: number
}

export function CatalogClient({
  comics,
  children,
  offset,
  totalElement,
}: CatalogProps) {
  return (
    <>
      <h3>
        {offset} de {totalElement}
      </h3>

      <S.ContainerCards>
        {comics.map((comic) => (
          <ComicCard
            id={comic.id}
            price={comic.prices[0].price}
            thumbnail={comic.thumbnail.path + '.' + comic.thumbnail.extension}
            title={comic.title}
            key={comic.id}
          />
        ))}
      </S.ContainerCards>
      {children}
    </>
  )
}
