'use client'

import { PaginationAction } from './components/action'
import { PaginationItem } from './components/item'
import * as S from './styles'
import { SIBLINGS_COUNT, usePagination } from './use-pagination'

type PaginationProps = {
  totalOfElements?: number
  lastPages?: number
  currentPage: number
}

export function Pagination({
  lastPages = 0,
  totalOfElements = 0,
  currentPage,
}: PaginationProps) {
  const { lastPage, nextPages, previousPages, totalOfPages } = usePagination({
    lastPage: lastPages,
    elements: totalOfElements,
    currentPage,
  })
  return (
    <S.Container>
      {currentPage > 1 && (
        <PaginationAction
          isDisable={currentPage === 1}
          type="PREVIOUS"
          currentPage={currentPage}
        />
      )}
      {currentPage > 1 + SIBLINGS_COUNT && (
        <>
          <PaginationItem pageNumber={1} />
          {currentPage > 2 + SIBLINGS_COUNT && <S.Divider>...</S.Divider>}
        </>
      )}
      {previousPages.map((item) => (
        <PaginationItem key={item} pageNumber={item} />
      ))}
      {currentPage && <PaginationItem isActive pageNumber={currentPage} />}
      {nextPages.map((item) => (
        <PaginationItem key={item} pageNumber={item} />
      ))}
      {currentPage + SIBLINGS_COUNT < lastPage && (
        <>
          {currentPage + 1 + SIBLINGS_COUNT < lastPage && (
            <S.Divider>...</S.Divider>
          )}
          <PaginationItem pageNumber={lastPage} />
        </>
      )}
      {currentPage < lastPage && (
        <PaginationAction
          isDisable={totalOfPages === currentPage}
          type="NEXT"
          currentPage={currentPage}
        />
      )}
    </S.Container>
  )
}
