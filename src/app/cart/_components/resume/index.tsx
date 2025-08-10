import { Button } from '@/components/button'
import { useAppSelector } from '@/stores'
import { formateMoney } from '@/utils/formate-money'
import * as S from './styles'

export function ResumeOrder() {
  const total = useAppSelector((item) => item.cart.items).reduce(
    (accumulator, currentValue) => {
      const subTotal = currentValue.product.price * currentValue.quantity

      return accumulator + subTotal
    },
    0,
  )

  return (
    <S.Container>
      <header>
        <S.Titile>Resumo do pedido</S.Titile>
      </header>

      <S.Content>
        <S.List>
          <S.ListItem>
            <span>Desconto:</span>
            <h4>58</h4>
          </S.ListItem>
          <S.ListItem>
            <span>Total:</span>
            <h4>{formateMoney(total)}</h4>
          </S.ListItem>
        </S.List>
      </S.Content>

      <footer>
        <Button>Finalizar compra</Button>
      </footer>
    </S.Container>
  )
}
