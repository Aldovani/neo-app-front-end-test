'use client'
import * as S from './styles'
type PaginationItemProps = {
  isActive?: boolean
  isDisable?: boolean
  pageNumber: number
}

export function PaginationItem({
  pageNumber,
  isActive = false,
}: PaginationItemProps) {
  return (
    <S.Container
      $isActive={isActive}
      scroll={false}
      href={{
        query: {
          page: pageNumber,
        },
      }}
    >
      {pageNumber}
    </S.Container>
  )
}
