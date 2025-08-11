import { Button } from '@/components/button'
import { useAppSelector } from '@/stores'
import { useCart } from '@/stores/modules/cart/actions'
import { formateMoney } from '@/utils/formate-money'
import { useRef } from 'react'
import * as S from './styles'

export function ResumeOrder() {
  const { handleVerifyCoupon } = useCart()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const products = useAppSelector((item) => item.cart.items)

  const total = products.reduce((accumulator, currentValue) => {
    const subTotal = currentValue.product.price * currentValue.quantity

    return accumulator + subTotal
  }, 0)

  function handleVerify() {
    if (!inputRef.current) return

    handleVerifyCoupon(inputRef.current?.value)
  }

  return (
    <S.Container>
      <header>
        <S.Titile>Resumo do pedido</S.Titile>
      </header>

      <S.CupomContainer>
        <div>
          <label htmlFor="discount">Cupom de desconto</label>
          <S.CupomInput
            ref={inputRef}
            type="text"
            id="discount"
            placeholder="EX: MARVEL10"
          />
        </div>

        <Button onClick={handleVerify}>Aplicar</Button>
      </S.CupomContainer>

      <S.Content>
        <S.List>
          <S.ListItem>
            <span>Frete:</span>
            <h4 className="small">Gratis</h4>
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
