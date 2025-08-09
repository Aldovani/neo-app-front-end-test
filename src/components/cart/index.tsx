'use client'

import { formateMoney } from '@/utils/formate-money'
import { Button } from '../button'
import { Item } from './components/item'
import * as S from './styles'

export function Cart() {
  return (
    <S.Container>
      <S.Overlay></S.Overlay>
      <S.Body>
        <S.Header>
          <h3>Carrinho</h3>
        </S.Header>

        <S.Main>
          <Item />
        </S.Main>

        <S.Footer>
          <div className="price-container">
            <h4>Total</h4>
            <h3>{formateMoney(55)}</h3>
          </div>
          <Button>Ir para o carrinho</Button>
        </S.Footer>
      </S.Body>
    </S.Container>
  )
}
