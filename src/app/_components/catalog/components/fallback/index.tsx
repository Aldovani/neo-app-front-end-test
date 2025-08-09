'use client'

import * as C from '../../styles'
import * as S from './styles'

export function CatalogFallback() {
  const elements = new Array(20).fill('')

  return (
    <C.ContainerCards>
      {elements.map((_, index) => (
        <S.Container key={index}>
          <S.Image />

          <div className="footer">
            <S.Title />
            <S.Title />
            <S.Price />
          </div>
        </S.Container>
      ))}
    </C.ContainerCards>
  )
}
