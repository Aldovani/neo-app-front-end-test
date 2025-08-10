import { QuantityInput } from '@/components/quantity-input'
import { useCart } from '@/stores/modules/cart/actions'
import { CartProductItem } from '@/stores/modules/cart/types'
import { formateMoney } from '@/utils/formate-money'
import Image from 'next/image'
import * as S from './styles'

type CartListItemProps = CartProductItem & {
  quantity: number
}

export function CartListItem({
  id,
  imgUrl,
  price,
  title,
  quantity,
}: CartListItemProps) {
  const { handleAddProduct, handleDeleteProduct, handleRemoveProduct } =
    useCart()
  return (
    <S.Container>
      <S.WrapperContent>
        <Image src={imgUrl} alt={title} width={80} height={88} />
        <div>
          <S.Title>{title}</S.Title>
          <S.RemoveButton onClick={() => handleDeleteProduct(id)}>
            Excluir
          </S.RemoveButton>
        </div>
      </S.WrapperContent>

      <QuantityInput
        quantity={quantity}
        decrementAction={() =>
          handleRemoveProduct({
            id,
            imgUrl,
            price,
            title,
          })
        }
        incrementAction={() =>
          handleAddProduct({
            id,
            imgUrl,
            price,
            title,
          })
        }
      />

      <S.WrapperPrice>
        <div>
          <span className="discount">-36%</span>
          <span className="normal-price">{formateMoney(price)}</span>
        </div>
        <S.Price>{formateMoney(quantity * price)}</S.Price>
      </S.WrapperPrice>
    </S.Container>
  )
}
