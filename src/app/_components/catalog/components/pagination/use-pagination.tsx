type UsePaginationProps = {
  elements?: number
  lastPage?: number
  currentPage: number
}

export const SIBLINGS_COUNT = 2

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export function usePagination({
  elements = 1,
  currentPage = 1,
}: UsePaginationProps) {
  const totalOfPages = Math.ceil(elements / 20)
  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - SIBLINGS_COUNT, currentPage - 1)
      : []

  const nextPages =
    currentPage < totalOfPages
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + SIBLINGS_COUNT, totalOfPages),
        )
      : []

  return {
    nextPages,
    previousPages,
    lastPage: totalOfPages,
    currentPage,
    elements,
    totalOfPages,
  }
}
