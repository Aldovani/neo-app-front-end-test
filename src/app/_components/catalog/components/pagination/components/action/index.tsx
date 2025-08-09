import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as S from './styles'

type PaginationActionProps = {
  isDisable: boolean
  currentPage: number
  type: 'NEXT' | 'PREVIOUS'
}

export function PaginationAction(props: PaginationActionProps) {
  if (props.type === 'NEXT') {
    return (
      <S.Container href={{ query: { page: props.currentPage + 1 } }}>
        <ChevronRight />
      </S.Container>
    )
  }

  return (
    <S.Container href={{ query: { page: props.currentPage - 1 } }}>
      <ChevronLeft />
    </S.Container>
  )
}
