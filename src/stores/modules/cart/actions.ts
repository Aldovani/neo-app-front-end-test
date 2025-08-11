import { useAppDispatch } from '@/stores'
import {
  addProduct,
  deleteProduct,
  removeCoupon,
  removeProduct,
  verifyCoupon,
} from '.'
import { CartProductItem } from './types'

export function useCart() {
  const dispatch = useAppDispatch()

  function handleRemoveProduct(id: CartProductItem['id']) {
    dispatch(
      removeProduct({
        id,
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
  function handleAddProduct({
    id,
    imgUrl,
    price,
    title,
    rarity,
    discountWithCoupon,
  }: CartProductItem) {
    dispatch(
      addProduct({
        id,
        imgUrl,
        price,
        title,
        rarity,
        discountWithCoupon,
      }),
    )
  }
  function handleRemoveCoupon() {
    dispatch(removeCoupon())
  }
  function handleVerifyCoupon(coupon: string) {
    dispatch(verifyCoupon({ coupon }))
  }

  return {
    handleVerifyCoupon,
    handleRemoveCoupon,
    handleAddProduct,
    handleDeleteProduct,
    handleRemoveProduct,
  }
}
