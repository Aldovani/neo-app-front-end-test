import { useAppDispatch } from '@/stores'
import { addProduct, deleteProduct, removeProduct } from '.'
import { CartProductItem } from './types'

export function useCart() {
  const dispatch = useAppDispatch()

  function handleRemoveProduct({ id, imgUrl, price, title }: CartProductItem) {
    dispatch(
      removeProduct({
        id,
        imgUrl,
        price,
        title,
      }),
    )
  }
  function handleDeleteProduct(id: CartProductItem['id']) {
    dispatch(
      deleteProduct({
        id,
      }),
    )
  }
  function handleAddProduct({ id, imgUrl, price, title }: CartProductItem) {
    dispatch(
      addProduct({
        id,
        imgUrl,
        price,
        title,
      }),
    )
  }

  return {
    handleAddProduct,
    handleDeleteProduct,
    handleRemoveProduct,
  }
}
