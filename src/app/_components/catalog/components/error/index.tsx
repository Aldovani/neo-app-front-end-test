'use client'

import { Button } from '@/components/button'
import { useRouter } from 'next/navigation'
import * as S from './styles'

export function ErrorLoading() {
  const router = useRouter()

  return (
    <S.Container>
      <S.Title>Erro</S.Title>
      <S.Description>erro ao carregar o catalogo de quadrinhos</S.Description>
      <Button margin="16px 0" onClick={() => router.refresh()}>
        Recarregar
      </Button>
    </S.Container>
  )
}
