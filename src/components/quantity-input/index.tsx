import * as S from './styles'

type QuantityInputProp = {
  quantity: number
  incrementAction: () => void
  decrementAction: () => void
}

export function QuantityInput({
  quantity,
  decrementAction,
  incrementAction,
}: QuantityInputProp) {
  return (
    <S.Container>
      <S.DecrementButton onClick={decrementAction}>-</S.DecrementButton>
      <span>{quantity}</span>
      <S.IncrementButton onClick={incrementAction}>+</S.IncrementButton>
    </S.Container>
  )
}
